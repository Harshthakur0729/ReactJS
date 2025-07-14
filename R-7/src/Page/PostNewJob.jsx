import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PostJobForm = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [location, setLocation] = useState("");
    const [salaryType, setSalaryType] = useState("");
    const [fixedSalary, setFixedSalary] = useState("");
    const [salaryTo, setSalaryTo] = useState("");
    const [description, setDescription] = useState("");

    // const [token, setToken] = useState("");
    const navigate = useNavigate();

  const { isAuthorized } = useContext(Context);

const handleForm = async (e) => {
    e.preventDefault();

    if (!isAuthorized) {
        Swal.fire("Unauthorized", "You are not authorized to post a job.", "error");
        return;
    }

    const data = {
        title,
        category,
        country,
        city,
        location,
        salaryType,
        description,
    };

    if (salaryType === "Fixed Salary") {
        data.fixedSalary = fixedSalary;
    } else if (salaryType === "Ranged Salary") {
        data.salaryFrom = fixedSalary;
        data.salaryTo = salaryTo;
    }

    try {
        const res = await axios.post(
            `${import.meta.env.VITE_BASE_URL}job/post`,
            data,
            {
                withCredentials: true,
            }
        );

        console.log("Job Post Data", res.data);
        Swal.fire("Success", "Post New Job successfully!", "success");
        navigate("/viewyourjob");

    } catch (error) {
        console.error("Job post failed:", error.response?.data || error.message);
        Swal.fire("Error", "Something went wrong while posting the job.", "error");
    }
};


    return (
        <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
            <div className="flex flex-col justify-center items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Post New Job</h1>
            </div>

            <form onSubmit={handleForm} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                    required
                    className="border-b border-gray-400 focus:border-blue-500 focus:outline-none py-2 px-1"
                    type="text"
                    placeholder="Job Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <select
                    required
                    className="border-b border-gray-400 focus:border-blue-500 focus:outline-none py-2 px-1 bg-transparent"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Select Category</option>
                    <option value="Game Developer">Game Developer</option>
                    <option value="Frontend Developer">Frontend Developer</option>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="UI/UX Designer">UI/UX Designer</option>
                    <option value="Technical Recruiter / HR (IT)">Technical Recruiter / HR (IT)</option>
                    <option value="Video Editor">Video Editor</option>
                    <option value="Motion Graphics Designer">Motion Graphics Designer</option>
                    <option value="Game Designer">Game Designer</option>
                    <option value="Mobile App Developer">Mobile App Developer</option>
                    <option value="DevOps Engineer">DevOps Engineer</option>
                    <option value="Business Analyst">Business Analyst</option>
                </select>

                <input
                    required
                    className="border-b border-gray-400 focus:border-blue-500 focus:outline-none py-2 px-1"
                    type="text"
                    placeholder="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />

                <input
                    required
                    className="border-b border-gray-400 focus:border-blue-500 focus:outline-none py-2 px-1"
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />

                <input
                    required
                    className="md:col-span-2 border-b border-gray-400 focus:border-blue-500 focus:outline-none py-2 px-1"
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />

                <div className="md:col-span-2">
                    <select
                        required
                        className="w-full border-b border-gray-400 focus:border-blue-500 focus:outline-none py-2 px-1 bg-transparent"
                        value={salaryType}
                        onChange={(e) => setSalaryType(e.target.value)}
                    >
                        <option value="">Select Salary Type</option>
                        <option value="Fixed Salary">Fixed Salary</option>
                        <option value="Ranged Salary">Ranged Salary</option>
                    </select>
                </div>

                {salaryType && (
                    <>
                        <input
                            required
                            className="border-b border-gray-400 focus:border-blue-500 focus:outline-none py-2 px-1"
                            type="text"
                            placeholder={salaryType === "Fixed Salary" ? "Fixed Salary" : "Salary From"}
                            value={fixedSalary}
                            onChange={(e) => setFixedSalary(e.target.value)}
                        />
                        {salaryType === "Ranged Salary" && (
                            <input
                                required
                                className="border-b border-gray-400 focus:border-blue-500 focus:outline-none py-2 px-1"
                                type="text"
                                placeholder="Salary To"
                                value={salaryTo}
                                onChange={(e) => setSalaryTo(e.target.value)}
                            />
                        )}
                    </>
                )}

                <textarea
                    rows="4"
                    className="md:col-span-2 border-b border-gray-400 focus:border-blue-500 focus:outline-none py-2 px-1"
                    placeholder="Job Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                <div className="md:col-span-2 flex justify-center mt-4">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
                    >
                        Submit Job
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PostJobForm;




