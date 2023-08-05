import React from "react";
import "./offermodal.css"
const OfferModal = ({onCloseModal}) => {

  const handleCancelClick = ()=>{
    onCloseModal()
  }
  return (
   
    <div className="w-full sm:w-[450px] sm:h-[330px] bg-[#E4F0FC] rounded-[10px]">
      <div className="w-full sm:w-[450px] sm:h-[60px] bg-[#84aedd]  rounded-t-[10px] flex items-center justify-center">
        <h1 className="text-[20px] text-white p-4">OFFER</h1>
      </div>
      <div className="w-full sm:w-[450px] h-[60px] flex py-5 px-4 justify-between">
        <p className="text-[#3A4DF8] font-[500]">June 15 - 16</p>
        <p className="text-[#3A4DF8] font-[500]">5:00 - 17:00</p>
      </div>
      <div className="sm:h-[120px]  bg-white mx-4 rounded-[9px] flex items-center justify-center px-5 shadow-md">
        <p className="text-[16px] py-2">
          Take advantage of our limited-time offer. Get a 20% discount on a
          one-hour consultation between June 1 and June 5.
        </p>
      </div>
      <div className="flex  sm:h-[45px] pb-5 sm:pb-0 mt-5 gap-3 justify-end px-4 ">
        <button
          type="submit"
          className="bg-[#0AA1DD] text-[white] font-[600] font-inter p-4 rounded-[5px] flex justify-center  items-center text-[14px] h-[39px] "
          style={{ boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.25)" }}
        >
          Edit
        </button>
        <button
          type="submit"
          className="bg-[#f1f1f1] text-[black] font-[600] font-inter p-4 rounded-[5px] flex justify-center  items-center text-[14px] h-[39px] "
          style={{ boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.25)" }}
          onClick={handleCancelClick}
        >
          Cancel
        </button>{" "}
      </div>
    </div>
  );
};

export default OfferModal;
