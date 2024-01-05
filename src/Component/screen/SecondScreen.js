import React from "react";
import {Text,View,Button} from 'react-native'
import store from "../../redux/Store";

const SecondScreen=()=>{
    // data=['aman','raman','suman']
    // const { cart } = useSelector(state => state.AddToCart)
    // console.log("cart ==>>", cart)
    const handleclick=()=>{
        data=['aman','raman','suman']
     store.dispatch({type:'ADD_USER_DATA',payload:data})

    }


    return(
        <View>
        <Button title="submit" onPress={handleclick}/>
        </View>
    )
}

export default SecondScreen