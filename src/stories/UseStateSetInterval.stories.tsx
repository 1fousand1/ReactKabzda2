import React, {useEffect, useMemo, useState} from 'react'

export default {
    title: "useEffect demo"
}

export const SetTimeoutSimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1);
    console.log("SimpleExample");

    useEffect(() => {
        setInterval(()=>{
            setCounter((state)=> state + 1);
        },1000)
    }, [])



    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>+</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

