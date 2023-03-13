import React from 'react';

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onClick: (value: any) => void
    items: ItemType[]
}


const Select = (props: SelectPropsType) => {

    return (
        <div>
            <div>{}</div>
            {props.items.map(i => <div>{i.title}</div>)}
        </div>
    );
};
