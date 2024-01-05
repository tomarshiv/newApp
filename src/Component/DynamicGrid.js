import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const DynamicGrid = () => {
    data = [
        {
            id: 1,
            name: "Sam",
        },
        {
            id: 2,
            name: "Sam",
        },
        {
            id: 3,
            name: "Sam",
        },
        {
            id: 4,
            name: "Sam",
        },
        {
            id: 5,
            name: "Sam",
        },
        {
            id: 6,
            name: "Sam",
        },
        {
            id: 7,
            name: "Sam",
        },
        {
            id: 8,
            name: "Sam",
        },
    ]
    return (
        <View>
            <Text style={{ fontSize: 29, textAlign: 'center' }}>DynamicGrid</Text>
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: "wrap", backgroundColor: 'skyblue' }}>
                {/* <Text style={styles.item}>Sam</Text>
            <Text  style={styles.item}>MAnu</Text>
            <Text  style={styles.item}>Sam</Text> */}
                {
                    data.map((item) => <Text style={styles.item}>{item.name}</Text>)
                }

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        fontSize: 23,
        height: 90,
        textAlign: 'center',
        backgroundColor: 'skyblue',
        padding: 5,
        margin: 5,
        width: 80,
        textAlignVertical: 'center'


    }
})
export default DynamicGrid