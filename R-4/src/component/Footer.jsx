import React from 'react'



const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-8 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold mb-1">About Us</h2>
          <p className="text-sm text-gray-600">
            Welcome to My Pokémon App, your number one source for all things Pokémon. We're dedicated to providing you the best of Pokémon information, customer service, and uniqueness.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold mb-1">Contact Us</h2>
          <p className="text-sm">Email: <a href="mailto:support@99.com" className="text-blue-600 hover:underline">support@99.com</a></p>
          <p className="text-sm">Phone: <a href="tel:+919192939494" className="text-blue-600 hover:underline">+91 9192939494</a></p>
          <p className="text-sm">Address: 123 Pokémon Street,<br />Poké City, PK 12345</p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold mb-1">Follow Us</h2>
          <ul className="text-sm space-y-1">
            <li><a href="#" className="hover:text-blue-600">Instagram</a></li>
            <li><a href="#" className="hover:text-green-600">WhatsApp</a></li>
            <li><a href="#" className="hover:text-blue-800">Facebook</a></li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold mb-1">Newsletter</h2>
          <form className="flex flex-col gap-2">
            <input
              className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              placeholder="Your email"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white rounded px-3 py-1 hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <hr className="my-6 border-gray-300" />
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-sm text-gray-600">© 2025 My Pokémon App. All Rights Reserved.</h1>
        <div className="flex gap-4 mt-2">
          <a href="/" className="text-blue-600 hover:underline">Home</a>
          <a href="/cardDetails" className="text-blue-600 hover:underline">Details</a>
          <a href="/Addcard" className="text-blue-600 hover:underline">Added Card</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer