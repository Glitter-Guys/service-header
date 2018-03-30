import React from 'react';
// import styles from './styles/attendee.css';

class Attendee extends React.Component {
  render () {
    return (
      <div className="attendee">
      <img className="attendee_picture" src={this.props.user.photourl}/>
        <div className="attendee_name">{this.props.user.first + ' ' + this.props.user.last}</div>
        <div className="attendee_role">Member</div>
        <style jsx>{`
          .attendee {
            border-radius: 10px;
            background-color: white;
            font: "Graphik Meetup";
            margin: 1px;
            text-align: center;
            padding: 5px 0px 0px 5px;
            height: 150px;
            width: 150px;
          }
          .attendee_picture {
            border-radius: 100px;
            height: 60%;
            width: 60%;
            display: block;
            margin: 10px auto 0;
          }
          .attendee:hover {
            box-shadow: 1px 1px 1px 1px #C0C0C0;
          }
          .attendee_name {
            margin-top: 5px;
            font-family: Graphik Meetup,-apple-system,BlinkMacSystemFont,Roboto,Helvetica,Arial,sans-serif;
            font-size: 14px;
          }
          .attendee_role {
            font-family: Graphik Meetup,-apple-system,BlinkMacSystemFont,Roboto,Helvetica,Arial,sans-serif;
            font-size: 10px;
          }
        `}</style>
      </div>
      )
  }
};

export default Attendee;
