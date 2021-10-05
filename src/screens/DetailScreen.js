import React from 'react'
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';

export default function DetailScheduler({ route }) {
    const { data } = route.params
    return (
        <View style={{ padding: 20 }}>
            <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>STORE</Text>
                <View style={{ marginVertical: 15, padding: 15, backgroundColor: '#E4E7E6', borderRadius: 10, flexDirection: 'row' }}>
                    <Image
                        style={{ width: 55, height: 55, borderRadius: 10 }}
                        source={{ uri: data.data.image }}
                    />
                    <View style={{ flex: 1, marginLeft: 15 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', paddingBottom: 5 }}>{data.data.title}</Text>
                        <Text style={{ color: '#979797' }}>{data.data.description}</Text>
                        <TouchableOpacity style={{ marginTop: 10, width: 90, alignItems: 'center', paddingVertical: 5, borderWidth: 1, borderColor: 'red', borderRadius: 10 }}>
                            <Text style={{ color: 'red' }}>View Maps</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ paddingTop: 15 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>TIME SCHEDULE</Text>
                <View style={{ marginVertical: 15, padding: 15, backgroundColor: '#E4E7E6', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', paddingVertical: 5, alignItems: 'center' }}>
                        <Ionicons name="ios-time-outline" color="black" size={16} />
                        <Text style={{ paddingLeft: 10, fontWeight: 'bold' }}>{moment(data.data.startTime).format('HH.mm')} - {moment(data.data.endTime).format('HH.mm')}</Text>
                    </View>
                </View>
            </View>
            <View style={{ paddingTop: 15 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>CLOCK IN</Text>
                <View style={{ marginVertical: 15, padding: 15, backgroundColor: '#E4E7E6', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', paddingVertical: 5, alignItems: 'center' }}>
                        <Ionicons name="ios-barcode-outline" color="black" size={20} />
                        <Text style={{ paddingLeft: 10, fontWeight: 'bold' }}>-- : --</Text>
                    </View>
                </View>
            </View>
            <View style={{ paddingTop: 15 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>CLOCK OUT</Text>
                <View style={{ marginVertical: 15, padding: 15, backgroundColor: '#E4E7E6', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', paddingVertical: 5, alignItems: 'center' }}>
                        <Ionicons name="ios-barcode-outline" color="black" size={20} />
                        <Text style={{ paddingLeft: 10, fontWeight: 'bold' }}>-- : --</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}