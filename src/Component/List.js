import React from "react";
import {View,Text,FlatList} from 'react-native';

const List=()=>{
    data=[
        {
        id:1,
        name:'aman',
        add:'gwalior'
      },
      {
        id:2,
        name:'Aashu',
        add:'Morena'
      },
      {
        id:3,
        name:'shivani',
        add:'Murar'
      },

]
    return(
        <View style={{backgroundColor:'skybluepink'}}>
         <FlatList
        data={data}
        renderItem={({item}) => <Text>{item.name}</Text>}
        
        keyExtractor={item => item.id}
      />
        </View>
    )
}
export default List;