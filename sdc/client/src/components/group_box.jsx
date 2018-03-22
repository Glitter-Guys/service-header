import React from 'react';
import ReactDOM from 'react-dom';
import { Image } from 'semantic-ui-react';
import styles from '../styles/group_box.css';

const GroupBox = function(props) {
  return (
  <div className={styles.groupBox}>
    <Image circular className={styles.groupBoxImg} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJHwf8jRTdLyED1Cg_U1v85oO7kt54zg-6oY_HkyNF2T1GlMvJ'} />
    <span className={styles.groupBoxContainer}>
        <div className={styles.groupBoxHost}>Hosted by {}</div>
        <div className='group-box-group'>From {props.data.group.name}</div>
    </span>
  </div>
  )
};

export default GroupBox;