import React from 'react';
import ReactDOM from 'react-dom';
import InfoBox from './components/info_box.jsx';
import ResponseBox from './components/response_box.jsx';
import GridRow, { Grid } from 'semantic-ui-react';
import styles from './styles/app.css';

class App extends React.Component {
    constructor(props) {
        super(props);      
    }

    render () {
        return (
            <Grid>
                    <InfoBox data={this.props.data}/>
                    <ResponseBox numRSVP={this.props.data.yes_rsvp_count} />
            </Grid>
        )
    }
}
export default App;