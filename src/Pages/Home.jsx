import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/productSlice'; // Adjust the import path
import Header from '../Components/Header';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const { allProducts, loading, errorMsg } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errorMsg) {
    return <div>Error: {errorMsg}</div>;
  }

  return (
    <>
      <Header insideHome={true} />
      <div className='px-5'>
        <h1 className='text-4xl font-bold text-red-600'>Products</h1>
        <div className='grid grid-cols-4 gap-4'>
          {allProducts.map((product) => (
            <div className='rounded border p-2 shadow' key={product.id}>
              <img width={'100%'} height={'200px'} src={product.thumbnail} alt={product.title} />
              <div className='text-center'>
                <h3 className='text-xl font-bold'>{product.title}</h3>
                <p>${product.price}</p>
                <Link to={`/view/${product.id}`}>
                  <button className='bg-blue-600 rounded text-white p-2 mt-2'>View</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;