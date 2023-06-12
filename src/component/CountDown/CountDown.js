import React from 'react'
import { useState, useEffect } from 'react'
import styles from './CountDown.module.css'
import { memo } from 'react'

function CountDown({ time }) {

    const [countdown, setCountDown] = useState(time);
    useEffect(() => {
        if (countdown > 0) {
            setTimeout(() => {
                setCountDown(countdown - 1)
            }, 1000)
        }
    }, [countdown])
    useEffect(() => {
        setCountDown(time);
    }, [time])
    return (
        <span className={styles.countdown}>
            {countdown > 0 ? countdown : 'expired'}
        </span>
    )
}
export default memo(CountDown);
