import React, { useReducer } from 'react'

const UseReducer = () => {

    const reducer = (state, action) => {
        if (action.type === "INCREMENT") {
            return state + 1;
        }
        if (action.type === "DECREMENT") {
            return state - 1;
        }
    }
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <>
            <div className='flex flex-col justify-center items-center gap-2 p-50 m-10'>
                <h1>{count}</h1>
                <button className='border-4 p-2 rounded-3xl mb-2 ' onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
                <button className='border-4 p-2 rounded-3xl mb-2 ' onClick={() => dispatch({ type: "DECREMENT" })}>decrement</button>
            </div>
        </>
    )
}

export default UseReducer