import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import UserData from './UserData'


const CompFlatList = () => {
    data = [
        {
            id: 1,
            name: "Sam",
            email: 'khushiTomar193@gamil.com'

        },
        {
            id: 2,
            name: "Ram",
            email: 'khushiTomar193@gamil.com'

        },
        {
            id: 3,
            name: "Sam",
            email: 'khushiTomar193@gamil.com'

        },
        {
            id: 4,
            name: "Sam",
            email:'khushiTomar193@gamil.com'

        },

    ]





    return (
        <View>
            <Text style={{ textAlign: 'center', fontSize: 23 }}> Component loop with FlatList</Text>
            <FlatList
                data={data}
                renderItem={({ item }) =>
               <UserData data={item}/>

                }
            />
        </View>
    )

}

// const UserData = (props) => {
//     const item =props.data
//     console.log('###',item)
//     return (
//         <View style={{ flexDirection: 'row', borderWidth: 2, borderColor: 'orange', marginBottom: 10 }}>
//             <Text style={styles.box}>{item.name}</Text>
//             <Text style={styles.box}>{item.email}</Text>
//         </View>

//     )
// }

// const styles = StyleSheet.create({
//     box: {
//         color: '#000',
//         textAlign: 'center',
//         fontSize: 12,
//         flex: 1,
//         margin: 3,
//         padding: 1,
//         backgroundColor: 'lightgray'

//     }
// })
export default CompFlatList