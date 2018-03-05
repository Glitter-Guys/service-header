import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Button } from 'semantic-ui-react'

const SharingBox = function(props) {
  return (
  <Grid.Row className='sharing-box'>
      <div className='sharing-box-facebook'>
        <Button circular color='facebook' icon='facebook' />
        <span className='sharing-box-facebook-text'>Share</span>
      </div>
      <div className='sharing-box-twitter'>
        <Button circular color='twitter' icon='twitter' />
        <span className='sharing-box-twitter-text'>Tweet</span>
      </div>
  </Grid.Row>)
};

export default SharingBox;