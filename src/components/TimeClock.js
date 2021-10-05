import React, { useEffect, useState, Fragment } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import moment from 'moment'

const TimeClock = () => {
    const [currentTime, setCurrentTime] = useState(moment().valueOf())

    let interval

    useEffect(() => {
        clearInterval(interval)
        setInterval(() => {
            setCurrentTime(moment().valueOf() + 1000)
        }, 1000);
        return () => {
            if (interval) clearInterval(interval)
        }
    }, [])

    return (
        <Fragment>
            <Text style={{ fontSize: 60, fontWeight: 'bold' }}>{moment(currentTime).format(`HH:mm`)}</Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{moment(currentTime).format('dddd, DD MMM yyyy')}</Text>
        </Fragment>
    )
}

export default TimeClock

const styles = StyleSheet.create({})
