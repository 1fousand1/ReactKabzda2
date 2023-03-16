import React, {useState} from 'react';
import "./Select.css"

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    items: ItemType[]
    value: any
/*    onClick: (value: any) => void*/
    onChange: (value: any) => void
}


export const Select: React.FC<SelectPropsType> = ({items, value, onChange}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState(items.find((item) => item.value === value)?.title || '');

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const onClickHandler = (item: ItemType) => {
        onChange(item.value);
        setIsOpen(false);
        setSelectedValue(item.title);
    }


    return (
        <div className="select">
            <div className="tick" onClick={toggleOpen}>
                {isOpen ? <span>&#9650;</span> : <span>&#9660;</span>}
            </div>
            <div className="selected-value" onClick={toggleOpen}>{selectedValue}</div>
            {isOpen && <div className="items">
                {items.map(item =>
                    <div key={value}
                         className="item"
                         onClick={() => onClickHandler(item)}>{item.title}
                    </div>)}
            </div>}
        </div>
    );
};


