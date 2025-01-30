import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../Components/Header';

const Wishlist = () => {
  const userWishlist = useSelector(state => state.wishlist);
  console.log('Rendering wishlist with items:', userWishlist);

  return (
    <>
      <Header />
      <div style={{ paddingTop: '100px' }} className='px-5'>
        {
          userWishlist?.length > 0 ?
            <>
              <h1 className='text-4xl font-bold text-red-600'>My Wishlist</h1>
              <div className='grid grid-cols-4 gap-4'>
                {
                  userWishlist?.map(product => (
                    <div className='rounded border p-2 shadow' key={product.id}>
                      <img width={'100%'} height={'200px'} src={product.thumbnail || "https://cdn.shopify.com/s/files/1/0070/7032/articles/ecommerce_20shopping_20cart_4c343e41-1041-49d3-bca8-3d7d1aa06d90.png?v=1729263457"} alt="" />
                      <div className='text-center'>
                        <h3 className='text-xl font-bold'>{product.title}</h3>
                        <div className='flex justify-between mt-3'>
                          <button className='text-xl'>
                            <i className='fa-solid fa-heart text-red-600'></i> Wishlist
                          </button>
                          <button className='text-xl'>
                            <i className='fa-solid fa-cart-plus text-green-600'></i> Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </>
            :
            <div className='flex justify-center items-center h-screen'>
              <img src="https://assets-v2.lottiefiles.com/a/6102a4f8-1176-11ee-bcc5-236dd7d5f88b/aK8IKRE5a3.gif" alt="" />
              <h1 className='text-3xl text-red-600'>Your wishlist is empty</h1>
            </div>
        }
      </div>
    </>
  );
};

export default Wishlist;