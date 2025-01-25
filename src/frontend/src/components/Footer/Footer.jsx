import React from 'react';
import image from '../../assets/detectify_image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




export default function Footer() {
    return (
        <footer className="bg-white border-y">
            
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0 flex items-center md:px-11">
                        <a href="" className='text-2xl font-medium hover:underline'><strong className='text-4xl'>D</strong>etectify</a>
                    
                        <a href="/" className="flex items-center">
                            <img
                                src={image}
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Home</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">About</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Contact</a>
                                </li>
                                
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a href="https://facebook.com" className="hover:underline">Facebook</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://twitter.com" className="hover:underline">Twitter</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://instagram.com" className="hover:underline">Instagram</a>
                                </li>
                                
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Terms & Conditions</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Disclaimer</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t pt-6">
                    <div className="flex justify-center space-x-6">
                        <a href="https://facebook.com" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="https://discord.com" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 21 16"
                            >
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </a>
                        <a href="https://twitter.com" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.723-.949.564-2.005.974-3.127 1.195-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.713-2.164-10.141-5.144-.423.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.03-.927-.086.627 1.956 2.444 3.379 4.6 3.419-1.68 1.319-3.809 2.105-6.102 2.105-.396 0-.787-.023-1.175-.069 2.179 1.397 4.768 2.212 7.548 2.212 9.057 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.014-.637.961-.695 1.8-1.562 2.46-2.549z" />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}