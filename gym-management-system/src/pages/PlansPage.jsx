import React from "react";

const Plans = () => {
  const plansData = [
    { name: "Basic Plan", price: "1000 LKR", color: "bg-blue-500" },
    { name: "Premium Plan", price: "3000 LKR", color: "bg-green-500" },
    { name: "Gold Plan", price: "5000 LKR", color: "bg-yellow-500" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Plans</h2>
      <div className="grid grid-cols-3 gap-6">
        {plansData.map((plan, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg text-white ${plan.color}`}
          >
            <div className="flex justify-between items-center">
              {/* Icon */}
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-purple-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 0L0 20h20L10 0z" />
                </svg>
              </div>
              {/* Price */}
              <p className="text-2xl font-bold">{plan.price}</p>
            </div>
            <p className="mt-4 text-lg font-semibold">{plan.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
