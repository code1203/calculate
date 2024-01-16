// Calculate.js
"use client";
import React, { useState } from "react";

const Calculate = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
    setModalOpen(true);
    console.log('click!');
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick} className="mt-20 ml-6 px-4 py-2 text-lg font-medium text-white bg-blue-500 hover:bg-blue-600 rounded">
        Open Modal
      </button>

      {isModalOpen && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white p-8 rounded-md shadow-md w-[500px] m-4 overflow-hidden">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="mb-6 font-semibold text-black text-lg">Your Nutritional Information</div>

              <div className="flex justify-center items-center mb-4">
                <div className="text-black">Recommended Calories per Day:</div>
                <div className="ml-2 text-[#FFB55F]">1365 cal</div>
              </div>

              <div className="bg-[#8FA995] h-12 w-96 rounded-tl-[20px] rounded-tr-[20px] flex items-center justify-center mb-4">
                <div className="text-white text-center text-md">
                  Use this information to calculate.
                </div>
              </div>

              <div className="text-black text-md">
                <div className="flex justify-between mb-2 ">
                  <div className="text-left">Age</div>
                  <div className="text-right">20</div>
                </div>

                <div className="flex justify-between mb-2">
                  <div className="text-left">Gender</div>
                  <div className="text-right">Female</div>
                </div>

                <div className="flex justify-between mb-2">
                  <div className="text-left">Height</div>
                  <div className="text-right">160 cm</div>
                </div>

                <div className="flex justify-between mb-2">
                  <div className="text-left">Weight</div>
                  <div className="text-right">58 kg</div>
                </div>

                <div className="flex justify-between">
                  <div className="text-md text-left">Activity</div>
                  <div className="text-md text-right ml-56">Sedentary</div>
                </div>
              </div>

            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={closeModal}
                className="bg-[#587F61] px-4 py-2 text-md font-semibold text-white rounded-md shadow-sm hover:bg-[#4a6b52]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculate;
