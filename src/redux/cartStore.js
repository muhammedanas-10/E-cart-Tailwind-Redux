import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice'; // Adjust the import path
import wishlistReducer from './slices/wishlistSlice'; // Adjust the import path

const store = configureStore({
  reducer: {
    products: productReducer,
    wishlist: wishlistReducer,
  },
});

export default store;