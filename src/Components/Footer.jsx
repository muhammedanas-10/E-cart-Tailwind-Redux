import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-auto bg-violet-800 text-white p-10'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap justify-between gap-8'>
          {/* intro */}
          <div className='flex-1 min-w-[250px]'>
            <h5 className='text-lg font-bold mb-3'>
              <i className='fa-solid fa-truck-fast me-2'></i> E-Cart
            </h5>
            <p className='mb-2'>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
            <p className='mb-2'>Code licensed MIT, docs CC BY 3.0.</p>
            <p>Currently v5.3.3.</p>
          </div>

          {/* links */}
          <div className='flex flex-col'>
            <h5 className='text-lg font-bold mb-3'>Links</h5>
            <a href="/" className='mb-2 text-white hover:underline'>Landing Page</a>
            <a href="/home" className='mb-2 text-white hover:underline'>Home Page</a>
            <a href="/history" className='mb-2 text-white hover:underline'>History Page</a>
          </div>

          {/* guide */}
          <div className='flex flex-col'>
            <h5 className='text-lg font-bold mb-3'>Guides</h5>
            <a href="https://react.dev/" className='mb-2 text-white hover:underline'>React</a>
            <a href="https://react-bootstrap.netlify.app/" className='mb-2 text-white hover:underline'>React Bootstrap</a>
            <a href="https://reactrouter.com/" className='mb-2 text-white hover:underline'>React Router</a>
          </div>

          {/* contact */}
          <div className='flex flex-col'>
            <h5 className='text-lg font-bold mb-3'>Contact Us</h5>
            <div className='flex mb-3'>
              <input 
                type="email" 
                placeholder='Enter your email' 
                className='form-control mr-2 p-2 rounded text-black' 
              />
              <button className='bg-blue-500 p-2 rounded text-white hover:bg-blue-600'>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className='flex space-x-3'>
              <a href="#" className='text-white hover:text-gray-400'><i className="fa-brands fa-twitter"></i></a>
              <a href="#" className='text-white hover:text-gray-400'><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className='text-white hover:text-gray-400'><i className="fa-brands fa-facebook"></i></a>
              <a href="#" className='text-white hover:text-gray-400'><i className="fa-brands fa-linkedin"></i></a>
              <a href="#" className='text-white hover:text-gray-400'><i className="fa-brands fa-github"></i></a>
              <a href="#" className='text-white hover:text-gray-400'><i className="fa-solid fa-phone"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer