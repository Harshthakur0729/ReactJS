const MyApplication = () => {
    return (
        <>
            <div className="bg-green-50 border-4 m-10 flex flex-col md:flex-row justify-between items-center gap-6 p-6 rounded-lg shadow-md">

                {/* Application Info */}
                <div className="w-full max-w-md">
                    <p className="text-slate-700 mb-2">
                        <span className="font-semibold text-green-800">Name:</span> <b className="text-slate-900">John Doe</b>
                    </p>
                    <p className="text-slate-700 mb-2">
                        <span className="font-semibold text-green-800">Email:</span> <b className="text-slate-900">john@example.com</b>
                    </p>
                    <p className="text-slate-700 mb-2">
                        <span className="font-semibold text-green-800">Phone Number:</span> <b className="text-slate-900">+91 9876543210</b>
                    </p>
                    <p className="text-slate-700 mb-2">
                        <span className="font-semibold text-green-800">Position:</span> <b className="text-slate-900">React Developer</b>
                    </p>
                    <p className="text-slate-700">
                        <span className="font-semibold text-green-800">Job Details:</span> <b className="text-slate-900">Frontend role in IT sector</b>
                    </p>
                </div>

                {/* Image */}
                <div className="w-40 h-40">
                    <img src="/img_1.png" alt="Applicant" className="w-full h-full object-cover rounded-lg border border-slate-300" />
                </div>

                {/* Delete Button */}
                <div className="self-start md:self-center">
                    <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
                        Delete Application
                    </button>
                </div>
            </div>


        </>
    )
}

export default MyApplication