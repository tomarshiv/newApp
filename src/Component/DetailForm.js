import React, { useState } from "react";
import { View, Text, TextInput } from 'react-native'
import Button from "./Button";


const DetailForm = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [mail, setMail] = useState('')
  const [display, setDisplay] = useState(false)

  const ClearDetails = () => {
  setDisplay(false)
  setName(" ")
  setPassword(" ")
  setMail(" ")
   
  
  }




  return (
    <>
      <View >
        <TextInput style={{ backgroundColor: 'lightgray', width: '90%', margin: 8 }} placeholder="  Enter your name" onChangeText={(txt) => setName(txt)} value={name} />
        <TextInput style={{ backgroundColor: 'lightgray', width: '90%', margin: 8 }} placeholder="  Password" onChangeText={(pass) => setPassword(pass)} value={password} />
        <TextInput style={{ backgroundColor: 'lightgray', width: '90%', margin: 8 }} placeholder="   Email" onChangeText={(mail) => setMail(mail)} value={mail} />
        <Button textpos={'center'} title={'Show Details'} onPress={()=>setDisplay(true)}/>
        <Button textpos={'center'} title={'Hide Details'}  onPress={ClearDetails}/>
      </View>
      {display ?
        <View>
          <Text>{name}</Text>
          <Text>{password}</Text>
          <Text>{mail}</Text>
        </View>
        : null
      }

    </>
  )
}
export default DetailForm;

