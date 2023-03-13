import React, {ChangeEvent, useState} from 'react';




const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined);
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        debugger
        setParentValue(e.currentTarget.value)
    }
    return (
        <select value={parentValue} onChange={onChange}>
            <option>none</option>
            <option value={'1'}>Minsk</option>
            <option value={'2'}>Kiev</option>
            <option value={'3'}>Moscow</option>
        </select>
    );
};

export default ControlledSelect;