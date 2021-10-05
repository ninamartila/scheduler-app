import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import { schedulerList } from '../data/constants'
import { dimensions } from '../helpers/metrics';

export default function ListScheduler({ navigation }) {
    const [dateList, setDateList] = useState([])

    function onPress(item) {
        navigation.navigate('DetailScheduler', {
            data: item
        })
    }

    useEffect(() => {
        generateDateList()
    }, [])

    const generateDateList = () => {
        const temp = []
        const currentDate = moment().startOf('day')
        const endDate = moment().endOf('month').startOf('day')

        while (currentDate.diff(endDate) < 0) {
            const currentSchedule = schedulerList.find(item => moment(item.startTime).isSame(currentDate, 'date'))
            temp.push({
                date: currentDate.clone(),
                data: currentSchedule
            })
            currentDate.add(1, 'day')
        }
        setDateList(temp)
    }

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', paddingBottom: 20 }}>{moment().format('MMMM YYYY')}</Text>
            <View>
                <FlatList
                    data={dateList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) =>
                    (<TouchableOpacity onPress={() => {
                        if (item.data) {
                            onPress(item)
                        }
                    }}>
                        <View style={{ flexDirection: 'row', height: 90, paddingVertical: 10 }}>
                            <View style={{ width: 60, alignItems: 'center' }}>
                                <Text>{item.date.format('ddd').toUpperCase()}</Text>
                                <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 5 }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.date.format('DD')}</Text>
                                </View>
                            </View>
                            {item.data ? <View style={{ backgroundColor: '#E4E7E6', flex: 1, borderRadius: 10, padding: 10 }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item.data.title}</Text>
                                <View style={{ flexDirection: 'row', paddingVertical: 5, alignItems: 'center' }}>
                                    <Ionicons name="ios-time-outline" color="black" size={16} />
                                    <Text style={{ paddingLeft: 5 }}>{moment(item.data.startTime).format('HH.mm')} - {moment(item.data.endTime).format('HH.mm')}</Text>
                                    {moment().isSame(item.date, 'date') && <View style={{ backgroundColor: '#E93B3B', borderRadius: 8, marginLeft: 10 }}>
                                        <Text style={{ color: 'white', paddingHorizontal: 10, paddingVertical: 5 }}>TODAY</Text>
                                    </View>}
                                </View>
                            </View> : <View style={{ flex: 1, borderRadius: 10, borderWidth: 3, alignItems: 'center', justifyContent: 'center', borderStyle: 'dashed', borderColor: '#D2CECE' }}>
                                <Text style={{ fontWeight: 'bold' }}>NO SCHEDULE</Text>
                            </View>}
                        </View>
                    </TouchableOpacity>)}
                />
            </View>
        </View >
    )
}