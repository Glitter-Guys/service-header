import React from 'react';
import ReactDOM from 'react-dom';
import { Image } from 'semantic-ui-react';
import 'semantic-ui-css/components/image.css'
//import styles from '../styles/group_box.css';

const GroupBox = function(props) {
  return (
  <div className="groupBox">
    <Image circular className="groupBoxImg" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJHwf8jRTdLyED1Cg_U1v85oO7kt54zg-6oY_HkyNF2T1GlMvJ'} />
    <span className="groupBoxContainer">
        <div className="groupBoxHost">Hosted by {}</div>
        <div className='group-box-group'>From {props.data.group.name}</div>
    </span>
  <style jsx global>{`
    .groupBox {
    display:flex;
    flex-direction: row;
    align-items: center;
}

.groupBoxHost {
    font-size: .875rem;
    line-height: 1.6;
    font-weight: 400;
}

.groupBoxContainer {
    font-size: .875rem;
    line-height: 1.6;
    font-weight: 400;
    stroke: transparent;
    fill: rgba(46,62,72,.6);
    color: rgba(46,62,72,.6);
    margin-left: 7px;
}

.groupBoxImg {
    width: 45px;
    height:45px;
    border-radius:500rem;
}
    `}</style>
  </div>
  )
};

export default GroupBox;
