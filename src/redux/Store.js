import { configureStore } from '@reduxjs/toolkit';

import AddToCart from './reducer/AddToCart';


const store = configureStore({
  reducer: {

    AddToCart,


  },

});
export default store;
