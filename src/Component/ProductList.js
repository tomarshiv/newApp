import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import PlusMinusButton from './PlusMinusButton';
import { useState } from 'react';
import Total from './Total';
import store from '../redux/Store';
import { useSelector } from 'react-redux';

function RenderItem({ item }) {
    const { cart } = useSelector(state => state.AddToCart)
    console.log("cart ==>>", cart)
    const BtnMinus = () => {
        // if (value > 0) {
        //     setValue(prev => prev - 1)
        // }

    }

    // console.log("cart.hasOwnProperty(item.id)",cart.hasOwnProperty(item.id))

    const BtnPlus = () => {
        if (cart.hasOwnProperty(item.id)) {
            let obj = { ...cart[item.id] };
            obj['qty'] = parseInt(cart[item.id].qty) + 1;
            store.dispatch({ type: 'ADD_TO_CART', payload: [obj] })
        } else {
            let obj = item;
            obj["qty"] = 1;
            store.dispatch({ type: 'ADD_TO_CART', payload: [obj] })

        }
        //  let obj = {};
        //If user add first item in cart


        //else





        // if (value < 5) {
        //     setValue(prev => prev + 1)
        //     dispatch({type:'ADD_TO_CART',payload:[data]})
        // }

    }


    return (
    <View style={{ width: '80%', height: 120, backgroundColor: 'skyblue', margin: 2, padding: 5 }}>
        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>productName:{item.productname}</Text>
        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Pricr: &#8377;{item.price}</Text>
        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Qty:{ }</Text>


        <View style={{ flexDirection: "row", alignItems: "center", margin: 8 }} >
            <TouchableOpacity onPress={BtnMinus} style={{ width: 27, backgroundColor: 'green', height: 30, alignItems: 'center', alignSelf: 'center', justifyContent: 'center', borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }} >
                <Text style={{ color: 'white' }}>-</Text>
            </TouchableOpacity>
            <View style={{ width: 27, backgroundColor: '#fff', height: 29, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderColor: 'green', borderWidth: 0.6 }}>
                <Text>{ }</Text>
            </View>
            <TouchableOpacity onPress={BtnPlus} style={{ width: 27, backgroundColor: 'green', height: 30, alignItems: 'center', alignSelf: 'center', justifyContent: 'center', borderTopRightRadius: 5, borderBottomRightRadius: 5 }} >
                <Text style={{ color: '#fff' }}>+</Text>
            </TouchableOpacity>

        </View>

    </View>)
}

const ProductList = ({ data }) => {
    return (

        <View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <RenderItem item={item} />}
            />
            <Total />
        </View>


    )
}





export default ProductList;