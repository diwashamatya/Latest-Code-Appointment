
import React, { useState } from "react";
import radio from "../images/radio1.png";

import right from "../images/right.png";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import OfferModal from "./OfferModal";

const Offers = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const onCloseModal = () => setModalOpen(false);

  return (
    <div className=" flex flex-wrap gap-8">
      <Modal
        open={modalOpen}
        onClose={onCloseModal}
        center
        classNames={{
          // overlay: "customOverlay",
          modal: "customModal",
        }}
      >
        <OfferModal />
      </Modal>

      <div className="w-[100%] sm:w-[450px] h-[145px] rounded-[7px] bg-white">
        <div className="w-[100%] sm:w-[450px] h-[50px] bg-[#8FCEDD] rounded-t-[7px] flex items-center justify-center">
          <h2 className="text-white text-[17px] font-[600]">Offers</h2>
        </div>
        <div className=" flex w-full px-2 md:px-8 py-[17px] justify-between ">
          <div className="flex gap-4">
          <img src={radio} alt="radio" className="w-[12x] h-[12px] mt-0 md:mt-1" />
          <p className="text-[12px] md:text-[16px]">
            20% off for 30 min consultant
          </p>
          </div>
          <div
            className="flex gap-2 md:gap-1 cursor-pointer "
            onClick={openModal}
          >
            <p className="text-[10px] md:text-[14px] text-[#4A55A2] ml-[20px] md:ml-[50px] font-[500] min-w-[50px]">
              Jun 15 - 16
            </p>
            <img
              src={right}
              alt="right"
              className="w-[12px] h-[16px] md:w-[15px] md:h-[18px]"
            />
          </div>
        </div>
        <div className="flex px-4 items-center justify-between">
          <p className="text-[12px] md:text-[14px] text-[#6A5F5F]">Limited</p>
          <p className="text-[12px] md:text-[14px] text-[#6A5F5F] mr-[10px]">
            20 views
          </p>
        </div>
      </div>
      <div className="w-[100%] sm:w-[450px] h-[145px] rounded-[7px] bg-white">
        <div className="w-[100%] sm:w-[450px] h-[50px] bg-[#8FCEDD] rounded-t-[7px] flex items-center justify-center">
          <h2 className="text-white text-[17px] font-[600]">Offers</h2>
        </div>
        <div className=" flex w-full px-2 md:px-8 py-[17px] justify-between ">
          <div className="flex gap-4">
          <img src={radio} alt="radio" className="w-[12x] h-[12px] mt-0 md:mt-1" />
          <p className="text-[12px] md:text-[16px]">
            20% off for 30 min consultant
          </p>
          </div>
          <div
            className="flex gap-2 md:gap-1 cursor-pointer "
            onClick={openModal}
          >
            <p className="text-[10px] md:text-[14px] text-[#4A55A2] ml-[20px] md:ml-[50px] font-[500] min-w-[50px]">
              Jun 15 - 16
            </p>
            <img
              src={right}
              alt="right"
              className="w-[12px] h-[16px] md:w-[15px] md:h-[18px]"
            />
          </div>
        </div>
        <div className="flex px-4 items-center justify-between">
          <p className="text-[12px] md:text-[14px] text-[#6A5F5F]">Limited</p>
          <p className="text-[12px] md:text-[14px] text-[#6A5F5F] mr-[10px]">
            20 views
          </p>
        </div>
      </div>
      <div className="w-[100%] sm:w-[450px] h-[145px] rounded-[7px] bg-white">
        <div className="w-[100%] sm:w-[450px] h-[50px] bg-[#8FCEDD] rounded-t-[7px] flex items-center justify-center">
          <h2 className="text-white text-[17px] font-[600]">Offers</h2>
        </div>
        <div className=" flex w-full px-2 md:px-8 py-[17px] justify-between ">
          <div className="flex gap-4">
          <img src={radio} alt="radio" className="w-[12x] h-[12px] mt-0 md:mt-1" />
          <p className="text-[12px] md:text-[16px]">
            20% off for 30 min consultant
          </p>
          </div>
          <div
            className="flex gap-2 md:gap-1 cursor-pointer "
            onClick={openModal}
          >
            <p className="text-[10px] md:text-[14px] text-[#4A55A2] ml-[20px] md:ml-[50px] font-[500] min-w-[50px]">
              Jun 15 - 16
            </p>
            <img
              src={right}
              alt="right"
              className="w-[12px] h-[16px] md:w-[15px] md:h-[18px]"
            />
          </div>
        </div>
        <div className="flex px-4 items-center justify-between">
          <p className="text-[12px] md:text-[14px] text-[#6A5F5F]">Limited</p>
          <p className="text-[12px] md:text-[14px] text-[#6A5F5F] mr-[10px]">
            20 views
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offers;
