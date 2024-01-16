'use client'
import { useState } from 'react';

const Calorie = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Placeholder functions for the buttons, replace with actual logic
    const calculateFunction = () => {
        onchange(

        )
    };

    const clearFunction = () => {
        // Your clear logic here
    };


    return (
        <>
            <button onClick={openModal} className="mt-20 ml-20 text-neutral-400 text-4xl font-normal">
                Open Modal
            </button>

            {isModalOpen && (
                <div className="mt-9 fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                    <div className="w-[1000px] h-[600px] px-[63px] py-10 bg-white rounded-[79px] flex-col justify-start items-end gap-[30px] inline-flex">
                        <div onClick={closeModal} className="cursor-pointer text-[#8FA995] text-4xl font-normal">
                            ปิด
                        </div>
                        <div className="w-[859px] text-[#F00000] text-xl text-center font-normal">
                            ถ้าไม่กรอกข้อมูลในทั้งสามช่อง ปริมาณการบริโภคแคลอรี่ต่อวันจะถูกตั้งค่าเริ่มต้นที่ 1200
                        </div>
                        <div className="flex-col justify-start items-center gap-[45px] flex text-center">
                            <div className="w-[859px] h-[70px] justify-start items-start gap-[22.69px] flex">
                                <div className="w-[271.21px] h-[70px] pr-2.5 py-2.5 justify-start items-center gap-2.5 inline-flex">
                                    <div className="ml-7 text-[#587F61] text-4xl font-semibold text-left w-full">
                                        มื้อเช้า
                                    </div>
                                </div>
                                <div>
                                    <div className="w-[565.10px] h-[70px] px-5 py-2.5 bg-zinc-100 rounded-[10px] justify-start items-center gap-2.5 inline-flex">
                                        <input
                                            type="text"
                                            placeholder=" กรุณากรอกแคลอรี่ของคุณ"
                                            className="text-[#8FA995] text-2xl font-normal font-['Inter'] w-full outline-none bg-transparent placeholder-[#8FA995]::placeholder"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-[859px] h-[70px] justify-start items-start gap-[22.69px] flex">
                                <div className="w-[271.21px] h-[70px] pr-2.5 py-2.5 justify-start items-center gap-2.5 inline-flex">
                                    <div className="ml-7 text-[#587F61] text-4xl font-semibold text-left w-full">
                                        มื้อกลางวัน
                                    </div>
                                </div>
                                <div>
                                    <div className="w-[565.10px] h-[70px] px-5 py-2.5 bg-zinc-100 rounded-[10px] justify-start items-center gap-2.5 inline-flex">
                                        <input
                                            type="text"
                                            placeholder=" กรุณากรอกแคลอรี่ของคุณ"
                                            className="text-[#8FA995] text-2xl font-normal font-['Inter'] w-full outline-none bg-transparent placeholder-green-500::placeholder"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-[859px] h-[70px] justify-start items-start gap-[22.69px] flex">
                                <div className="w-[271.21px] h-[70px] pr-2.5 py-2.5 justify-start items-center gap-2.5 inline-flex">
                                    <div className="ml-7 text-[#587F61] text-4xl font-semibold text-left w-full">
                                        มื้อเย็น
                                    </div>
                                </div>
                                <div>
                                    <div className="w-[565.10px] h-[70px] px-5 py-2.5 bg-zinc-100 rounded-[10px] justify-start items-center gap-2.5 inline-flex">
                                        <input
                                            type="text"
                                            placeholder=" กรุณากรอกแคลอรี่ของคุณ"
                                            className="text-[#8FA995] text-2xl font-normal font-['Inter'] w-full outline-none bg-transparent placeholder-green-500::placeholder"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto w-[859.10px] justify-center items-center gap-[75px] inline-flex">
                            <div className="basis-1/3 text-center w-[400px] h-[70px] rounded-md bg-[#587F61] my-2 px-2 py-4 text-md font-semibold text-white shadow-sm hover:bg-[#4a6b52] justify-center items-center">
                                <button className="text-white-500 text-3xl font-normal font-['Inter']" onClick={calculateFunction}> คำนวณ</button>
                            </div>
                            <div className="basis-1/3 text-center w-[400px] h-[70px] p-2.5 bg-zinc-100 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                                <button className="text-neutral-500 text-3xl font-normal font-['Inter']" onClick={clearFunction}>
                                    รีเซ็ตค่า
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Calorie;
