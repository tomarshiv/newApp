import React, { useState } from "react";
import {View,Text,TextInput,Button} from 'react-native'

const InputBox=()=>{
  const [value,setValue]=useState('')
  const clearData=()=>{
    setValue('')
  }
    return(
      <>
        <View style={{backgroundColor:'red',margin:7}}>
          <TextInput placeholder={'Enter name'}
            onChangeText={(txt)=>setValue(txt)}
            value={value}

          />
         
        </View>
        <Button title="submit" style={{margin:7}}  onPress={clearData}/>
        <Text>{value}</Text>
        </>
    )
}
export default InputBox;