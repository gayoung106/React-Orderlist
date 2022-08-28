import React from 'react';
import './SelectBox.css'


const SelectBox = (props) => {
    return (
        <select className="select-box">
            {props.options.map((option) => (
                <option
                    key={option.id}
                    value={option.value}
                >
                    {option.name}
                </option>
            ))}
        </select>
    );
};

export default SelectBox;