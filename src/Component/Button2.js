import React from "react";
import{View,Text} from 'react-native'

const Button2=(props)=>{
    console.log(props.name)
    return(
        <View>
            <Text>{props.name}</Text>
        </View>
    )
}


export default Button2;
