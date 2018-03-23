import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Button } from 'semantic-ui-react'
import styles from '../styles/sharing_box.css'

const SharingBox = function(props) {
  return (
  <Grid.Row className={styles.sharingBox}>
      <div className={styles.sharingBoxIndiv}>
        <Button className={styles.facebook} compact={true} color='facebook' icon='facebook' />
        <span className={styles.sharingBoxText}>Share</span>
      </div>
      
      <div className={styles.sharingBoxIndiv}>
        <Button className={styles.twitter} compact={true} color='twitter' icon='twitter' />
        <span className={styles.sharingBoxText}>Tweet</span>
      </div>
  </Grid.Row>)
};

export default SharingBox;