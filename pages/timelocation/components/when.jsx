import React from "react";
import SVG from "react-inlinesvg";
import Moment from "react-moment";

const When = ({ whenData }) => {
  const dateTimeFormat = "dddd, MMMM D YYYY h:mm A";
  const dateFormat = "dddd, MMMM D YYYY";
  const timeFormat = "h:mm A";

  let seriesText = "";
  if (whenData.series) {
    if (whenData.series === "weekly") {
      seriesText = "Repeats every week";
    } else if (whenData.series === "monthly") {
      seriesText = "Repeats every month";
    }
  }

  return <div className="textSection">
      <div className="icon">
        <SVG viewBox="0 0 24 24" height="24" width="24" src="" />
        <svg width="24" height="24">
          <title>clock--small</title>
          <path d="M18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8 8-3.589 8-8m1 0a9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9 9 9 0 0 1 9 9m-5.525 1.658a.503.503 0 0 1-.633.317l-3-1A.502.502 0 0 1 9.5 10.5v-4a.5.5 0 0 1 1 0v3.64l2.658.885a.502.502 0 0 1 .317.633" fillRule="evenodd" />
        </svg>
      </div>
      <div className="when__text">
        {whenData.multiDay ? <span>
            <span className="when__start">
              <Moment format={dateTimeFormat}>{whenData.startTime}</Moment>
            </span>
            <span className="when__end">
              to&nbsp;<Moment format={dateTimeFormat}>
                {whenData.endTime}
              </Moment>
            </span>
          </span> : <span>
            <span className="when__date">
              <Moment format={dateFormat}>{whenData.startTime}</Moment>
            </span>
            <span className="when__time">
              <Moment format={timeFormat}>{whenData.startTime}</Moment>&nbsp;to&nbsp;
              <Moment format={timeFormat}>{whenData.endTime}</Moment>
            </span>
          </span>}
        <span data-test="when__series" className="secondaryText">
          {seriesText}
        </span>
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
          }`}
      </style>
    </div>;
};

export default When;
