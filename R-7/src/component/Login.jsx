import React, { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2';
import axios from "axios"
import { Context } from "../main"; 

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")
  const { setIsAuthorized, setUser } = useContext(Context);

  const navigate = useNavigate()
 const handleForm = async (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
      role,
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}user/login`,
        data,
        {
          withCredentials: true, // ⬅️ required to accept/set cookies
        }
      );

      const user = res?.data?.user;

      if (user?._id && user?.role) {
        localStorage.setItem("userId", user._id);
        localStorage.setItem("UserRole", user.role);

        setUser(user);
        setIsAuthorized(true);

        Swal.fire("Success", "Logged in successfully!", "success");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        Swal.fire("Error", "Invalid response from server", "error");
        console.error("Unexpected login response:", res.data);
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      Swal.fire("Error", "Invalid credentials or server error.", "error");
      setIsAuthorized(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden">
      <div className="flex justify-center items-center bg-black text-white p-4">
        <h1 className="border-2 border-white rounded-2xl px-6 py-2 text-2xl font-semibold">User Login</h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-around items-center mt-8 px-4">
        <div className="bg-white rounded-lg p-10 m-4 w-full max-w-md shadow-md">
          <form onSubmit={handleForm} className="flex flex-col gap-6">
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
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
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
              Login
            </button>
            <hr />
            <Link
              to="/register"

              className=" flex justify-center items-center bg-blue-600 text-white py-2 rounded hover:bg-blue-900 transition duration-300"
            >
              Sign-Up
            </Link>

          </form>
        </div>

        <div className="w-full max-w-[600px] m-4 flex justify-center items-center">
          <img src="/login_page.png" alt="Login Visual" className="w-full max-h-[400px] object-contain rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Login;
