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
import ControlledInput from "./Components/ControlledInput/ControlledInput";
import ControlledCheckbox from "./Components/ControlledCheckbox/ControlledCheckbox";
import {Select} from "./Components/Select/Select";
import Select2 from "./Components/Select/Select2";





function App(props: any) {


    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    const [value, setValue] = useState('2')


    return (
        <div className={"App"}>
{/*            <Rating  value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       onChange ={() => {setAccordionCollapsed(!accordionCollapsed)} } />
            <OnOff on={switchOn} onChange={(on)=>{setSwitchOn(on)}}/>*/}

            {/*<ControlledInputWithFixedValue/>*/}
            {/*<GetValueOfUncontrolledInputByButtonPress />*/}
            {/*<ControlledInput/>*/}
{/*            <ControlledCheckbox/>
            <Accordion titleValue={'menu'} collapsed={accordionCollapsed} onChange={() => {setAccordionCollapsed(!accordionCollapsed)} } items={[{title:"Mimuch", value: 1}, {title:"Valera", value: 2} , {title:"Artem", value: 3}, {title: "Vicktor", value:4}]} onClick={(value)=>{alert('user with ID ${id} should be happy')}}/>*/}
            <UncontrolledAccordion titleValue={'menu'}/>

{/*            <Select items={[{title:"Mimuch", value: 1}, {title:"Valera", value: 2} , {title:"Artem", value: 3}, {title: "Vicktor", value:4}]} value={1}  onChange={()=>{}}/>

            <Select2 onChange={setValue} value={value} items={[
                {value: "1", title: "Minsk"},
                {value: "2", title: "Moscow"},
                {value: "3", title: "Kiev"}
            ]}/>*/}
        </div>
    );
}


export default App;
