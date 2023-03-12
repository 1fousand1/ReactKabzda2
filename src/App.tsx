import React, {useState} from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import Rating, {RatingValueType} from "./Components/Rating/Rating";
import OnOff from "./Components/OnOff/OnOff";
import UncontrolledAccordion from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./Components/UncontrolledRating/UncontrolledRating";
import accordion from "./Components/Accordion/Accordion";
import {
    GetValueOfUncontrolledInputByButtonPress,
    UncontrolledInput
} from "./Components/UncontrolledInput/UncontrolledInput";





function App(props: any) {


    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className={"App"}>
{/*            <Rating  value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       onChange ={() => {setAccordionCollapsed(!accordionCollapsed)} } />
            <OnOff on={switchOn} onChange={(on)=>{setSwitchOn(on)}}/>*/}

            {/*<ControlledInputWithFixedValue/>*/}
            <GetValueOfUncontrolledInputByButtonPress />
        </div>
    );
}


export default App;
