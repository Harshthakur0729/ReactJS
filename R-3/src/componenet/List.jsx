import React from 'react'

const List = ({ curEle, deleteData, checkTodo, checked }) => {
    return (
        <li className="flex items-center justify-between gap-4 p-4 my-2 bg-gray-50 rounded-lg shadow transition hover:shadow-md">
            <h1 className="flex-1 text-base font-medium text-gray-900">
                <span className={checked ? "line-through text-gray-400" : ""}>
                    {curEle}
                </span>
            </h1>
            <button
                type="button"
                onClick={() => checkTodo(curEle)}
                className="px-3 py-1 mr-2 text-sm font-semibold text-green-700 bg-green-100 rounded hover:bg-green-200 transition"
            >
                Checked
            </button>
            <button
                type="button"
                onClick={() => deleteData(curEle)}
                className="px-3 py-1 text-sm font-semibold text-white bg-red-500 rounded hover:bg-red-600 transition"
            >
                Delete
            </button>
        </li>
    )
}

export default List