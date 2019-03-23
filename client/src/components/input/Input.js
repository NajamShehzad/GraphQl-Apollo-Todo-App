import React from 'react';
import './input.css'


function Input(props) {
    return (
        <div className="textInput" >
            <label>
                <input
                    className="inputfield"
                    placeholder="Enter Text"
                    value={props.text}
                    onChange={props.onChange}
                />
            </label>
        </div>
    );
}

export default Input;
