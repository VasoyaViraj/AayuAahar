import React, { useContext } from "react";
import { userContext } from "@/contexts/UserContext";
import { DashboardLayout } from "@/components/Dashboard-layout";

export default function SwitchUserPage() {
  const { user, setUser } = useContext(userContext);

  const handleSwitch = (id, name, role) => {
    setUser((prev) => ({
      ...prev,
      id,
      name,
      role,
    }));
  };

  return (
    <DashboardLayout>

    
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-50 p-6">
      <h1 className="text-3xl font-bold mb-8 text-green-700">
        Switch User Context
      </h1>

      {/* Buttons Grid */}
      <div className="grid grid-cols-2 gap-6 w-full max-w-md">
        {/* Patients */}
        <button
          onClick={() => handleSwitch("pat_001", "Patient 1", "patient")}
          className="p-4 bg-green-500 text-white rounded-2xl shadow-md hover:bg-green-600 transition"
        >
          Patient 1
        </button>
        <button
          onClick={() => handleSwitch("pat_002", "Patient 2", "patient")}
          className="p-4 bg-green-500 text-white rounded-2xl shadow-md hover:bg-green-600 transition"
        >
          Patient 2
        </button>
        <button
          onClick={() => handleSwitch("pat_003", "Patient 3", "patient")}
          className="p-4 bg-green-500 text-white rounded-2xl shadow-md hover:bg-green-600 transition"
        >
          Patient 3
        </button>

        {/* Doctors */}
        <button
          onClick={() => handleSwitch("doc_001", "Doctor 1", "doctor")}
          className="p-4 bg-blue-500 text-white rounded-2xl shadow-md hover:bg-blue-600 transition"
        >
          Doctor 1
        </button>
        <button
          onClick={() => handleSwitch("doc_002", "Doctor 2", "doctor")}
          className="p-4 bg-blue-500 text-white rounded-2xl shadow-md hover:bg-blue-600 transition"
        >
          Doctor 2
        </button>
        <button
          onClick={() => handleSwitch("doc_003", "Doctor 3", "doctor")}
          className="p-4 bg-blue-500 text-white rounded-2xl shadow-md hover:bg-blue-600 transition"
        >
          Doctor 3
        </button>
        <button
          onClick={() => handleSwitch("1", "Receptionist 3", "receptionist")}
          className="p-4 bg-orange-500 text-white rounded-2xl shadow-md hover:bg-blue-600 transition"
        >
          Receptionist
        </button>
      </div>

      {/* Current User Card */}
      <div className="mt-10 p-6 bg-white shadow-lg rounded-2xl w-full max-w-md text-center border border-gray-200">
        <h2 className="text-xl font-semibold mb-3 text-gray-700">
          Current User
        </h2>
        <p className="text-gray-600">
          <span className="font-medium">ID:</span> {user.id}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Name:</span> {user.name}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Role:</span>{" "}
          <span
            className={`px-2 py-1 rounded-lg text-sm ${
              user.role === "doctor"
                ? "bg-blue-100 text-blue-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {user.role}
          </span>
        </p>
      </div>
    </div>
    </DashboardLayout>
  );
}
