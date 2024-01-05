import React, { useState } from "react";
import { Text, View } from 'react-native'
import Screen1 from "./src/Component/screen/Screen1";
import List from "./src/Component/List";
import SectionList1 from "./src/Component/SectionList1";
import Array from "./src/Component/Array";
import store from "./src/redux/Store";

// React.useEffect(()=>{
//   store.dispatch({type:'ADD_USER_NAME',payload:'Sivani'})
// },[])



const App = () => {
 return (
    <Screen1 />

    // <Array/>
 
  )
}
export default App;