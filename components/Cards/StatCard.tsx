import React from "react";
import BaseCard from "./BaseCard";

const StatCard = () => {
  return (
    <BaseCard>
      <div className="items-center justify-center w-full h-full">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary">
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm-1-5a1 1 0 011-1h2a1 1 0 110 2H10a1 1 0 01-1-1zm0-6a1 1 0 011-1h2a1 1 0 110 2H10a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h2 className="mt-4 text-xl text-center font-bold leading-6 text-gray-900">8,282</h2>
        <p className="text-sm font-medium leading-5 text-gray-600">New users</p>
      </div>
      </BaseCard>
  );
}

export default StatCard;