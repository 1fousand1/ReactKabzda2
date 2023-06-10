import React, {useEffect, useMemo, useState} from 'react'

export default {
    title: "useEffect demo"
}

export const SetTimeoutSimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1);
    console.log("SimpleExample");

    useEffect(() => {
        const intervalId = setInterval(()=>{
            setCounter((state)=> state + 1);
        },1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>+</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1);
    console.log("Component rendered");

    useEffect(() => {
            console.log("Effect occurred" + counter);

            return () => {
                console.log('reset effect')
            }
    }, [counter])

    const increase = () => {setCounter(counter + 1)}
    return <>
        Hello, {counter}
        <button onClick={increase}>+</button>
    </>
}

