// Modal.js
"use client";
import React, { useState } from "react";

const RadioInput = ({ id, name, value, label }) => (
  <label htmlFor={id} className="flex items-center">
    <input
      type="radio"
      id={id}
      name={name}
      value={value}
      className="mr-2"
    />
    {label}
  </label>
);

const Dropdown = ({ selectedActivity, toggleDropdown, isDropdownOpen, handleActivitySelect }) => (
  <div className="dropdown mx-6 relative">
    <div
      tabIndex={0}
      role="button"
      className="btn m-1 bg-[#cbd7ce] overflow-hidden flex items-center"
      onClick={toggleDropdown}
    >
      {selectedActivity}
    </div>
    <ul
      tabIndex={0}
      className={`dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52 absolute ${isDropdownOpen ? "" : "hidden"
        }`}
    >
      <li onClick={() => handleActivitySelect("ออกกำลังกายน้อย")}>
        <a>ออกกำลังกายน้อยหรือไม่มีเลย</a>
      </li>
      <li onClick={() => handleActivitySelect("1-3 ครั้ง/สัปดาห์")}>
        <a>ออกกำลังกาย 1-3 ครั้ง/สัปดาห์</a>
      </li>
      <li onClick={() => handleActivitySelect("4-5 ครั้ง/สัปดาห์")}>
        <a>ออกกำลังกาย 4-5 ครั้ง/สัปดาห์</a>
      </li>
      <li onClick={() => handleActivitySelect("ออกกำลังกายเป็นประจำทุกวัน")}>
        <a>ออกกำลังกายเป็นประจำทุกวันหรือออกกำลังกายแบบเข้มข้น 3-4 ครั้ง/สัปดาห์</a>
      </li>
      <li onClick={() => handleActivitySelect("ออกกำลังกายแบบเข้มข้น")}>
        <a>ออกกำลังกายแบบเข้มข้น 6-7 ครั้ง/สัปดาห์</a>
      </li>
      <li onClick={() => handleActivitySelect("การออกกำลังกายที่เข้มข้นมากทุกวัน")}>
        <a>การออกกำลังกายที่เข้มข้นมากทุกวันหรือการทำงานทางกายภาพ</a>
      </li>
    </ul>
  </div>
);

const Modal = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState("กรุณาเลือกความถี่");

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
    <>
      <button
        onClick={handleButtonClick}
        className="mt-28 ml-20 text-neutral-400 text-4xl font-normal bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
      >
        Open Modal
      </button>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-md w-4/12">
            <div className="flex items-center justify-between mb-6">
              <div className="text-green-700 text-lg font-semibold font-inter ml-20">
                กรอกรายละเอียดเพื่อคำนวณแคลอรี่ของคุณ
              </div>
              <div
                className="text-blue-500 text-lg font-normal font-inter cursor-pointer mr-7"
                onClick={closeModal}
              >
                ข้าม
              </div>
            </div>

            <div className="inline-flex items-start justify-center mb-4">
              <div>
                <label htmlFor="age" className="text-green-700 text-lg py-2">อายุ</label>
              </div>
              <div className="inline-flex ml-4">
                <input
                  type="text"
                  id="age"
                  className="ml-16 bg-gray-100 text-green-700 text-center rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="กรุณากรอกอายุ"
                />
                <p className="ml-7 text-green-700 text-lg py-2">อายุ 15-80</p>
              </div>
            </div>

            <div className="inline-flex items-start justify-center mb-4">
              <div>
                <label className="text-green-700 text-lg py-2">เพศ</label>
              </div>
              <div className="inline-flex flex justify-between ml-20 text-xl  text-[#587F61] text-center">
                <RadioInput id="male" name="gender" value="male" label="ชาย" />
                <div className="ml-20"></div>
                <RadioInput id="female" name="gender" value="female" label="หญิง" />
              </div>
            </div>

            <div className="inline-flex items-start justify-center mb-4">
              <div>
                <label htmlFor="height" className="text-green-700 text-lg py-2">ความสูง</label>
              </div>
              <div className="inline-flex ml-4">
                <input
                  type="text"
                  id="height"
                  className="ml-9 bg-gray-100 text-green-700 text-center rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="กรุณากรอกความสูง"
                />
              </div>
            </div>

            <div className="inline-flex items-start justify-center mb-4">
              <div>
                <label htmlFor="weight" className="text-green-700 text-lg py-2">น้ำหนัก</label>
              </div>
              <div className="inline-flex ml-4">
                <input
                  type="text"
                  id="weight"
                  className="ml-10 bg-gray-100 text-green-700 text-center rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="กรุณากรอกน้ำหนัก"
                />
              </div>
            </div>

            <div className="inline-flex mx-auto">
              <div className="inline-flex flex justify-center">
                <div className="text-center">
                  <label className="text-green-700 text-lg">ความถี่</label>
                </div>
                <div className="ml-8 text-center">
                  <Dropdown
                    selectedActivity={selectedActivity}
                    toggleDropdown={toggleDropdown}
                    isDropdownOpen={isDropdownOpen}
                    handleActivitySelect={handleActivitySelect}
                  />
                </div>
              </div>
            </div>

            <div className="flex w-11/12 justify-center items-center mx-auto mt-6">
              <button
                onClick={closeModal}
                className="bg-green-700 py-2 px-6 text-md font-semibold text-white rounded-md shadow-sm hover:bg-[#4a6b52] focus:outline-none focus:ring focus:border-blue-300"
              >
                บันทึก
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
