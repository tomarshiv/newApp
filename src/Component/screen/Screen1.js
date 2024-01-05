import React from "react";
import { View,Text } from "react-native";
import ProductList from "../ProductList";
import Total from "../Total";
import PlusMinusButton from "../PlusMinusButton";
import SecondScreen from "./SecondScreen";
import ThirdScreen from "./ThirdScreen";

const Screen1=()=>{
    data=[
        { id:1,
          productname:'face-wash',
          price:100
        },
        { id:2,
            productname:'face-wash',
            price:300
          },

    ]
    return(
            <View style={{flex:1}}>
             {/* <ProductList data={data}/> */}
             <SecondScreen/>
             <ThirdScreen/>
        </View>
    )
}
export default Screen1;