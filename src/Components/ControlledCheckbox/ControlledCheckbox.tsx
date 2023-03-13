import React, {ChangeEvent, useState} from 'react';




const ControlledInput = () => {
    const [parentValue, setParentValue] = useState(true);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        setParentValue(e.currentTarget.checked)
    }
    return (
        <div>
            <input type={'checkbox'} checked={parentValue} onChange={onChange}/>
        </div>
    );
};

export default ControlledInput;