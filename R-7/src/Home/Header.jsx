import { Link } from "react-router-dom"



const Header = () => {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("UserRole");


    // console.log("toke", token);
    // console.log("UserRole", userRole);


    const handleOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        window.location.href = '/login';
    };



    return (
        <>
            <div className="flex justify-around items-center bg-green-500 text-white px-6 py-3 shadow-md">


                {/* Left Side: Logo + Title */}
                <div className="flex items-center gap-3">
                    <img src="/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
                    <h1 className="text-xl font-semibold">Search Job</h1>
                </div>

                {/* Right Side: Navigation Links */}
                <div className="flex items-center gap-10">

                    {/* Home */}
                    <Link to="/"> <h1 className="cursor-pointer hover:underline">Home</h1></Link>


                    {/* All Job */}
                    <Link to="/alljob"><h1 className="cursor-pointer hover:underline">All Jobs</h1></Link>


                    {/* My Application  */}
                    <Link to="/myapplication"><h1 className="cursor-pointer hover:underline">My Application</h1></Link>


                    {/* When user select Employer then access this route  */}
                    {userRole === "Employer" && (
                        <>


                            {/* Post New Job */}
                            <Link to="/postnewjob"><h1 className="cursor-pointer hover:underline">POST NEW JOB</h1></Link>


                            {/* View Your Job */}
                            <Link to="/viewpostjobs"><h1 className="cursor-pointer hover:underline">VIEW YOUR JOBS</h1></Link>
                        </>
                    )}


                    {/* Button */}
                    <button onClick={handleOut} className="bg-white text-green-600 font-semibold px-4 py-1 rounded hover:bg-gray-100 transition">
                        LogOut
                    </button>


                </div>
            </div>

        </>
    )
}

export default Header