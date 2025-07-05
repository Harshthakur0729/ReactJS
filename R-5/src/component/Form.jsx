import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        number: ""
    });

    const handleInput = (e) => {
        const { name, value, type } = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: type === "number" ? value.replace(/\D/, "") : value
        }));
    }

    const handleForms = (e) => {
        e.preventDefault();
        localStorage.setItem("form", JSON.stringify(user));
        console.log(user);
        setUser({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            number: ""
        });
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleForms} className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4">
                <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={user.firstName}
                    onChange={handleInput}
                    required
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={user.lastName}
                    onChange={handleInput}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={user.email}
                    onChange={handleInput}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={user.password}
                    onChange={handleInput}
                    required
                />
                <input
                    type="number"
                    placeholder="Number"
                    name="number"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={user.number}
                    onChange={handleInput}
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form