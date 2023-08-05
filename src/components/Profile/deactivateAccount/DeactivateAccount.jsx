import React from "react";
import { useNavigate } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-responsive-modal";
import "./deactivateAccount.css";
export const DeactivateAccount = ({
  openDeactivatePopup,
  setOpenDeactivatePopup,
}) => {
  const navigate = useNavigate();
  const notify = () => toast.warn('Account is Deactivated Successfully!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  const handleDeactivatePopup = () => {
    setOpenDeactivatePopup(false);
  };
  const handleDeactivateAccount = () => {
    notify();
    navigate("/");
  };
  return (
    <div>
      <Modal
        className="hello"
        open={openDeactivatePopup}
        onClose={handleDeactivatePopup}
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
          closeButton: "closeIconInDeactivateAccount",
        }}
        center
      >
        <div className=" w-full p-5 sm:px-10 md:w-[500px]  flex flex-col justify-center items-start gap-5 bg-[#E4F0FC]">
          <div>
            <h4 className="text-[22px] text-[#3d3d3d] text-left font-[600] mb-1 tracking-wide w-[100%]  font-roboto ">
              Confirm
            </h4>
            <p className="text-[15px]  text-[#3d3d3d] text-left  w-[100%]  font-roboto ">
              Are you sure want to deactivate Your Account?
            </p>
          </div>

          <div className=" w-[100%] flex gap-4 justify-end">
            <button
              className="  bg-[#068FFF] text-[#ffffff]  font-[600] inline-block rounded  hover:bg-[#4E4FEB] active:bg-[#2C3477]  focus:outline-none px-4 py-1  pb-1.5 w-[60px]"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 2px",
                lineHeight: "normal",
                letterSpacing: "0.2px",
              }}
              onClick={handleDeactivateAccount}
            >
              Yes
            </button>
            <button
              className="text-[#383535] border-[0.5px]  font-[600]  border-[#EDE4FF] rounded bg-[#ede8f2] hover:bg-[#f1f1f1] focus:outline-none px-4 py-1 pb-1.5 w-[60px]"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 2px",
                lineHeight: "normal",
                letterSpacing: "0.2px",
              }}
              onClick={() => navigate("/")}
            >
              No
            </button>
          </div>
        </div>
      </Modal>
    </div>
   
  );
};
