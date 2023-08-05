import React, { useState } from "react";
import OtpInput from "react-otp-input";
import Modal from "react-responsive-modal";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./otppage.css";
import OtpPage from "./OtpPage";
export default function App({
  onUpdateParentState,
  openOtpPopup,
  setOpenOtpPopup,
}) {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [gotp, setGotp] = useState("");
  const handleOtpClose = () => {
    setOpenOtpPopup(false);
  };
  const [otpValues, setOtpValues] = useState({
    digit1: "",
    digit2: "",
    digit3: "",
    digit4: "",
  });
  const checkOtpValidation = () => {
    if (gotp === otp) {
      notifySuccess();
      navigate("/profile", { state: { sendToggleForChangePass: true } });
      return true;
    } else {
      notifyFailure();
      return false;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
   
   if(checkOtpValidation()){
    setOpenOtpPopup(false)
   }
   else{
    setOpenOtpPopup(true)
   }
  };
  const notifyNewOtp = () =>
    toast.success("New OTP is send successfully!!!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const notifySuccess = () =>
    toast.success("OTP is verified successfully!!!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const notifyFailure = () =>
    toast.warning("Typed OTP is Wrong!!!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const handleOtpResend = () => {
    // generateOTP()
    notifyNewOtp();
    handleGenerateOTP();
  };
  const handleGenerateOTP = () => {
    const generatedOTP = generateOTP();
    setGotp(generatedOTP);
  };
  const generateOTP = () => {
    const length = 4; // Set the desired length of the OTP
    const charset = "0123456789"; // You can include alphabets and special characters as well if needed
    let otp = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      otp += charset[randomIndex];
    }
    return otp;
  };

  useEffect(() => {
    setGotp(generateOTP());
  }, []);

  return (
    <Modal
      open={openOtpPopup}
      onClose={handleOtpClose}
      center
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
        // closeButton: "closeIconInOtpPage",
      }}
    >
      <div className=" bg-[#E4F0FC]">
      {gotp}
      <form
        className="w-full  py-4 mx-auto   flex flex-col sm:justify-center gap-4  sm:w-auto md:px-10"
        onSubmit={handleSubmit} // Handle form submission
        >
        <div>
          <h1 className="text-[20px] ml-1 text-center  font-sans font-[700]">
            OTP Verification
          </h1>
          <p className="text-[12px] ml-1 text-center font-sans mt-2 ">
            Enter the OTP to -{" "}
            <span className="font-[600] text-[14px]"> k***zu@gmail.com</span>
          </p>
        </div>
        
        <div className="flex items-center justify-center mx-auto">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            inputType="tel"
            containerStyle="containerStyle"
            inputStyle="inputStyle"
            renderSeparator={<span style={{ margin: "0px" }}>-</span>}
            renderInput={(props) => <input {...props} />}
            />
        </div>
        <div onClick={handleOtpResend} className="cursor-pointer">
          <p className="text-[11px] text-center ml-1  w-full font-sans mt-2 ">
            Don’t receive code ?{" "}
            <span className="font-[500] text-[#6A00BF] text-[13px]">
              {" "}
              Re-send
            </span>
          </p>
        </div>
        <div className="flex justify-center px-5">
          <button
            className="text-center w-full flex justify-center items-center h-[40px] mt-1 rounded-[6px] font-sans font-[600] text-[16px] bg-[#4556EA] sm:w-[250px] md:h-[45px] text-white  hover:bg-[#3A45B4] active:bg-[#2C3477]"
            type="button "
            style={{
              lineHeight: "normal",
              letterSpacing: "0.4px",
            }}
            onClick={handleSubmit}
            >
            Submit
          </button>
        </div>
      </form>
            </div>
    </Modal>
  );
}
