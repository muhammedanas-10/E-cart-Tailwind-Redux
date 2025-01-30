import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlistSlice';

const View = () => {
  const dispatch = useDispatch();
  const userWishlist = useSelector(state => state.wishlist);

  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (sessionStorage.getItem('allProducts')) {
      const allProducts = JSON.parse(sessionStorage.getItem('allProducts'));
      const selectedProduct = allProducts.find(item => item.id === parseInt(id));
      console.log('Selected Product:', selectedProduct); // Add console log
      setProduct(selectedProduct);
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleWishlist = () => {
    const existingProduct = userWishlist.find(item => item.id === product.id);
    if (existingProduct) {
      alert('Product already in Wishlist');
    } else {
      console.log('Adding product to wishlist:', product);
      dispatch(addToWishlist(product));
      alert('Product added to Wishlist');
    }
  };

  return (
    <>
      <Header />
      <div className='flex flex-col mx-5'>
        <div className='grid grid-cols-2 items-center h-screen'>
          <img className='ms-40' width={'350px'} height={'250px'} src={product?.thumbnail || "https://cdn.shopify.com/s/files/1/0070/7032/articles/ecommerce_20shopping_20cart_4c343e41-1041-49d3-bca8-3d7d1aa06d90.png?v=1729263457"} alt="" />
          <div>
            <h3 className='font-bold'>PTD: {product?.id}</h3>
            <h1 className='text-5xl font-bold'>{product?.title}</h1>
            <h4 className='font-bold text-red-600 text-2xl'>${product?.price}</h4>
            <h4>Brand: {product?.brand}</h4>
            <h4>Category: {product?.category}</h4>
            <p>
              <span className='font-bold'>Description</span> : {product?.description}
            </p>
            <h3 className='font-bold mt-4'>Client Reviews</h3>
            {
              product?.reviews?.length > 0 ?
                product?.reviews?.map(item => (
                  <div key={item?.date} className='shadow rounded p-2 mb-2'>
                    <h5>
                      <span className='font-bold'>{item?.reviewerName}</span>  :  <span>{item?.comment}</span>
                    </h5>
                    <p>Rating: {item?.rating} <i className='fa-solid fa-star text-yellow-500'></i></p>
                  </div>
                ))
                :
                <div className='font-bold text-red-600'>No Reviews Yet !!!</div>
            }
            <div className='flex justify-between mt-5'>
              <button onClick={handleWishlist} className='bg-blue-600 rounded text-white p-2'>
                Add to Wishlist
              </button>
              <button className='bg-green-600 rounded text-white p-2'>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;