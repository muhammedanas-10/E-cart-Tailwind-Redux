import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <>
      <Header />
      <div style={{ paddingTop: '100px' }} className='px-5'>
        <>
          <h1 className='text-5xl font-bold text-blue-600'>Cart Summary...</h1>
          <div className='grid grid-cols-3 gap-4 mt-5'>
            <div className='col-span-2 border rounded p-5 shadow max-w-4xl'>
              <table className='table-auto w-full'>
                <thead>
                  <tr>
                    <td className='font-semibold'>#</td>
                    <td className='font-semibold'>Name</td>
                    <td className='font-semibold'>Image</td>
                    <td className='font-semibold'>Quantity</td>
                    <td className='font-semibold'>Price</td>
                    <td className='font-semibold'>...</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Product name </td>
                    <td> <img width={'70px'} height={'70px'} src="https://cdn.shopify.com/s/files/1/0070/7032/articles/ecommerce_20shopping_20cart_4c343e41-1041-49d3-bca8-3d7d1aa06d90.png?v=1729263457" alt="" /></td>
                    <td>
                      <div className='flex'>
                        <button className='font-bold'>-</button>
                        <input style={{ width: '40px' }} type="text" className='border rounded p-1 mx-2' value={11} />
                        <button className='font-bold'>+</button>
                      </div>
                    </td>
                    <td>$230</td>
                    <td><button className='text-red-500'><i className='fa-solid fa-trash'></i></button></td>
                  </tr>
                </tbody>
              </table>
              <div className='float-right mt-5'>
                <button className='bg-red-600 rounded p-2 text-white'>Empty Cart</button>
                <Link to={'/'} className='bg-blue-500 ms-3 rounded p-2 text-white'>Shop More</Link>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='border rounded shadow p-5 max-w-xs'>
                <h2 className='text-2xl font-bold '>Total amount: <span className='text-red-600'>$340</span></h2>
                <hr />
                <button className='bg-green-700 rounded p-2 text-white w-full mt-4'>Check Out</button>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  )
}

export default Cart