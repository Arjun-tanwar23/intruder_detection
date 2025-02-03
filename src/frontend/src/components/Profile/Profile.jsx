import React, { useState } from 'react';
import avtar from '../../assets/avtar_image.png';

function Profile() {
  const [Profilepic, setProfilepic] = useState(avtar);
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (!Profilepic && name && firstName && lastName && email  && phone && birthday) {
      alert("Please fill out all fields and upload a profile picture.");
      return;
    }

    console.log("Saved Data", { name, firstName, lastName, email, phone, birthday });
    setIsSubmitted(true); // Hide the form and upload section
  };

  const handleImageUpload = (e) => {
    
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfilepic(event.target.result);
      };
      reader.readAsDataURL(file);
    }
    
  };

  return (
    
    <div className='flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-200 p-4'>
      {isSubmitted ? (
        // Success Message after Submission
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
          <h2 className="text-2xl font-bold text-green-600">Profile Updated Successfully! 🎉</h2>
          <p className="text-gray-700 mt-2">Thank you for updating your profile.</p>
        </div>
      ) : (
        <>
          
          
          {/* Profile Picture Upload Section */}
          <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-md m-4'>
            
            
            <div className='flex flex-col items-center'>
              <h2 className='text-2xl hover:underline font-bold mb-2'>PROFILE PICTURE</h2>
              <img 
                src={Profilepic} 
                alt="Profile" 
                className='w-32 h-32 rounded-full mb-4 transition duration-300 hover:scale-110' 
              />
              <p className='text-gray-600 mb-4 hover:underline'>JPG or PNG no larger than 5MB</p>
              <input 
                type="file" 
                accept='image/*' 
                className='hidden' 
                id='fileInput' 
                onChange={handleImageUpload} 
              />
              <label 
                htmlFor="fileInput" 
                className='px-4 py-2 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition duration-300 cursor-pointer'>
                Upload Picture
              </label>
            </div>
          </div>

          {/* Profile Form */}
          <form 
            className='bg-white shadow-lg rounded-lg p-6 w-full max-w-md m-4'
            onSubmit={handleFormSubmit}
          >
            <p className='text-center font-bold text-2xl hover:underline'>Account Information</p>

            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>Username</label>
              <input
                className='shadow border rounded w-full py-2 px-3 text-gray-700'
                type='text'
                placeholder='Username'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>First Name</label>
              <input
                className='shadow border rounded w-full py-2 px-3 text-gray-700'
                type='text'
                placeholder='First Name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>Last Name</label>
              <input
                className='shadow border rounded w-full py-2 px-3 text-gray-700'
                type='text'
                placeholder='Last Name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>Email Address</label>
              <input
                className='shadow border rounded w-full py-2 px-3 text-gray-700'
                type='email'
                placeholder='Email Address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>Phone Number</label>
              <input
                className='shadow border rounded w-full py-2 px-3 text-gray-700'
                type='tel'
                placeholder='Phone Number'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>Birthday</label>
              <input
                className='shadow border rounded w-full py-2 px-3 text-gray-700'
                type='date'
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                required
              />
            </div>

            <div className='flex items-center justify-between'>
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                type='submit'
              >
                Submit
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default Profile;
