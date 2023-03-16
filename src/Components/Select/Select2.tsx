import React, {useState} from 'react';
import styles from "./select.module.css"

type ItemType = {
    title: string
    value: any

}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

const SelectKabzda = (props: SelectPropsType) => {

    const [active, setActive] = useState(false)
    const showItems = () => setActive(true)

    const selectedItem = props.items.find(i => i.value === props.value)
    return (
        <>
            <select>
                <option value="">Minsk</option>
                <option value="">Moscow</option>
                <option value="">London</option>
            </select>
            <div className={styles.select + " " + (active ? styles.active : "")}>

                <h3 onClick={showItems}>{selectedItem && selectedItem.title}</h3>
                {
                    active && <div className={styles.items}>{props.items.map(i => <div key={i.value}>{i.title}</div>)}
                </div>
                }


            </div>
        </>

    );
};

export default SelectKabzda;