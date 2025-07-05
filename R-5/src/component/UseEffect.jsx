import React, { useEffect, useState } from 'react'

const UseEffects = () => {

    const [date, setDate] = useState(0);

    useEffect(() => {
        const time = setInterval(() => {
            setDate((date) => date + 1);
        }, 1000);

        return () => clearInterval(time)

    }, [])


    // useEffect(() => {
    //     setInterval(() => {
    //         const dates = new Date();
    //         setDate(dates.toLocaleTimeString());
    //     },1000 )
    // }, [])

    return (
        <>
            {date}
        </>
    )
}

export default UseEffects