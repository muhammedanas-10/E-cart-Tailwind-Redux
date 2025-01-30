const wishlistReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      console.log('Updating state with new wishlist item:', action.payload);
      return [...state, action.payload];
    default:
      return state;
  }
};

export default wishlistReducer;

