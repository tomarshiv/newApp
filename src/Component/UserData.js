import React from 'react'
import { View,Text,StyleSheet} from 'react-native'


export default UserData = (props) => {
    const item =props.data
    console.log('###',item)
    return (
        <View style={{ flexDirection: 'row', borderWidth: 2, borderColor: 'orange', marginBottom: 10 }}>
            <Text style={styles.box}>{item.name}</Text>
            <Text style={styles.box}>{item.email}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    box: {
        color: '#000',
        textAlign: 'center',
        fontSize: 12,
        flex: 1,
        margin: 3,
        padding: 1,
        backgroundColor: 'lightgray'

    }
})