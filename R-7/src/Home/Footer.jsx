import React from 'react'
import { LuSend } from "react-icons/lu";
const Footer = () => {
    return (
        <>
            <footer className="bg-gray-900 text-white pt-10">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* CTA Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-gray-700">
                        <div className="flex items-start gap-4">
                            <i className="fas fa-map-marker-alt text-2xl text-green-400"></i>
                            <div>
                                <h4 className="text-lg font-semibold">Find us</h4>
                                <span className="text-sm">Indore, Vijay Nagar</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <i className="fas fa-phone text-2xl text-green-400"></i>
                            <div>
                                <h4 className="text-lg font-semibold">Call us</h4>
                                <span className="text-sm">8889991110</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <i className="far fa-envelope-open text-2xl text-green-400"></i>
                            <div>
                                <h4 className="text-lg font-semibold">Mail us</h4>
                                <span className="text-sm">mail@info.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
                        {/* Logo & About */}
                        <div>
                            <img
                                src="/logo.png"
                                alt="logo"
                                className="h-12 mb-4"
                            />
                            <p className="text-sm text-gray-400 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-blue-500 text-lg"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="text-blue-400 text-lg"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="text-red-500 text-lg"><i className="fab fa-google-plus-g"></i></a>
                            </div>
                        </div>

                        {/* Useful Links */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
                            <ul className="text-sm text-gray-400 grid grid-cols-2 gap-2">
                                <li><a href="#" className="hover:text-white">Home</a></li>
                                <li><a href="#" className="hover:text-white">About</a></li>
                                <li><a href="#" className="hover:text-white">Services</a></li>
                                <li><a href="#" className="hover:text-white">Portfolio</a></li>
                                <li><a href="#" className="hover:text-white">Contact</a></li>
                                <li><a href="#" className="hover:text-white">Expert Team</a></li>
                                <li><a href="#" className="hover:text-white">Our Services</a></li>
                                <li><a href="#" className="hover:text-white">Latest News</a></li>
                            </ul>
                        </div>

                        {/* Subscribe */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
                            <p className="text-sm text-gray-400 mb-4">Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            <form className="flex">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full px-4 py-2 rounded-l bg-gray-800 text-white focus:outline-none"
                                />
                                <button className="bg-green-500 px-4 rounded-r hover:bg-green-600">
                                  <LuSend />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="bg-gray-800 py-4 mt-4">
                    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 px-4">
                        <p>© 2024 All Rights Reserved <a href="https://codepen.io/anupkumar92/" className="text-green-400">Anup</a></p>
                        <ul className="flex space-x-4 mt-2 md:mt-0">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">Terms</a></li>
                            <li><a href="#" className="hover:text-white">Privacy</a></li>
                            <li><a href="#" className="hover:text-white">Policy</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default Footer