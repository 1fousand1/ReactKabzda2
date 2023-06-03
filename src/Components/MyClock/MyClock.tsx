import React, {useEffect, useState} from 'react'
import styles from './MyClock.module.css'

type PropsType = {}

export const MyClock: React.FC<PropsType> = (props) => {
    // Initialize the current time to the current date and time
    const [displayMode, setDisplayMode] = useState<"digital" | "analogue">("digital");
    const [time, setTime] = useState(new Date());

    // Update the time every second
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    const toggleDisplayMode = () => {
        setDisplayMode((prevMode) =>
            prevMode === "digital" ? "analogue" : "digital"
        );
    };

    const renderDigitalClock = () => {
        const get2digitsString = (num: number) => num < 10 ? "0" + num : num

        const hours = get2digitsString(time.getHours())
        const minutes = get2digitsString(time.getMinutes());
        const seconds = get2digitsString(time.getSeconds());


        return (
            <div className={styles.clockDigital}>
                <span>{hours}</span>
                :
                <span>{minutes}</span>
                :
                <span>{seconds}</span>
            </div>
        );
    };

    const renderAnalogueClock = () => {
        const hours = ((time.getHours() + 11) % 12 + 1) * 30;
        const minutes = time.getMinutes() * 6;
        const seconds = time.getSeconds() * 6;

        return (
            <div className ={styles.clockAnalogue}>
                <div className={styles.hourHand} style={{ transform: `rotate(${hours}deg)` }} />
                <div className={styles.minuteHand} style={{ transform: `rotate(${minutes}deg)` }} />
                <div className={styles.secondHand} style={{ transform: `rotate(${seconds}deg)` }} />
                <span className={styles.twelve}>12</span>
                <span className={styles.one}>1</span>
                <span className={styles.two}>2</span>
                <span className={styles.three}>3</span>
                <span className={styles.four}>4</span>
                <span className={styles.five}>5</span>
                <span className={styles.six}>6</span>
                <span className={styles.seven}>7</span>
                <span className={styles.eight}>8</span>
                <span className={styles.nine}>9</span>
                <span className={styles.ten}>10</span>
                <span className={styles.eleven}>11</span>
            </div>
        );
    };

    return (
        <div className={styles.clockContainer}>

            {displayMode === 'digital' ? renderDigitalClock() : renderAnalogueClock()}

            <button className={styles.switchButton} onClick={toggleDisplayMode}>
                Switch Display
            </button>
        </div>
    );
};