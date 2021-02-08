import React from "react";
import { Progress } from 'reactstrap';

const ProgressBar = (props) => {

    return (
        <div className="progress-bar" style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "30px", backgroundColor: "inherit" }}>Task Completion Progress
            <Progress color="info" value={50} style={{ width: "250px" }}>50%</Progress>
        </div>
    );


    // const { bgcolor, completed } = props;

    // const containerStyles = {
    //     height: 20,
    //     width: '70%',
    //     backgroundColor: "#e0e0de",
    //     borderRadius: 50,
    //     margin: 50
    // }

    // const fillerStyles = {
    //     height: '100%',
    //     width: `${completed}%`,
    //     backgroundColor: bgcolor,
    //     borderRadius: 'inherit',
    //     textAlign: 'center'
    // }

    // const labelStyles = {
    //     padding: 5,
    //     color: 'white',
    //     // fontWeight: 'bold'
    // }

    // return (
    //     <div style={containerStyles}>
    //         <div style={fillerStyles}>
    //             <span style={labelStyles}>{`${completed}%`}</span>
    //         </div>
    //     </div>
    // );
};

export default ProgressBar;