import React from "react";
import {View,Text} from 'react-native'
import Button from "../Button";
import Button2 from "../Button2";

const firstScreen=(props)=>{
    
    console.log('#####',props)
    return(
        <View>
       
       
           <Button  />
           <Button2 name={props.name} />
        </View>
    )
}
export default firstScreen;