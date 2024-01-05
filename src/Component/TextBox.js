import React from "react";
import {View,Text,StyleSheet} from 'react-native'
import commonStyles from '../styles/Style'
const TextBox=()=>{
    return(
        <View>
        <Text>hh</Text>
    <Text style={commonStyles.text}>shivani tomar</Text>
      <Text style={commonStyles.text}>shivani tomar</Text> 
        <Text style={[commonStyles.text,styles.box,{borderColor:'red',borderWidth:1}]}>shivani tomar</Text>
        </View>
    )
}

const styles=StyleSheet.create= ({
  box:{
    textAlign:'center',
    backgroundColor:'skyblue',
    marginBottom:10,
    padding:3,
    margin:9,
    height:50,
   
  }
})






export default TextBox;