// src/pages/ClientsPage.jsx
import React, { useState } from "react";
import ClientsTable from "../components/Clients/ClientsTable";
import ClientForm from "../components/Clients/ClientForm";

const ClientsPage = () => {
  const [clients, setClients] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ]);

  const handleAddClient = (client) => {
    setClients([...clients, { id: Date.now(), ...client }]);
  };

  return (
    <div className="clients-page">
      <h1>Clients</h1>
      <ClientForm onAddClient={handleAddClient} />
      <ClientsTable clients={clients} />
    </div>
  );
};

export default ClientsPage;