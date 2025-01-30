import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
      const product = action.payload;
      console.log('Adding product to wishlist:', product);
      // Check if the product already exists in the wishlist
      const existingProduct = state.find(item => item.id === product.id);
      if (!existingProduct) {
        // If the product doesn't exist, add it to the wishlist
        state.push(product);
      } else {
        console.log('Product already exists in wishlist:', product);
      }
    },
  },
});

export const { addToWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;