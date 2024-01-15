"use client";
import React, { useState } from "react";
import Modal from "../modal/page";

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
    <div className="flex flex-col items-center justify-center min-h-screen">
      
      {isModalOpen && <Modal closeModal={closeModal} />}

      <div className={`flex w-20 justify-center rounded-md mx-auto my-2 px-2 py-3 text-md font-semibold shadow-sm bg-[#587F61] text-white hover:bg-[#4a6b52]' : 'bg-gray-300 text-gray-500 cursor-not-allowed`}>
        <button onClick={handleButtonClick} className="text-white">
          open modal
        </button>
      </div>
    </div>
  );
};

export default Calculate;
