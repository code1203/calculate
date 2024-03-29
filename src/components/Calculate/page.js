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
          <div className="bg-white p-8 rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] shadow-md w-[500px] m-4 overflow-hidden">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="mb-6 font-semibold text-black text-lg">ข้อมูลโภชนาการของคุณ</div>

              <div className="flex justify-center items-center mb-4">
                <div className="text-black text-xl">แคลอรีที่แนะนำต่อวัน:</div>
                <div className="ml-2 text-[#FFB55F] text-xl">1365 cal</div>
              </div>
              <div className="flex justify-center items-center mb-4">
                <div className="text-black text-xl">BMR :</div>
                <div className="ml-2 text-[#FFB55F] text-xl">......</div>
                <div className="text-black text-xl ml-7">TDEE :</div>
                <div className="ml-2 text-[#FFB55F] text-xl">......</div>
              </div>
              <div className="shadow-md w-[3805x]">
                <div className="bg-[#8FA995] h-12 w-96  flex items-center justify-center mb-4">
                  <div className="text-white text-center text-md">
                    ใช้ข้อมูลนี้ในการคำนวณ
                  </div>
                </div>

                <div className="text-black text-md  text-left">
                  <div className="flex  mb-2 ">
                    <div className="text-left ml-4">อายุ</div>
                    <div className="ml-20">20</div>
                  </div>
                  <hr className="border-b-2 border-gray-300 mb-2" />

                  <div className="flex mb-2">
                    <div className="text-left ml-4">เพศ</div>
                    <div className="ml-20">ผู้หญิง</div>
                  </div>
                  <hr className="border-b-2 border-gray-300 mb-2" />

                  <div className="flex  mb-2">
                    <div className="text-left ml-4">ความสูง</div>
                    <div className="ml-14">160 cm</div>
                  </div>
                  <hr className="border-b-2 border-gray-300 mb-2" />

                  <div className="flex  mb-2">
                    <div className="text-left ml-4">น้ำหนัก</div>
                    <div className="ml-16">58 kg</div>
                  </div>
                  <hr className="border-b-2 border-gray-300 mb-2" />

                  <div className="flex">
                    <div className="text-md text-left ml-4">ความถี่</div>
                    <div className="text-md ml-16 ">ออกกำลังกายน้อย</div>
                  </div>
                </div>
              </div>
              <div className="inline-flex ">
                <p className="text-black">การแก้ไขข้อมูลเพื่อคำนวณใหม่</p>
                <p className="ml-2 text-[#3E5A45]">คลิกที่นี่</p>
              </div>

            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={closeModal}
                className="bg-[#587F61] px-4 py-2 text-md font-semibold text-white rounded-md shadow-sm hover:bg-[#4a6b52]"
              >
                กลับไปหน้าหลัก
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculate;
