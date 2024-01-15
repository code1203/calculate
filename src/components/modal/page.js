// Modal.js
import React from "react";

const Modal = ({ closeModal }) => {
  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  const handleCloseButtonClick = () => {
    closeModal();
  };

  return (
    <div className="overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle min-w-[300px] min-h-[300px]">
        <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex justify-center">
        <h1 className="text-2xl text-black mt-20 font-bold">Your nutritional information</h1>
      </div>
      <div className="mx-auto mt-7 flex justify-center w-[1110px] h-[120px] relative bg-white rounded-[20px]">
        <h1 className="my-auto text-black text-3xl">Recommended calories per day</h1>
        <h1 className="my-auto ml-7 text-orange-400 text-3xl">1365 cal</h1>
      </div>
      <p className="ml-7 mt-2 text-black text-left">*Weight loss is calculated based on your EER (average energy expenditure that your body uses every day) of 20% (your EER is 1706, 20% = 1365).
        Proportions for weight loss nutrients protein: fat 40:30:30
      </p>
      <div className="mx-auto mt-7 w-[1110px] h-[88px] pl-[276px] pr-[275px] py-[22px] bg-[#587F61] rounded-tl-[20px] rounded-tr-[20px] flex justify-center items-center">
        <div className="text-white text-3xl font-normal font-['Inter']">Use this information to calculate.</div>
      </div>
      <div className="mx-auto w-[1110px] h-[88px] pl-[59px] pr-[670px] py-[22px] bg-zinc-100 border-t border-neutral-500 justify-center items-start gap-[268px] inline-flex">
        <div className="text-black text-2xl font-normal font-['Inter']">Age</div>
        <div className="ml-4 text-black text-2xl font-normal font-['Inter']">20</div>
      </div>
      <div className="w-[1110px] h-[88px] pl-[59px] pr-[593px] py-[22px] bg-zinc-100 border-t border-neutral-500 justify-start items-start gap-[210px] inline-flex">
        <div className="text-black text-2xl font-normal font-['Inter']">Gender</div>
        <div className="text-black text-2xl font-normal font-['Inter']">Female</div>
      </div>
      <div className="w-[1110px] h-[88px] pl-[59px] pr-[653px] py-[22px] bg-zinc-100 border-t border-neutral-500 justify-start items-start gap-[223px] inline-flex">
        <div className="text-black text-2xl font-normal font-['Inter']">Height</div>
        <div className="text-black text-2xl font-normal font-['Inter']">160</div>
      </div>
      <div className="w-[1110px] h-[88px] pl-[59px] pr-[670px] py-[22px] bg-zinc-100 border-t border-neutral-500 justify-start items-start gap-[217px] inline-flex">
        <div className="text-black text-2xl font-normal font-['Inter']">Weight</div>
        <div className="text-black text-2xl font-normal font-['Inter']">58</div>
      </div>
      <div className="w-[1110px] h-[88px] pl-[59px] pr-[186px] py-[22px] bg-zinc-100 border-t border-neutral-500 justify-start items-start gap-52 inline-flex">
        <div className="text-black text-2xl font-normal font-['Inter']">Activity</div>
        <div className="text-black text-2xl font-normal font-['Inter']">Sedentary : little or no exercise</div>
      </div>
      <div className="mt-7 inline-flex">
        <div className="text-black text-2xl font-normal font-['Inter']">To edit information to recalculate, </div>
        <div className="text-[#587F61] text-2xl font-semibold font-['Inter']">click here.</div>
      </div>
      <div className={`flex w-20 justify-center rounded-md mx-auto my-2 px-2 py-3 text-md font-semibold shadow-sm bg-[#587F61] text-white hover:bg-[#4a6b52]' : 'bg-gray-300 text-gray-500 cursor-not-allowed`}>
        <button onClick={handleCloseButtonClick} className="text-white">
          close
        </button>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
