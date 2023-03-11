import React, {useState} from 'react';

export const UncontrolledInput = () => {
    const [value, setValue] = useState('')


    return (
        <>
            <input onChange={(event) => {
                const actualValue = event.currentTarget.value
                setValue(actualValue);
            } }/> -{value}
        </>
    );
};

export const ControlledInputWithFixedValue = () => <input value={'it-incubator.by'}/>

