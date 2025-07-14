
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const JobDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [job, setJob] = useState(null);

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get(`${import.meta.env.VITE_BASE_URL}job/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setJob(res.data.job);
            } catch (err) {
                console.error("Error fetching job:", err.response?.data || err.message);
                navigate("/alljob");
            }
        };

        fetchJob();
    }, [id, navigate]);

    if (!job) {
        return <p className="text-center mt-10">Loading job details...</p>;
    }

    return (
        <div className="max-w-3xl mx-auto p-6 mt-8 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-4 text-green-700">{job.title}</h1>
            <p><strong>Category:</strong> {job.category}</p>
            <p><strong>Location:</strong> {job.city}, {job.country}</p>
            <p><strong>Salary Type:</strong> {job.salaryType}</p>
            <p><strong>Salary:</strong> ₹{job.salaryFrom} - ₹{job.salaryTo}</p>
            <p className="mt-4"><strong>Description:</strong> {job.description}</p>
        </div>
    );
};

export default JobDetails;
