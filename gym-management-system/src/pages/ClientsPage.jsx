// src/components/Clients.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [name, setName] = useState("");
  const [membershipType, setMembershipType] = useState("");
  const [status, setStatus] = useState("Active");

  useEffect(() => {
    // Fetch clients
    axios.get("http://localhost:5000/api/clients")
      .then((response) => {
        setClients(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleAddClient = (e) => {
    e.preventDefault();
    // Add new client
    axios.post("http://localhost:5000/api/clients", {
      name, membershipType, status
    }).then((response) => {
      setClients([...clients, response.data]);
    });
  };

  return (
    <div className="p-8 bg-gray-100">
      <form onSubmit={handleAddClient} className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-bold">Add Client</h3>
        <input
          type="text"
          placeholder="Client Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Membership Type"
          value={membershipType}
          onChange={(e) => setMembershipType(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg">
          Add Client
        </button>
      </form>

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Membership Type</th>
            <th>Status</th>
            <th>Join Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.membershipType}</td>
              <td>{client.status}</td>
              <td>{client.joinDate}</td>
              <td>
                <button className="text-blue-500">Edit</button>
                <button className="text-red-500 ml-4">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clients;
