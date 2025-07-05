import React from 'react'
import '../App.css'
const Contact = () => {
    return (
        <>
            <div id='contact'>
                <div id='contact1'>
                    <h1>Contact Ower Team </h1>
                    <h3>You have any question </h3>
                    <form id='form' action="">
                        <label htmlFor="name">Name : </label>
                        <input type="text" name="name" id="name" />
                        <label htmlFor="email">Email :</label>
                        <input type="email" name="email" id="email" />
                        <label htmlFor="number">Number : </label>
                        <input type="number" name="number" id="number"  />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact