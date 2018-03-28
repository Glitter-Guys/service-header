import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/components/button.css'
import 'semantic-ui-css/components/grid.css'
import 'semantic-ui-css/components/icon.css'
import { Grid, Button } from 'semantic-ui-react'
//import styles from '../styles/sharing_box.css'

const SharingBox = function(props) {
  return (
  <Grid.Row className="sharingBox">
      <div className="sharingBoxIndiv">
        <Button className="facebook" compact={true} color='facebook' icon='facebook' />
        <span className="sharingBoxText">Share</span>
      </div>

      <div className="sharingBoxIndiv">
        <Button className="twitter" compact={true} color='twitter' icon='twitter' />
        <span className="sharingBoxText">Tweet</span>
      </div>
    <style jsx global>{`
    .sharingBoxText {
    stroke: transparent;
    fill: #2e3e48;
    color: #2e3e48;
    font-size: 12px;
    line-height: 1.6;
}

.sharingBoxIndiv {
    width:45%;
    display: flex;
    align-items: center;
    justify-content: center;
}


.sharingBox {
    border-top:1px solid rgba(46,62,72,.12);

    border-bottom:1px solid rgba(46,62,72,.12);
    justify-content: space-between !important;
    margin-top: 20px;
    padding-top: 7px !important;
    padding-bottom: 7px !important;
}

.facebook {
    background-color: white !important;
    color: #3b5998 !important;
    padding: 4px !important;
    font-size: 1.5rem !important;

}

.twitter {
    background-color: white !important;
    color: #55acee !important;
    padding: 4px !important;
    font-size: 1.5rem !important;
}
    `}</style>
  </Grid.Row>)
};

export default SharingBox;
