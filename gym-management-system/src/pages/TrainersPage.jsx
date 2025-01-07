import React from "react";

const Trainers = () => {
  return (
    <div>
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Trainers</h1>
        <p className="text-sm text-gray-500">Jan 03, 2025</p>
      </header>

      {/* Search Bar */}
      <div className="mb-6 flex items-center gap-4">
        <input
          type="text"
          placeholder="Search trainers"
          className="p-2 w-full border border-gray-300 rounded-lg"
        />
        <button className="p-2 bg-blue-500 text-white rounded-lg">
          <i className="fas fa-search"></i>
        </button>
      </div>

      {/* Trainers Table */}
      <div className="bg-white shadow rounded-lg p-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-600 font-bold border-b">
                <th className="p-3">Name</th>
                <th className="p-3">Speciality</th>
                <th className="p-3">Email</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array(7)
                .fill()
                .map((_, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-100 border-b text-gray-700"
                  >
                    <td className="p-3">John Doe</td>
                    <td className="p-3">Box Fit</td>
                    <td className="p-3">johndoe@example.com</td>
                    <td className="p-3 text-center flex justify-center gap-2">
                      <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
                        Edit
                      </button>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                        View
                      </button>
                      <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Total Trainers */}
      <div className="mt-6 text-right">
        <p className="text-lg font-bold text-green-500">Total Trainers: 012</p>
      </div>
    </div>
  );
};

export default Trainers;
