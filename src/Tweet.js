import React from 'react';
import './App.css';

function Tweet(props){
    const asd = () => {
        console.log("hello")
    };
    return (
        <div className="tweet">
            <h3>{props.name}</h3>
            <p>{props.message}</p>
            <h3>Number of likes</h3>
        </div>
    );
}
export default Tweet;