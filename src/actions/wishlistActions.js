export const addToWishlist = (product) => {
  console.log('Dispatching ADD_TO_WISHLIST action with payload:', product)
  return {
    type: 'ADD_TO_WISHLIST',
    payload: product
  }
}
