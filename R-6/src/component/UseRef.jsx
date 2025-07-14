import React, { useRef } from 'react'




const UseRef = () => {

  const name = useRef(null);
  const email = useRef(null);



  const handleForm = (e) => {
    e.preventDefault();
    console.log(name.current.value, email.current.value);
  }
  return (
    <>
      <form className=' flex flex-col gap-4 p-4 w-50' action="" onSubmit={handleForm}>
        <input className='border-4' type="text" placeholder='name' ref={name} id="name" />
        <input className='border-4' type="text" placeholder="email" ref={email} id="email" />
        <button className='border-4' type='submit'>Submit</button>
      </form>
    </>
  )
}

export default UseRef