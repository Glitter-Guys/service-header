import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/components/modal.css'
import 'semantic-ui-css/components/button.css'
import 'semantic-ui-css/components/grid.css'
import 'semantic-ui-css/components/icon.css'
import {Modal, Button, Grid } from 'semantic-ui-react';
//import styles from '../styles/attendance_box.css';

const AttendanceBox = function(props) {
  return (
  <Grid.Row className="attendanceBox">
      <div className="attendanceBoxQuestion">
        <span className="attendanceBoxText">Are you going?</span>
        <span className="attendanceBoxNumRSVP">{props.numRSVP} people going</span>
      </div>
      <div className="attendanceBoxButtons">
        <Modal trigger={<Button icon='checkmark' compact={true} color={'teal'} className="attendanceBoxButton"></Button>}>
          <Modal.Header>Thanks for the RSVP!</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              But first sign up here
            </Modal.Description>
          </Modal.Content>
        </Modal>

        <Modal trigger={<Button icon='remove' compact={true} color={'teal'} className="attendanceBoxButton"></Button>}>
          <Modal.Header>Your response is almost registered</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              Log in here to finish responding
            </Modal.Description>
          </Modal.Content>
        </Modal>

      </div>
    <style jsx global>{`
    .attendanceBoxNumRSVP {
    font-size: .875rem;
    line-height: 1.6;
    font-weight: 400;
    stroke: transparent;
    fill: rgba(46,62,72,.6);
    color: rgba(46,62,72,.6);
    margin-left: 7px;
}

.attendanceBoxText {
    font-weight: 500;
}

.attendanceBoxButton {
    background: #00a2c7;
    color: #fff;
    width: 45%;
    margin-left: 0px;
}

.attendanceBoxDivider {
    display: inline-block;
    width: 10%;
}

.attendanceBoxQuestion {
    padding:0px;
    margin-bottom: 7px;
}

.attendanceBoxButtons {
    padding:0px;
    width:100%;
    display: flex;
    justify-content: space-between;
}

.attendanceBox {
    padding-bottom: 2px !important;
}
    `}</style>
  </Grid.Row>
  )
};

export default AttendanceBox;
