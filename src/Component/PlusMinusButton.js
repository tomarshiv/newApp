import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'


const PlusMinusButton = () => {
    console.log('###',props)
   

    const BtnMinus = ({props}) => {
        if (props.value > 0) {
            props.setValue(prev => prev - 1)
        }

    }
    const BtnPlus = () => {
        if (props.value < 5) {
          props.setValue(prev => prev + 1)
        }
    }



    

    return (
        <View style={{ flexDirection: "row", alignItems: "center", margin: 8 }} >
            <TouchableOpacity onPress={BtnMinus} style={{ width: 27, backgroundColor: 'green', height: 30, alignItems: 'center', alignSelf: 'center', justifyContent: 'center', borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }} >
                <Text style={{ color: 'white' }}>-</Text>
            </TouchableOpacity>
            <View style={{ width: 27, backgroundColor: '#fff', height: 29, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderColor: 'green', borderWidth: 0.6 }}>
                <Text>{props.value}</Text>
            </View>
            <TouchableOpacity onPress={BtnPlus} style={{ width: 27, backgroundColor: 'green', height: 30, alignItems: 'center', alignSelf: 'center', justifyContent: 'center', borderTopRightRadius: 5, borderBottomRightRadius: 5 }} >
                <Text style={{ color: '#fff' }}>+</Text>
            </TouchableOpacity>

        </View>
    )
}




export default PlusMinusButton;