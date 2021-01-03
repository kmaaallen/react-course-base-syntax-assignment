import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return (
    <div>
        <label className='label'>Change username:</label>
        <input className='input' onChange={props.change} value={props.username}/>
    </div>
    )
}

export default UserInput;

