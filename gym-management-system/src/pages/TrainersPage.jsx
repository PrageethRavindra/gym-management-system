import React, { useState } from "react";
import axios from "axios";

const TrainersPage = () => {
  // Define state variables
  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");

  // Handle form submission
  const handleAddTrainer = async (e) => {
    e.preventDefault();

    // Validate fields before submitting
    if (!name || !specialization || !experience) {
      console.log("Please fill in all fields");
      return;  // Stop execution if any field is missing
    }

    const newTrainerData = { name, specialization, experience };

    try {
      const response = await axios.post("http://localhost:5000/api/trainers", newTrainerData);
      console.log("Trainer added:", response.data);
      // Handle the success (update UI, reset form, etc.)
      setName("");
      setSpecialization("");
      setExperience("");
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data);
        console.error("Error status:", error.response.status);
      } else {
        console.error("Error message:", error.message);
      }
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Add Trainer</h2>
      <form onSubmit={handleAddTrainer} className="space-y-4">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        {/* Specialization Input */}
        <div>
          <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">Specialization</label>
          <input
            type="text"
            id="specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        {/* Experience Input */}
        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Experience</label>
          <input
            type="text"
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Add Trainer
        </button>
      </form>
    </div>
  );
};

export default TrainersPage;
