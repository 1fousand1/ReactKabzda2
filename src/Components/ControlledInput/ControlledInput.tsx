import React, {ChangeEvent, useState} from 'react';
import {action} from "@storybook/addon-actions";



const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        setParentValue(e.currentTarget.value)
    }
    return (
        <div>
            <input value={parentValue} onChange={onChange}/>
        </div>
    );
};

export default ControlledInput;