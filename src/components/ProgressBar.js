import React, { useState, useEffect } from "react";
import { Progress } from 'reactstrap';

const ProgressBar = ({ data }) => {

    const [progressValue, setProgressValue] = useState(0);

    useEffect(() => {

        // this will give the total length of data
        let total = data.length;

        // this will help filter the new array with only completed data
        let result = data.filter(x => {
            return x.isComplete
        })

        // this will give how many completed task in the data
        let completeCount = result.length;

        // set the progress value
        setProgressValue(completeCount / total * 100);

    }, [data]);

    return (
        <div className="progress-bar" style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "30px", backgroundColor: "inherit" }}>Task Completion Progress
            <Progress color="info" value={progressValue} style={{ width: "250px" }}>{Math.round(progressValue)}%</Progress>
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