import React from "react";
import { useState } from "react";
import { View, Text, TouchableOpacity } from 'react-native'

const Button = ({backgroundColor, Radius, title, width, height, margin, fcolour, fsize, textmargin, textpos, onPress = () => { } }
) => {
     const[name,setName]=useState('')
  return (
    <TouchableOpacity onPress={onPress}>

      <View style={{ backgroundColor: backgroundColor, width: width, margin: margin, height: height, borderRadius: Radius }}>
   
        <Text style={{ textAlign: textpos, margin: textmargin, fontSize: fsize, color: fcolour }} >{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

Button.defaultProps={
  backgroundColor:'green',
  width:'80%',
  margin:13,
  borderRadius:3,
  title:'Submit',
  // fontSize:17,
  color:'#fff',
  margin:7,
  fsize:17,
  textpos:'center'

  
}


export default Button;