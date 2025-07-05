import React, { useEffect, useState } from 'react'

export const DateAndTime = () => {
        const [dateTime, setdateTime] = useState("");
    
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const date = now.toLocaleDateString();
            const time = now.toLocaleTimeString();
            setdateTime(`${date} - ${time}`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="flex flex-col items-center py-10">
            <h1 className="text-4xl text-red-600 font-bold mb-6">Todo List</h1>
            <h2 className="text-2xl border-2 border-gray-300 rounded px-6 py-2 bg-white shadow">{dateTime}</h2>
        </div>
    )
}

