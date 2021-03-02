import { useState, useEffect, useContext, useRef } from 'react';
import { CountdownContext } from '../contexts/CountdowndContext';
import styles from '../styles/components/Countdown.module.css'

export function Countdown() {
    const [width, setWidth] = useState(100);

    const { 
        durationChallenge,
        minutes,
        seconds, 
        hasFinished, 
        isActive, 
        resetCountdown, 
        startCountdown 
    } = useContext(CountdownContext);

    useEffect(() => {
        var resultado = 100 * minutes+seconds / durationChallenge;
        if(resultado !== undefined)
            setWidth(resultado*100)
    }, [minutes, seconds])

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    const buttonActive = useRef();

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    {isActive ? (
                        <button
                            ref={buttonActive}
                            type="button"
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            onClick={resetCountdown}
                        >
                            Abandonar ciclo
                            <div style={{width: `${width}%`}}></div>
                        </button>
                    ) : (
                        <button
                            type="button"
                            className={styles.countdownButton}
                            onClick={startCountdown}
                        >
                            Iniciar um ciclo
                        </button>
                    )}
                </>
            )}
        </div>
    );
}