import React from 'react';
import ReactDOM from 'react-dom';
import InfoBox from './components/info_box.jsx';
import ResponseBox from './components/response_box.jsx';
import {Sticky, Grid } from 'semantic-ui-react';
import styles from './styles/app.css';

class App extends React.Component {
    constructor(props) {
        super(props);      
        this.state = {
            bodyRef: document.getElementsByTagName('body')
        }
    }
    //sticky items can be configured later
    render () {
        return (
            //<Sticky context={this.state.bodyRef}>
                <Grid>
                        <InfoBox data={this.props.data}/>
                        <ResponseBox numRSVP={this.props.data.yes_rsvp_count} />
                </Grid>
            //</Sticky>
        )
    }
}
export default App;