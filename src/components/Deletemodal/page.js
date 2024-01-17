"use client";
import React, { useState } from 'react';

const DeleteContentModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleConfirmDelete = () => {
    // Add your delete logic here
    console.log('Deleting content...');
    handleCloseModal();
  };

  return (
    <>
      {/* Trigger button to open the modal */}
      <button onClick={handleOpenModal} className='mt-20'>Open Delete Modal</button>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="w-[500px] h-[186px] px-10 py-[30px] flex-col justify-start items-start gap-3.5 inline-flex">
              {/* ... (your existing content) */}

              {/* Buttons */}
              <div className="w-[500px] h-[82px] px-10 py-5 bg-black bg-opacity-5 justify-end items-center gap-6 inline-flex">
                <div
                  className="h-[42px] rounded border border-zinc-800 border-opacity-50 flex-col justify-center items-center inline-flex"
                  onClick={handleCloseModal}
                >
                  <div className="px-[22px] py-2 justify-center items-center gap-2 inline-flex">
                    <div className="text-neutral-500 text-[15px] font-normal" style={{ fontFamily: 'Inter' }}>
                      ยกเลิก
                    </div>
                  </div>
                </div>
                <div
                  className="h-[42px] bg-red-500 rounded shadow flex-col justify-center items-center inline-flex"
                  onClick={handleConfirmDelete}
                >
                  <div className="px-[22px] py-2 justify-center items-center gap-2 inline-flex">
                    <div className="h-[22px] flex-col justify-center items-center inline-flex">
                      <div className="w-6 h-6 relative flex-col justify-start items-start flex"></div>
                    </div>
                    <div className="text-white text-[15px] font-normal" style={{ fontFamily: 'Inter' }}>
                      ยืนยันการลบข้อมูล
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteContentModal;
