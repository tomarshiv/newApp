import React from 'react'
import { View,Text } from 'react-native'

const MakeListByMap=()=>{
    data=[
        {
            id:1,
            user:"Anu",
            city:"Gwalior"
        },
        {
            id:2,
            user:"Manu",
            city:"Morena"
        }
    ]
    return(
        <View>
           {
            data.map((item)=><Text>{item.city}</Text>)
           }
        </View>
    )
}
export default MakeListByMap;