import React from 'react'

const Allclera = ({Clear}) => {
    return (
        <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded shadow-md transition-all duration-150 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-300"
            onClick={Clear}
        >
            All Clear
        </button>
    )
}

export default Allclera