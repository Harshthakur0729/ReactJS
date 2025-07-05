import React, { useState } from 'react'

export const TodoForm = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState({});

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTodo(inputValue)
        setInputValue({ id: "", content: "", checked: false });
    }

    const inputChange = (event) => {
        setInputValue({ id: event, content: event, checked: false })
    }

    return (
        <section className="flex justify-center items-center py-4">
            <form
                className="flex gap-2 w-full max-w-md bg-white p-4 rounded-lg shadow"
                onSubmit={handleFormSubmit}
            >
                <input
                    type="text"
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    autoComplete="off"
                    value={inputValue.content}
                    onChange={(event) => inputChange(event.target.value)}
                    placeholder="Add a new task..."
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors"
                >
                    Add Task
                </button>
            </form>
        </section>
    )
}
