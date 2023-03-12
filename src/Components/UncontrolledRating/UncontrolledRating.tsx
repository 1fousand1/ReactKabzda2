import React, {useState} from 'react';


type RatingPropsType = {}


const UncontrolledRating = (props: RatingPropsType) => {
    console.log('Rating rendering')

    let [value, setValue] = useState(0);

    return (
        <div>
            <div><Star selected={value > 0} setValue={() => {setValue(1)}} />
                <Star selected={value > 1} setValue={() => {setValue(2)}} />
                <Star selected={value > 2} setValue={() => {setValue(3)}} />
                <Star selected={value > 3} setValue={() => {setValue(4)}} />
                <Star selected={value > 4} setValue={() => {setValue(5)}} />

            </div>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
}

/*const Star = (props: StarPropsType) => (props.selected === true) ? (<span><b>Star </b></span>) :  <span>Star</span>*/

function Star(props: StarPropsType) {
    console.log('Star rendering')

    return <span>{props.selected ? <b> star</b> : ' star'}</span>
}


export default UncontrolledRating;