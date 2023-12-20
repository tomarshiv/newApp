import React from "react";
import {View,Text, TextInput} from 'react-native'
const TextBox=({backgroundColor:backgroundColor})=>{
    return(
        <View style={{backgroundColor:backgroundColor, width:'90%',margin:14, borderColor:'gray',borderWidth:0.6}}>
          <TextInput placeholder="Enter name"/>
        </View>
    )
}


TextBox.defaultProps={
  backgroundColor:'#fff'

}
export default TextBox;