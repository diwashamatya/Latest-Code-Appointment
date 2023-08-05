import React, { useState } from "react";
// import radio from "../images/radio.png";
import right from "../images/right.png";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import OfferModal from "./OfferModal";
import AddOffersModal from "./AddOffersModal";
import "./offermodal.css";
import Offers from "./Offers";
import Annouce from "./Annouce";
import Expired from "./Expired";

const OfferPage = () => {
  const [activeTab, setActiveTab] = useState("offers");


  const [modalOpen, setModalOpen] = useState(false);
  const [addmodalOpen, setAddModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const onCloseModal = () => setModalOpen(false);

  const openAddModal = () => {
    setAddModalOpen(true);
  };
  const closeAddModal = () => {
    setAddModalOpen(false);
  };

  return (
    <div className="flex flex-col px-[10px] sm:px-[20px] md:px-[50px] py-4 w-full bg-[#F3F7F9] gap-3">
      <Modal
        open={addmodalOpen}
        onClose={closeAddModal}
        center
        classNames={{
          // overlay: "customOverlay",
          modal: "customModal",
          closeButton: "customButton",
        }}
      >
        <AddOffersModal />
      </Modal>
      <div className="flex  items-center justify-between w-full">
        <h1 className="text-[20px] md:text-[27px] text-[#3F26A5] ">Announcement</h1>

        <button
         className="flex items-center justify-center bg-[#e7f4fb] border shadow-md gap-2 border px-1 py-1 sm:px-3 sm:py-2 text-center text-[#939af8] text-inter text-[14px] md:text-[16px] font-[600] rounded-[3px]"
          onClick={openAddModal}
        >
          + Add Offers
        </button>
      </div>

      <div className="flex gap-2">
        <button
          className={`border-r px-[5px] sm:px-[25px] py-[2px] sm:py-[15px] text-[12px] md:text-[18px] ${
            activeTab === "offers"
              ? "border-gray-300 bg-gradient bg-gradient-to-b from-gray-100 via-white to-transparent shadow-inner inset-x-0 inset-y-2 bg-white "
              : ""
          } `}
          style={
            activeTab === "offers"
              ? {
                  color: "#346AFF",
                  // padding: '10px 15px',
                  borderWidth: "0.5px",
                  boxShadow: "0px 2px 5px 0px #D2F3FA",
                }
              : { boxShadow: "0px 2px 5px 0px #D2F3FA" }
          }
          onClick={() => setActiveTab("offers")}
        >
          Offers
        </button>

        <button
          className={`border-r px-[5px] sm:px-[25px] py-[2px] sm:py-[15px] text-[12px] md:text-[18px] ${
            activeTab === "announcement"
              ? "border-gray-300 bg-gradient bg-gradient-to-b from-gray-100 via-white to-transparent shadow-inner inset-x-0 inset-y-2 bg-white"
              : ""
          }`}
          style={
            activeTab === "announcement"
              ? {
                  borderWidth: "0.5px",
                  // padding: '10px 15px',
                  color: "#346AFF",

                  boxShadow: "0px 2px 5px 0px #D2F3FA",
                }
              : { boxShadow: "0px 2px 5px 0px #D2F3FA" }
          }
          onClick={() => setActiveTab("announcement")}
        >
          Announcement
        </button>
        <button
          className={`border-r px-[5px] sm:px-[25px] py-[2px] sm:py-[15px] text-[12px] md:text-[18px] ${
            activeTab === "expired"
              ? "border-gray-300 bg-gradient bg-gradient-to-b from-gray-100 via-white to-transparent shadow-inner inset-x-0 inset-y-2 bg-white"
              : ""
          } `}
          style={
            activeTab === "expired"
              ? {
                  color: "#346AFF",
                  borderWidth: "0.5px",
                  boxShadow: "0px 2px 5px 0px #D2F3FA",
                }
              : { boxShadow: "0px 2px 5px 0px #D2F3FA" }
          }
          onClick={() => setActiveTab("expired")}
        >
          Expired
        </button>
      </div>
      <div className="mt-[30px] flex flex-wrap gap-8">
        <div>
          {activeTab === "offers" && <Offers />}
          {activeTab === "announcement" && <Annouce />}
          {activeTab === "expired" && <Expired />}
        </div>
      </div>
    </div>
  );
};

export default OfferPage;
