import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ViewYourJobs = () => {
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getViewAllJobs();
    }, []);

    const getViewAllJobs = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}job/getmyjobs`, {
                withCredentials: true,// ✅ Send cookies
            });

            console.log("Jobs:", res.data.jobs);
            setJobs(res.data.jobs);
        } catch (err) {
            console.error("Error fetching jobs:", err.response?.data || err.message);

            // Optional: If user is not authorized
            if (err.response?.status === 401) {
                Swal.fire("Unauthorized", "You must be logged in to view your jobs.", "error");
                navigate("/login");
            } else {
                Swal.fire("Error", "Failed to fetch your jobs.", "error");
            }
        }
    };

    return (
        <div className="w-full flex flex-col items-center space-y-6 py-8">
            {jobs.length > 0 ? (
                jobs.map((job, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl">
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">{job.title}</h2>
                        <p className="text-gray-700 mb-1"><span className="font-semibold">Category:</span> {job.category}</p>
                        <p className="text-gray-700 mb-1"><span className="font-semibold">Location:</span> {job.city}, {job.country}</p>
                        <p className="text-gray-700 mb-1"><span className="font-semibold">Salary Type:</span> {job.salaryType}</p>
                        <p className="text-gray-700 mb-1">
                            <span className="font-semibold">Salary:</span>{" "}
                            {job.salaryFrom === job.salaryTo
                                ? `₹${job.salaryFrom}`
                                : `₹${job.salaryFrom} - ₹${job.salaryTo}`}
                        </p>
                        <p className="text-gray-700 mt-3"><span className="font-semibold">Description:</span> {job.description}</p>
                    </div>
                ))
            ) : (
                <p className="text-gray-600">No jobs found.</p>
            )}
        </div>
    );
};

export default ViewYourJobs;
