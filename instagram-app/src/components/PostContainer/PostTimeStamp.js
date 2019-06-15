import React from 'react';
import Moment from "moment";
import './Post.css';

function PostTimeStamp(props) {

    // const timestamp = new Date(props.timestamp);
    // console.log(timestamp);

    return (
        <div className="timestamp">
            <span><time>{props.timestamp}</time></span>
            {/* <Moment fromNow ago><time>{props.timestamp}</time></Moment> */}
            {/* <Moment date={props.timestamp} /> */}
            {/* <Moment date="2018-11-1T12:59-0500" durationFromNow />
            <Moment unix>{props.timestamp}</Moment> */}
            {/* {moment("{props.timestamp}", "LLL").fromNow()}  */}
        </div>
    );
}

export default PostTimeStamp;