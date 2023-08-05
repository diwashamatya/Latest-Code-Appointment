import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import "./profile.css";
import profileImage from "../images/profileImage.png";

import Modal from "react-responsive-modal";
import { ChangePassword } from "./changePassword/ChangePassword";
import { EditProfileTry } from "./EditProfileTry";
import { NewEditProfileImagePopup } from "./changeProfileImage/NewEditProfileImagePopup";
export const Profile2 = ({ toshowEditOption = true }) => {


  const [openEditPopup, setOpenEditPopup] = useState(false);
  const [openEditProfileImage, setOpenEditProfileImage] = useState(false);
  const { state } = useLocation();
  const sendToggleForChangePass = false;
  const sendToggleForChangePasssss = state?.sendToggleForChangePass || false;

  const [profileimage, setProfileImage] = useState(
    state?.image || profileImage
  );
  const [fortogglerandom, setForToggleRandom] = useState(false);
  const handleAfterCloseOtp = () => {
    setForToggleRandom(true);
  };
  return (
    <div
      className="flex flex-col items-center border py-8 md:mt-2 md:py-10 w-[100%] lg:w-[600px]"
      style={{
        backgroundColor: "#F9FBFF",
        borderRadius: "10px",
      }}
    >
      <div className="flex flex-col items-center gap-2 md:gap-5">
        <span className="text-xl md:text-3xl mb-2  font-serif ">
          My Profile
        </span>
        <div
          className={`relative group p-2 md:p-3 flex items-center justify-center `}
          style={{
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            borderRadius: "50%",
          }}
        >
          <div>
            {profileImage !== null ? (
              <img
                src={profileimage}
                alt="Profile picture"
                className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[170px] md:h-[170px] md:p-1"
              />
            ) : (
              <img
                src={profileImage}
                alt="Profile picture"
                className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px]"
              />
            )}
          </div>
          <div
            className="cursor-pointer absolute left-3/4 bottom-0 md:bottom-3 opacity-0 group-hover:opacity-100 flex gap-1 md:gap-3"
            onClick={() => setOpenEditProfileImage(!openEditProfileImage)}
          >
            <div className="border rounded-full bg-[#f1f3f4] p-2 lg:block hidden">
              <img
                className="w-[12px] h-[12px] sm:w-[16px] sm:h-[16px] md:w-[24px] md:h-[24px] object-fill"
                src="./icons8-edit-64.png"
              />
            </div>
          </div>
          {/* //for small screens */}
          <div
            className="cursor-pointer absolute left-3/4 bottom-2 md:bottom-4 opacity-100 flex gap-1 md:gap-3"
            onClick={() => setOpenEditProfileImage(!openEditProfileImage)}
          >
            <div className="border rounded-full bg-[#f1f3f4] p-1  lg:hidden block object-fill">
              <img
                className="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] md:w-[24px] md:h-[24px] object-fill"
                src="./icons8-edit-64.png"
              />
            </div>
          </div>
        </div>
        {openEditProfileImage && (
          <NewEditProfileImagePopup
            openEditProfileImage={openEditProfileImage}
            setOpenEditProfileImage={setOpenEditProfileImage}
            setProfileImage={setProfileImage}
          />
        )}
        <div className=" flex flex-col md:flex-row gap-5 md:gap-20 cursor-pointer hover:opacity-60 mt-2 md:mt-2">
          <div
            className="flex gap-2 items-center justify-center"
            onClick={() => setOpenEditPopup(!openEditPopup)}
          >
            <img src="./icons8-edit-64.png" className="w-[16px] h-[16px]" />
            <p className="font-light ">Edit Profile</p>
          </div>
        </div>
        {openEditPopup && (
          <EditProfileTry
            openEditPopup={openEditPopup}
            setOpenEditPopup={setOpenEditPopup}
          />
        )}
        <div className="flex flex-col gap-1 md:gap-2">
          <h1 className="mt-0 text-center md:mt-0 text-lg md:text-3xl font-medium">
            Mr. Dipesh Shrestha
          </h1>

          <p className="text-md md:text-xl text-center">+977-9846555555</p>
          <p
            style={{ color: "#19A7CE" }}
            className="text-center text-md md:text-xl"
          >
            Dipesh.neutroline@gmail.com
          </p>
        </div>
      </div>
      {state?.sendToggleForChangePass && (
        <Modal
          center
          open={state.sendToggleForChangePass}
          onClose={handleAfterCloseOtp}
          classNames={{
            overlay: "customOverlay",
            modal: "customModal",
            closeButton: "closeIconInChangePassword",
          }}
        >
          <ChangePassword />
        </Modal>
      )}
    </div>
  );
};
