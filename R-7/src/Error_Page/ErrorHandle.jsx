import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorHandle = () => {
    const navigate = useNavigate();



    return (
        <>
            <div className=" overflow-hiddenrelative flex justify-center items-center min-h-screen bg-white">
                {/* Image as background */}
                <img
                    src="/404.png"
                    alt="404 Error"
                    className="w-full h-full object-cover absolute top-0 left-0 z-0"
                />

                {/* Text content over the image */}
                <div className="relative flex flex-col  gap-6 items-center rounded-4xl border-white p-10 border-4 z-10 text-center ">
                    <h1 className="text-6xl font-bold text-white drop-shadow-md">Error 404</h1>
                    <p className="mt-2 text-2xl text-white drop-shadow-md">Page Not Found</p>
                    <button onClick={() => navigate(-1)} className="text-white border-2 border-white rounded-3xl px-4 py-2 w-36 transform transition-transform duration-1000 hover:bg-white hover:text-black active:bg-blue-600 active:text-white">
                        Back
                    </button>
                </div>

                {/* Optional: Overlay to darken the image */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0" />
            </div>

        </>
    )
}

export default ErrorHandle