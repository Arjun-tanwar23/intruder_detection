import React from 'react';
import front_image from '../../assets/face_detection1.jpg';

function FirstPage() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center h-screen bg-gray-200 relative">
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2 px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Detectify
          </h1>
          <p className="text-lg md:text-2xl font-medium">
            Your one-stop solution for Intruder Detection
          </p>
        </div>
        
        {/* Image Section */}
        <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={front_image}
            className="rounded shadow-lg w-4/5 md:w-3/4 h-auto"
            alt="Face detection banner"
          />
        </div>
      </div>
    </>
  );
}

export default FirstPage;
