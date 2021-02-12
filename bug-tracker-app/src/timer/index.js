import Timer from './timer'
import { useState } from 'react';

const TimerContainer = () => {
    const [showTimer, setShowTimer] = useState(false);
    return(
        <div>
            <label>Show Timer : </label>
            <input type="checkbox" onChange={evt => setShowTimer(evt.target.checked)} />
            { showTimer ? <Timer/> : null }
        </div>
    )
}

export default TimerContainer;