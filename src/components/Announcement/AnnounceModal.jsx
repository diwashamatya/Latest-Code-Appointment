import React from "react";

const AnnounceModal = ({onCloseModal}) => {

  const handleCancelClick = ()=>{
    onCloseModal()
  }
  return (
    <div className="w-full pb-5 sm:pb-0 sm:w-[450px] sm:h-[370px] bg-[#E4F0FC] rounded-[10px]">
      <div className="w-full sm:w-[450px] py-4 sm:py-0 sm:h-[60px] bg-[#AAC6E5] rounded-t-[10px] flex items-center justify-center">
        <h1 className="text-[18px] sm:text-[25px] text-white">ANNOUNCEMENT</h1>
      </div>
      <div className="w-full sm:w-[450px] h-[60px] flex py-5 px-4 justify-between">
        <p className="text-[#3A4DF8] font-[500]">June 15 - 16</p>
      </div>
      <div className="sm:h-[160px] py-5 sm:py-0 bg-white mx-4 rounded-[9px] flex items-center justify-center px-5 shadow-md">
        <p className="text-[16px]">
          We wanted to take a moment to inform you that we will be embarking on
          a well-deserved vacation in June 2021. We will be stepping away from
          the office to recharge and indulge in quality moments with our loved
          ones.
        </p>
      </div>
      <div className="flex  sm:h-[45px] mt-5 mb-5 gap-3 justify-end px-4 ">
        <button
          type="submit"
          className="bg-[#0AA1DD] text-[white] font-[600] font-inter p-4 rounded-[5px] flex justify-center  items-center text-[14px] h-[39px] "
          style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
        >
          Edit
        </button>
        <button
          type="submit"
          className="bg-[#f1f1f1] text-[black] font-[600] font-inter p-4 rounded-[5px] flex justify-center  items-center text-[14px] h-[39px] "
          style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
          onClick={
            handleCancelClick
          }
        >
          Cancel
        </button>{" "}
      </div>
    </div>
  );
};

export default AnnounceModal;
