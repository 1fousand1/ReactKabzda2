import React, {useEffect, useMemo, useState} from 'react'

export default {
    title: "useEffect demo"
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1);
    console.log("SimpleExample");

    useEffect(() => {
        console.log('useEffect every render');
        document.title = counter.toString();
    })

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)');
        document.title = counter.toString();
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter change');
        document.title = counter.toString();
    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>+</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('');
    console.log("Component rendered");

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText((state)=>state + e.key)
        }

        window.addEventListener('keypress', handler)
        return ()=> {
            window.addEventListener('keypress', handler);
        }
    }, [])


    return <>
        Typed text: {text}
    </>
}
