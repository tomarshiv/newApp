import React from "react";
import{View,Text,Button} from 'react-native'

const Button2=(props)=>{
    console.log(props.name)
    return(
        <View>
            <Text>{props.name}</Text>
            <Button title="submit" />
        </View>
    )
}


export default Button2;
