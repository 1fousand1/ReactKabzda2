import React, {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type UncontrolledAccordionPropsType = {
    titleValue: string
    ///collapsed: boolean
}



const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {

    /*let [collapsed, setCollapsed] = useState(false)*/
    let [state, dispatch] = useReducer(reducer,{collapsed: false});

/*    const onClickCollapsed = () => {
        debugger
        setCollapsed( !collapsed)
    }*/

      return (
          <div>
              {/*<AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed((!collapsed))}}/>*/}
              <AccordionTitle title={props.titleValue} onClick={()=>{dispatch({type: TOGGLE_COLLAPSED})}}/>

              { !state.collapsed  && <AccordionBody />}
          </div>
      )

};


type UncontrolledAccordionTitlePropsType = {
    title: string
    onClick: () => void
}

const AccordionTitle = (props: UncontrolledAccordionTitlePropsType) => {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={()=>{ props.onClick() }}> -- {props.title} -- </h3>

    )

}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
export default UncontrolledAccordion;