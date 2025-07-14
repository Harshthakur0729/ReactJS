import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllJob = () => {
    const [allJobs, setAllJobs] = useState([]);

    useEffect(() => {
        getAllJobs();
    }, []);

    const getAllJobs = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}job/getall`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
            });

            console.log("Jobs:", res.data.jobs);
            setAllJobs(res.data.jobs);
        } catch (err) {
            console.error("Error fetching jobs:", err.response?.data || err.message);
        }
    };

    return (
        <div className="p-6 bg-white min-h-screen">
            <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">All Jobs</h1>

            {allJobs.length === 0 ? (
                <p className="text-center text-gray-500">No jobs found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {allJobs.map((job, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-between bg-green-50 border border-green-200 rounded-lg shadow-md p-6 hover:shadow-lg transition"
                        >
                            <div>
                                <h2 className="text-xl font-bold text-green-800 mb-2">{job.title}</h2>
                                <p className="text-gray-600 mb-1"><strong>Category:</strong> {job.category}</p>
                                <p className="text-gray-600 mb-1"><strong>Location:</strong> {job.city}, {job.country}</p>
                                <p className="text-gray-600 mb-1"><strong>Salary:</strong> ₹{job.salaryFrom} - ₹{job.salaryTo}</p>
                            </div>

                            <Link
                                to={`/job/${job._id}`}
                                className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition text-center"
                            >
                                See More Details
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllJob;
