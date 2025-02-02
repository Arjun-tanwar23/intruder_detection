import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100 p-4'>
      <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-md m-4'>
        <form className='space-y-4'>
          <div className='flex flex-col space-y-2'>
            <label htmlFor='name' className='text-gray-700'>Name</label>
            <input
              type='text'
              id='name'
              placeholder='Name'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>

          <div className='flex flex-col space-y-2'>
            <label htmlFor='message' className='text-gray-700'>Message</label>
            <textarea
              id='message'
              placeholder='Your message'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            ></textarea>
          </div>

          <div className='flex flex-col space-y-2'>
            <div className='flex flex-col lg:flex-row lg:space-x-4'>
              <div className='flex flex-col space-y-2 w-full'>
                <label htmlFor='email' className='text-gray-700'>Email</label>
                <input
                  type='email'
                  id='email'
                  placeholder='Enter email'
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                />
              </div>
              <div className='flex flex-col space-y-2 w-full'>
                <label htmlFor='phone' className='text-gray-700'>Phone Number</label>
                <input
                  type='tel'
                  id='phone'
                  placeholder='Phone number'
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                />
              </div>
            </div>
          </div>

          <div className='flex flex-col space-y-2'>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-md m-4 '>
        <h1 className='text-3xl font-bold mb-4'>Contact <strong className='text-blue-700'>Us</strong></h1>
        <p className='text-gray-700 mb-4'>
          For questions, technical assistance, or collaboration opportunities, please reach out via the contact information provided below.
        </p>

        <div className='space-y-4'>
          <div className='flex items-center space-x-2'>
            <FontAwesomeIcon className='text-blue-950' icon={faPhone} />
            <h2 className='text-gray-700 hover:text-blue-700 cursor-pointer'>+123-456-7890</h2>
          </div>
          <div className='flex items-center space-x-2'>
            <FontAwesomeIcon className='text-blue-950' icon={faEnvelope} />
            <p className='text-gray-700 hover:text-blue-700 cursor-pointer'>hello@reallygreatsite.com</p>
          </div>
          <div className='flex items-center space-x-2'>
            <FontAwesomeIcon className='text-blue-950' icon={faLocationDot} />
            <address className='text-gray-700 hover:text-blue-700'>123 Anywhere St, Any City, ST 12345</address>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;






