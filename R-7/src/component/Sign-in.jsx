import React, { useState } from 'react';
import '../App.css';
import Swal from 'sweetalert2';
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';
const Sign_in = () => {
  const [role, setRole] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setphone] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("")

    const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
      role: role,
      name: name,
      phone: phone
    }
    // console.log("data", data)
    try {
      let res = axios.post(`${import.meta.env.VITE_BASE_URL}user/register`, data)
      console.log('signup success', res.data);
      Swal.fire('Success', 'Sign-up in successfully!', 'success');
        setTimeout(() => (
        navigate("/login")
      ), 2000)
    } catch (error) {
      console.error('signup failed:', error.response?.data || error.message);
      Swal.fire('Error', 'Invalid credentials or server issue.', 'error');
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden">
      <div className="flex justify-center items-center bg-black text-white p-4">
        <h1 className="border-2 border-white rounded-2xl px-6 py-2 text-2xl font-semibold">User Registration</h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-around items-center mt-8 px-4 overflow-hidden">
        <div className="bg-white rounded-lg p-10 m-4 w-full max-w-md shadow-md">
          <form onSubmit={handleSubmit} action="/register" method='POST' className="flex flex-col gap-6">
            <select
              name="option"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Role</option>
              <option value="Job Seeker">Job Seeker</option>
              <option value="Employer">Employer</option>
            </select>

            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
              required
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="number"
              name="number"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
              placeholder="Enter Your Number"
              required
              className="appearance-none border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email ID"
              required
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              required
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              className="bg-green-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
            <hr />
            <Link
              to="/login"

              className=" flex justify-center items-center bg-blue-600 text-white py-2 rounded hover:bg-blue-900 transition duration-300"
            >
              Login
            </Link>
          </form>
        </div>

        <div className="w-full max-w-[600px] m-4 flex justify-center items-center">
          <img src="/sign_in_page.jpg" alt="Sign In" className="w-full max-h-[400px] object-contain rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Sign_in;
