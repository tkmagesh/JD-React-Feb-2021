import { useEffect, useState } from 'react';

const Timer = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toString());
    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date().toString());
        }, 1000)
        console.log('Timer component initialized/updated');
        return () => {
            clearInterval(timerId);
            console.log('Timer component unmounted')
        }
    }, [] /* list the variables when change we want the component to be updated */);
    return(<div>{currentTime}</div>)
}

export default Timer;