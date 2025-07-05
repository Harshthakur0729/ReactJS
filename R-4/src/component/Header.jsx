import { useNavigate } from 'react-router-dom'
import '../App.css'

const Header = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <div className=' flex justify-around p-4 text-gray-500 bg-gray-800 '>
                    {/* Image Logo */}
                    <img className='hover:cursor-pointer w-10 h-[2.5rem] rounded-[50px] bg-cover object-center ' src="/logo.png" alt="" />
                    {/* Home Page Button */}
                    <button className="hover:cursor-pointer group relative px-4 py-2 text-lg  hover:text-gray-400 bg-transparent border-none active:text-gray-300">

                        <a href="/" className="relative after:block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 group-hover:after:w-full" > BEST POKEMON SITE</a>

                    </button>
                    {/* Card button */}


                    <div onClick={() => navigate("/Addcard")} className="hover:cursor-pointer group relative px-4 py-2 text-lg hover:text-gray-400 bg-transparent border-none active:text-gray-300">
                        <h1 className="relative after:block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 group-hover:after:w-full">Your Card</h1>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header