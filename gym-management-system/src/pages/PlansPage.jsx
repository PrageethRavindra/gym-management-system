import React, { useEffect, useState } from "react";
import axios from "axios";

const PlansAndClasses = () => {
  const [plansData, setPlansData] = useState([]);
  const [classesData, setClassesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch plans
        const plansResponse = await axios.get("http://localhost:5000/api/packages");
        // Fetch classes
        const classesResponse = await axios.get("http://localhost:5000/api/classes");

        // Update state
        setPlansData(plansResponse.data);
        setClassesData(classesResponse.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data from the API.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className="text-center mt-20 text-xl">Loading plans and classes...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center mt-20">{error}</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Plans & Classes</h1>

      {/* Plans Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Plans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plansData.map((plan) => (
            <div
              key={plan.id}
              className="bg-purple-200 rounded-lg shadow-lg p-6 text-center flex flex-col items-center"
            >
              <div className="w-12 h-12 mb-4 bg-purple-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 0L0 20h20L10 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-2xl font-bold text-purple-700">{plan.price} LKR</p>
            </div>
          ))}
        </div>
      </div>

      {/* Classes Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Classes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {classesData.map((classItem) => (
            <div
              key={classItem.id}
              className="bg-white border rounded-lg shadow-md p-4 text-center"
            >
              <h3 className="text-lg font-semibold mb-2">{classItem.name}</h3>
              <p className="text-sm text-gray-600 mb-1">{classItem.description}</p>
              <p className="text-sm text-gray-600 mb-1">Trainer: {classItem.trainer}</p>
              <p className="text-sm text-gray-600 mb-2">
                Schedule: {classItem.schedule}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlansAndClasses;
