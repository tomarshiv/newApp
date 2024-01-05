import React from "react";
import {Text,View,Button} from 'react-native'
import store from "../../redux/Store";
import { useSelector } from "react-redux";

const ThirdScreen=()=>{
    const { UserData} = useSelector(state => state.AddToCart)
    console.log("user Data", UserData)
  
    const handleclick=()=>{
        data=['aman','raman','suman']
     store.dispatch({type:'ADD_USER_DATA',payload:data})

    }


    return(
        <View>
        <Button title="Get" onPress={handleclick}/>
        </View>
    )
}

export default ThirdScreen;