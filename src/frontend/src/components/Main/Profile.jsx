import React from 'react'
import avtar from '../../assets/avtar_image.png'

function Profile() {
  return (
    <>

    <div className='flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-200 p-4'>
      <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-md m-4'>
        <div className='flex flex-col items-center'>
          <h2 className='text-2xl hover:underline font-bold mb-2'>PROFILE PICTURE</h2>
          <img src={avtar} alt="Profile" className='w-32 h-32 rounded-full mb-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110' />
          <p className='text-gray-600 mb-4 hover:underline'>JPG or png no larger than 5MB</p>
          <button className='px-4 py-2 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition duration-300'>
            Upload Picture
          </button>
        </div>
      </div>

      <form className='bg-white shadow-lg rounded-lg p-6 w-full max-w-md m-4'>
        <div className='mb-4'>
          <p className='text-center font-bold text-2xl hover:underline'>Account information</p>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
            Username
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='username'
            type='text'
            placeholder='Username'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='firstName'>
            First Name
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='firstName'
            type='text'
            placeholder='First Name'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='lastName'>
            Last Name
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='lastName'
            type='text'
            placeholder='Last Name'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
            Email Address
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='email'
            type='email'
            placeholder='Email Address'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='phone'>
            Phone Number
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='phone'
            type='tel'
            placeholder='Phone Number'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='birthday'>
            Birthday
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='birthday'
            type='date'
          />
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </div>

  
  
    </>
  )
}

export default Profile;


