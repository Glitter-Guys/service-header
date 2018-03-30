import Header from './header/index';
import Index from './attendees/index';
import App from './details/details'
import WhereWhen from './timelocation/index';

const createAttendeesProps = (dataAttendees) => {
  const data = [];
    for (let i = 0; i < dataAttendees.length; i += 1) {
      let { row } = dataAttendees[i];
      row = row.slice(1, row.length - 1);
      row = row.split(',');
      data.push({
        first: row[0],
        last: row[1],
        photourl: row[2],
      });
    }
  return { eventUsers: data, numberOfAttendees: data.length };
}

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  static async getInitialProps(props) {
    try {
      const resHeader = await fetch(`http://sdc-webserver-balancer-fe4ae9ddc209c0e7.elb.us-west-1.amazonaws.com/api/v2/header/${props.query.eid}`);
      const dataHeader = await resHeader.json();
      const resAttendees = await fetch(`http://54.183.164.58:8000/api/${props.query.eid}/attendees`);
      const dataAttendees = await resAttendees.json();
      const { eventUsers, numberOfAttendees } = createAttendeesProps(dataAttendees);
      let result = await fetch(`http://34.229.192.0:4001/${props.query.eid}`);
      let state = await result.json();
      const res = await fetch(`http://54.215.245.243:9000/api/event/${props.query.eid}`);
      const data = await res.json();
      return {
        header: dataHeader,
        eventUsers: eventUsers,
        numberOfAttendees: numberOfAttendees,
        details: state.details,
        photos: state.photos,
        whenData: data.whenData,
        whereData: data.whereData,
      };
    } catch(err) {
      throw err;
    }
  }
  render() {
    return (
    <div>
      <Header header={this.props.header} />
      <Index
        eventUsers={this.props.eventUsers}
        numberOfAttendees={this.props.numberOfAttendees}
      />
      <App
        details={this.props.details}
        photos={this.props.photos}
      />
      <WhereWhen
        whenData={this.props.whenData}
        whereData={this.props.whereData}
      />
    </div>
    );
  }
}

export default Main;
