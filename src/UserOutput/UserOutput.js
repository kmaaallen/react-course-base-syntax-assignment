import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
    <div className='output-card'>
        <p className='bold'>{props.content}</p>
        <p className='italic'>{props.secondContent}</p>
    </div>
    )
}

export default UserOutput;

