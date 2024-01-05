import {createReducer} from '@reduxjs/toolkit';
import UserData from '../../Component/UserData';

const initialState = {
  cart: {},
  UserName:'',
  tempArr:[],
  UserData:[]
};


const AddToCart = createReducer(initialState, builder => {
  
  builder.addCase('ADD_TO_CART', (state, action) => {
    console.log("action ===",action)
    state.cart[action.payload[0].id] = action.payload[0];
  });

  builder.addCase('REMOVE_FROM_CART', (state, action) => {
    state.cart = action.payload;
  });

  // builder.addCase('ADD_USER_NAME', (state, action) => {
  //   state.UserName = action.payload;
  // });


  builder.addCase('ADD_USER_DATA', (state, action) => {
    console.log('data',action)
    state.UserData = action.payload;
   
  });
   



  
});






// dispatch({type:'ADD_TO_CART',payload:[data]})
// let obj = {
//   1:{
//     id:1,
//     name:'Shivani'
//   },
//   2:{
//     id:2,
//     name:'xyz'
//   }
// }
// {obj}


export default AddToCart;
