import React from 'react';
import ReactDOM from 'react-dom';
import DateBox from './date_box.jsx';
import DetailsBox from './details_box.jsx';
import {Grid} from 'semantic-ui-react';

const InfoBox = function(props) {
  return (
    <Grid.Column width={11}>
      <Grid>
        <DateBox localDate={props.data.local_date} localTime={props.data.local_time}/>
        <DetailsBox data={props.data} />
      </Grid>
    </Grid.Column>
  
  )
};

export default InfoBox;