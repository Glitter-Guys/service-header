import React from 'react';
import ReactDOM from 'react-dom';
import InfoBox from './components/info_box.jsx';
import ResponseBox from './components/response_box.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render () {
        return (
            <div className='container'>
                <InfoBox data={this.props.data}/>
                <ResponseBox numRSVP={this.props.data.yes_rsvp_count} />
            </div>
        )
    }
}
export default App;