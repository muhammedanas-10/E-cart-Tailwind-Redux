import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const result = await axios.get('https://dummyjson.com/products');
  sessionStorage.setItem('allProducts', JSON.stringify(result.data.products));
  return result.data.products;
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    allProducts: [],
    loading: false,
    errorMsg: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.allProducts = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.errorMsg = action.error.message;
      });
  },
});

export default productSlice.reducer;


