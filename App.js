import React from "react";
import { Text, View } from 'react-native'
import Button from "./src/Component/Button";
import Button2 from "./src/Component/Button2";
import RbSheet from "./src/Component/RbSheet";
import DetailForm from "./src/Component/DetailForm";

const App = () => {
  const someFun = () =>{

  }
return (
    <View>
      <Button textmargin={7} textpos={'center'} backgroundColor="yellowgreen" title="Green Button"   />
      {/* <Button textmargin={7} textpos={'center'} backgroundColor="red" title="Red Button"  /> */}

      <RbSheet onPress={someFun} />
   </View>
  )
}
export default App