import React, { useState, useEffect } from "react";
import { Progress } from 'reactstrap';
import axios from 'axios';

const ProgressBar = () => {

    const [progressValue, setProgressValue] = useState(0);

    useEffect(() => {

        let username = localStorage.getItem('username');
        let token = localStorage.getItem('jwt');
        axios.get(`https://caring-app-project2021.herokuapp.com/api/v1/users/${username}`,
            {
                headers: {
                    "Authorization": "Bearer " + token
                }
            })
            .then(result => {
                // once API returns data, check if activity have data, then construct the event list for calendar
                if (result.data.activity !== undefined) {
                    // this will give the total length of data
                    let total = result.data.activity.length;

                    // this will help filter the new array with only completed data
                    let completedTasks = result.data.activity.filter(x => {
                        return x.is_completed
                    })

                    // this will give how many completed task in the data
                    let completeCount = completedTasks.length;

                    // set the progress value
                    setProgressValue(completeCount / total * 100);
                }
            })
            .catch(error => {
                console.log(error)
            })
    }, [progressValue]);

    return (
        <div className="progress-bar" style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "30px", backgroundColor: "inherit" }}>Task Completion Progress
            <Progress color="info" value={progressValue} style={{ width: "250px" }}>{Math.round(progressValue)}%</Progress>
        </div>
    );

};

export default ProgressBar;