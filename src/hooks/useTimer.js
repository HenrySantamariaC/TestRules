import { useState, useEffect } from 'react'

const parseTime = (time) => {
    const [days, hours, minutes, seconds] = time.split(':').map(Number);
    return { days, hours, minutes, seconds }
}

const addLeadingZero = (digit) => ((digit < 10 ? '0' : '') + digit.toString())

export const useTimer = (startTime) => {
    const { days, hours, minutes, seconds } = parseTime(startTime)
    const [time, setTime] = useState({ days, hours, minutes, seconds })
    const [paused, setPaused] = useState(false)
    const divider = ':'
    const [isOver, setIsOver] = useState(false)

    useEffect(() => {
        if (paused) {
            return
        }

        const interval = setInterval(() => {
            setTime((prev) => {
                let d = prev.days
                let h = prev.hours
                let m = prev.minutes
                let s = prev.seconds

                s -= 1
                if (s < 0) {
                    s = 59
                    m -= 1
                    if (m < 0) {
                        m = 59
                        h -= 1
                        if (h < 0) {
                            h = 23
                            d -= 1
                            if (d < 0) {
                                d = 0
                            }
                        }
                    }
                }

                return { days: d, hours: h, minutes: m, seconds: s }
            })
        }, 1000)

        if (
            time.seconds === 0 &&
            time.minutes === 0 &&
            time.hours === 0 &&
            time.days === 0
        ) {
            setIsOver(true)
            clearInterval(interval)
            return
        }

        return () => clearInterval(interval)
    }, [days, hours, minutes, seconds, time, paused])

    return {
        current: `${addLeadingZero(time.days)}${divider}${addLeadingZero(
            time.hours,
        )}${divider}${addLeadingZero(time.minutes)}${divider}${addLeadingZero(
            time.seconds,
        )}`,
        isPaused: paused,
        isOver,
        currentDays: addLeadingZero(time.days),
        currentHours: addLeadingZero(time.hours),
        currentMinutes: addLeadingZero(time.minutes),
        currentSeconds: addLeadingZero(time.seconds),
        elapsedSeconds:
            days * 86400 +
            hours * 3600 +
            minutes * 60 +
            seconds -
            (time.days * 86400 +
                time.hours * 3600 +
                time.minutes * 60 +
                time.seconds),
        remainingSeconds:
            time.days * 86400 + time.hours * 3600 + time.minutes * 60 + time.seconds,
        pause: () => setPaused(true),
        play: () => setPaused(false),
        reset: () => {
            setIsOver(false)
            setTime({ days, hours, minutes, seconds })
        },
        togglePause: () => {
            setPaused(!paused)
        },
    }
}


