// Modal.js
"use client";
import React, { useState } from "react";

const Modal = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState("Select Activity");

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleActivitySelect = (activity) => {
    setSelectedActivity(activity);
    setDropdownOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleButtonClick}
        className="mt-20 ml-20 text-neutral-400 text-4xl font-normal bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
      >
        Open Modal
      </button>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-md w-96">
            <div className="flex items-center justify-between mb-6">
              <div className="text-green-700 text-sm font-semibold font-inter">
                Fill in the details to calculate your calories
              </div>
              <div
                className="ml-6 text-blue-500 text-xs font-normal font-inter cursor-pointer"
                onClick={closeModal}
              >
                Skip
              </div>
            </div>

            <FormInput label="Age" placeholder="Enter your age" extraText="Ages 15-80" />
            <div className="inline-flex items-start justify-center mb-4">
              <div>
                <h1 className="text-green-700 text-sm py-2">Gender</h1>
              </div>
              <div className="inline-flex ml-4">
                <RadioInput id="male" name="gender" value="male" label="Male" />
                <RadioInput id="female" name="gender" value="female" label="Female" />
              </div>
            </div>

            <FormInput label="Height" placeholder="Enter your height" />
            <FormInput label="Weight" placeholder="Enter your weight" />
            <div>
            <div className="inline-flex flex justify-center">
              <div>
                <h1 className="text-green-700 py-4">Frequency</h1>
              </div>
              <Dropdown
              selectedActivity={selectedActivity}
              toggleDropdown={toggleDropdown}
              isDropdownOpen={isDropdownOpen}
              handleActivitySelect={handleActivitySelect}
            />
            </div>
            
            </div>
            <div className="flex w-11/12 justify-center items-center mx-auto mt-6">
              <button
                onClick={closeModal}
                className="bg-green-700 py-2 px-6 text-md font-semibold text-white rounded-md shadow-sm hover:bg-[#4a6b52] focus:outline-none focus:ring focus:border-blue-300"
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

const FormInput = ({ label, placeholder, extraText }) => (
  <div className="inline-flex items-start justify-center mb-4">
    <div>
      <h1 className="text-green-700 text-sm py-2">{label}</h1>
    </div>
    <div className="inline-flex ml-4">
      <input
        type="number"
        className="ml-2 bg-gray-100 text-green-700 text-center rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
        placeholder={placeholder}
      />
      {extraText && <p className="ml-2 text-green-700 text-xs">{extraText}</p>}
    </div>
  </div>
);

const RadioInput = ({ id, name, value, label }) => (
  <div>
    <input
      type="radio"
      id={id}
      name={name}
      value={value}
      className="radio visually-hidden"
    />
    <label htmlFor={id} className="radio-label mr-7">{label}</label>
  </div>
);

const Dropdown = ({ selectedActivity, toggleDropdown, isDropdownOpen, handleActivitySelect }) => (
  <div className="dropdown mx-6 relative">
    <div
      tabIndex={0}
      role="button"
      className="btn m-1 bg-[#cbd7ce] overflow-hidden"
      onClick={toggleDropdown}
    >
      {selectedActivity}
    </div>
    <ul
      tabIndex={0}
      className={`dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52 absolute ${
        isDropdownOpen ? "" : "hidden"
      }`}
    >
      <li onClick={() => handleActivitySelect("Sedentary")}>
        <a>Sedentary: little or no exercise</a>
      </li>
      <li onClick={() => handleActivitySelect("Light")}>
        <a>Light: exercise 1-3 times/week</a>
      </li>
      <li onClick={() => handleActivitySelect("Moderate")}>
        <a>Moderate : exercise 4-5 times/week</a>
      </li>
      <li onClick={() => handleActivitySelect("Active")}>
        <a>Active : daily exercise or intencse exercise 3-4 times/week</a>
      </li>
      <li onClick={() => handleActivitySelect("Very Active")}>
        <a>Very Active : intencse exercise 6-7 times/week</a>
      </li>
      <li onClick={() => handleActivitySelect("Extra Active")}>
        <a>Extra Active : very intencse exercise daily, or physical job</a>
      </li>
    </ul>
  </div>
);

export default Modal;
