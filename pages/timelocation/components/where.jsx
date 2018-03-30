import React from 'react';
import SVG from 'react-inlinesvg';
// import TextSectionsStyle from './../../dist/styles/textSections.css';
// import ReusableStyles from './../../dist/styles/reusable.css';

const Where = ({ whereData }) => (
  <div className='textSection'>
    <div className='icon'>
      <SVG viewBox="0 0 24 24" height="24" width="24" src="" />
      <svg width="20" height="20" viewBox="0 0 20 20" id="icon-location-pin--small">
        <title>location-pin--small</title>
        <path
          d="M10 9.507a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2m0-3c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2m2.847 11.02A3.438 3.438 0 0 1 10 19a3.438 3.438 0 0 1-2.847-1.472C4.437 13.666 3 10.546 3 8.506 3 3.63 6.606 1 10 1s7 2.63 7 7.506c0 2.04-1.437 5.16-4.153 9.022M10 0C6.067 0 2 3.182 2 8.506c0 2.279 1.459 5.508 4.335 9.597A4.426 4.426 0 0 0 10 20c1.48 0 2.816-.691 3.665-1.897C16.541 14.013 18 10.785 18 8.506 18 3.182 13.933 0 10 0"
          fillRule="evenodd"/>
      </svg>
    </div>
    <div className="where__text">
      {whereData.venuePublic ? (
        <span>
          <span>{whereData.venueName}</span>
          <address className='secondaryText'>
            {whereData.address1}
            {whereData.address2}
            {whereData.address3} ∙ {whereData.city}
          </address>
        </span>
      ) : (
        <span className="where__default">Needs a location</span>
      )}
    </div>
    <style jsx>
      {`
        .secondaryText {
          color: rgba(46, 62, 72, 0.6);
        }
        .textSection {
          display: flex;
          font-size: 0.875rem;
          line-height: 1.6;
          padding: 15px;
        }
        .icon {
          display: flex;
          flex-direction: column;
          margin: 0 20px;
          stroke: transparent;
          fill: rgba(46, 62, 72, 0.6);
        }
        .textSection span {
          display: block;
      `}
    </style>
  </div>
);

export default Where;
