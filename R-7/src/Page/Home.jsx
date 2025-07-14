const Home = () => {
    return (
        <>
            <div className="flex flex-col bg-white text-slate-900">

                {/*  Find Your Dream Job Easy And Fast.*/}
                <div className="w-full flex flex-col bg-gradient-to-b from-green-100 via-white to-green-50">
                    <div className="flex flex-col justify-center items-center p-4 m-10 font-serif font-bold text-center">
                        <h1 className="text-4xl text-green-700">Find Your Dream Job</h1>
                        <h1 className="text-4xl text-green-700">Easy And Fast.</h1>
                        <h1 className="text-2xl mt-4 text-slate-700 max-w-3xl">
                            A Platform where you can get your desired job without any hassle
                        </h1>
                    </div>

                    <div className="w-full flex flex-wrap justify-around px-10 gap-4 mb-10">
                        <p className="border-4 border-green-600 text-green-800 bg-green-100 px-6 py-3 font-bold rounded-lg shadow">
                            Live Jobs: <b>16,279</b>
                        </p>
                        <p className="border-4 border-green-600 text-green-800 bg-green-100 px-6 py-3 font-bold rounded-lg shadow">
                            Companies: <b>52,000</b>
                        </p>
                        <p className="border-4 border-green-600 text-green-800 bg-green-100 px-6 py-3 font-bold rounded-lg shadow">
                            Job Seekers: <b>9,870</b>
                        </p>
                        <p className="border-4 border-green-600 text-green-800 bg-green-100 px-6 py-3 font-bold rounded-lg shadow">
                            Employees: <b>4,660</b>
                        </p>
                    </div>
                </div>

                {/* How Career Connect Works */}
                <div className="flex flex-col justify-center items-center p-4 m-10 bg-slate-50 rounded-lg shadow">
                    <h1 className="text-4xl font-bold text-green-700 mb-10 text-center">
                        How Career Connect Works
                    </h1>

                    <div className="flex flex-col md:flex-row justify-around items-center gap-10">

                        {/* Step 1 - Create Account */}
                        <div className="max-w-sm bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center text-center">
                            <img src="/img_1.png" alt="Create Account" className="w-32 h-32 mb-4 object-contain" />
                            <h2 className="font-bold text-green-800 text-xl mb-2">Create Account</h2>
                            <p className="text-slate-700">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores nemo quae explicabo in voluptas minima?
                            </p>
                        </div>

                        {/* Step 2 - Find Job */}
                        <div className="max-w-sm bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center text-center">
                            <img src="/img_2.png" alt="Find Job" className="w-32 h-32 mb-4 object-contain" />
                            <h2 className="font-bold text-green-800 text-xl mb-2">Find Job</h2>
                            <p className="text-slate-700">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores nemo quae explicabo in voluptas minima?
                            </p>
                        </div>

                        {/* Step 3 - Apply for Job */}
                        <div className="max-w-sm bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center text-center">
                            <img src="/img_3.png" alt="Apply for Job" className="w-32 h-32 mb-4 object-contain" />
                            <h2 className="font-bold text-green-800 text-xl mb-2">Apply for Job</h2>
                            <p className="text-slate-700">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores nemo quae explicabo in voluptas minima?
                            </p>
                        </div>

                    </div>
                </div>


                {/* Popular Categories */}
                <div className="px-4 py-10 bg-white">
                    <h1 className="text-4xl text-center text-green-700 font-bold mb-6">Popular Categories</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
                        <div className="p-4 flex flex-col justify-center items-center border rounded-lg bg-green-50 border-green-300 text-green-900 hover:bg-green-100 transition">
                            <h2 className="font-bold text-xl">MERN</h2>
                            <p>MongoDB, ExpressJS, ReactJS, NodeJS</p>
                        </div>
                        <div className="p-4 flex flex-col justify-center items-center border rounded-lg bg-green-50 border-green-300 text-green-900 hover:bg-green-100 transition">
                            <h2 className="font-bold text-xl">React JS</h2>
                            <p>Frontend library for building user interfaces</p>
                        </div>
                        <div className="p-4 flex flex-col justify-center items-center border rounded-lg bg-green-50 border-green-300 text-green-900 hover:bg-green-100 transition">
                            <h2 className="font-bold text-xl">Node JS</h2>
                            <p>Backend JavaScript runtime</p>
                        </div>
                        <div className="p-4 flex flex-col justify-center items-center border rounded-lg bg-green-50 border-green-300 text-green-900 hover:bg-green-100 transition">
                            <h2 className="font-bold text-xl">Python</h2>
                            <p>Programming language for backend, ML, and more</p>
                        </div>
                        <div className="p-4 flex flex-col justify-center items-center border rounded-lg bg-green-50 border-green-300 text-green-900 hover:bg-green-100 transition">
                            <h2 className="font-bold text-xl">Java</h2>
                            <p>Popular language used in enterprise software</p>
                        </div>
                        <div className="p-4 flex flex-col justify-center items-center border rounded-lg bg-green-50 border-green-300 text-green-900 hover:bg-green-100 transition">
                            <h2 className="font-bold text-xl">DevOps</h2>
                            <p>Tools and practices for CI/CD and deployment</p>
                        </div>
                    </div>
                </div>

                {/* Top Companies */}
                <div className="flex flex-col justify-center items-center gap-10 py-12 bg-slate-100">
                    <h1 className="text-4xl text-green-700 font-bold">Top Companies</h1>
                    <div className="flex flex-col md:flex-row gap-6 px-4">
                        <div className="max-w-xs bg-white p-6 rounded-lg border border-slate-300 shadow hover:shadow-md transition flex flex-col items-center">
                            <h1 className="text-xl font-bold text-green-800 mb-2">Google</h1>
                            <p className="text-slate-700 text-sm mb-4 text-center">
                                Google LLC is an American multinational corporation focusing on online advertising, search engine, cloud computing, and AI.
                            </p>
                            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                                Apply Now
                            </button>
                        </div>

                        <div className="max-w-xs bg-white p-6 rounded-lg border border-slate-300 shadow hover:shadow-md transition flex flex-col items-center">
                            <h1 className="text-xl font-bold text-green-800 mb-2">Microsoft</h1>
                            <p className="text-slate-700 text-sm mb-4 text-center">
                                Microsoft develops, manufactures, and supports a wide range of software, services, and devices.
                            </p>
                            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                                Apply Now
                            </button>
                        </div>

                        <div className="max-w-xs bg-white p-6 rounded-lg border border-slate-300 shadow hover:shadow-md transition flex flex-col items-center">
                            <h1 className="text-xl font-bold text-green-800 mb-2">NVIDIA</h1>
                            <p className="text-slate-700 text-sm mb-4 text-center">
                                NVIDIA designs GPUs and SoCs for gaming, AI, and professional visualization markets.
                            </p>
                            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home