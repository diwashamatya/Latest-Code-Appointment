

import React, { useState, useEffect } from "react";
import "react-responsive-modal/styles.css";
import  Modal  from "react-responsive-modal";
import "./custom.css";
import Avatar from "react-avatar-edit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
// import logo from "../../images/admin-photo.png"
export const NewEditProfileImagePopup = ({
  setOpenEditProfileImage,
  openEditProfileImage,
  setProfileImage, profileImage
}) => {

  const notifyProfileUpdated = () => {
    toast.info("Your Profile Image has been updated!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

    const notifyBigFile = () => {
    toast.info("Please select image with size less than 2MB!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [avatarSize, setAvatarSize] = useState({ width: "160", height: "120" });

  // Function to update avatar size based on screen width
  const updateAvatarSize = () => {
    if (window.innerWidth > 768) {
      // setAvatarSize({ width: '500', height: '380' });
      setAvatarSize({ width: "500", height: "300" });
    } else {
      setAvatarSize({ width: "180", height: "220" });
    }
  };
  // Add event listener for window resize
  useEffect(() => {
    updateAvatarSize();
    window.addEventListener("resize", updateAvatarSize);
    return () => {
      window.removeEventListener("resize", updateAvatarSize);
    };
  }, []);
  const onCrop = (view) => {
    setImage(view);
  };
  function onBeforeFileLoad(elem) {
    if (elem.target.files[0].size > 2048000) {
      notifyBigFile()
      elem.target.value = "";
    }
  }
  const handleImageUpdateBtn = () => {
    setOpenEditProfileImage(false);
    setProfileImage(image);
    notifyProfileUpdated()
    navigate("/profile", { state: { image: image } });
  };
  const closeOpenEditProfileImage = () => {
    setOpenEditProfileImage(false);
  };
  return (
    <div className="">
      {" "}
      <Modal
        open={openEditProfileImage}
         onClose={closeOpenEditProfileImage}
        contentLabel="Example Modal"
     
        classNames={{
          modal: "custommodal", closeButton:"customButton", closeIcon:'closeIconInProfileImagePopup'
        }}
      >
        <div className=" flex flex-col items-center border bg-slate-100  pb-5">
          <Avatar
            width={avatarSize.width}
            height={avatarSize.height}
            src={null}
            onCrop={onCrop}
            label="Choose Image"
            labelStyle={{ fontSize: "14px", margin: "15px" }}
            onBeforeFileLoad={onBeforeFileLoad}
            borderStyle={{ minWidth: "70%" }}
            cropColor="green"
            backgroundColor=""
            exportQuality={1}
            exportSize={1000}
          />
        </div>

        <div className="flex justify-center">
          {image && (
            <button
              className="bg-[#068FFF] text-[#ffffff]  font-[500] inline-block rounded  hover:bg-[#4E4FEB] active:bg-[#2C3477]  focus:outline-none border text-[14px] p-2 bg-blue md:text-[18px] md:mx-20 m-2 sm:m-5 flex justify-center"
              onClick={handleImageUpdateBtn}
            >
             <p className="text-white text-center">Update Image</p> 
            </button>
          )}
        </div>
      </Modal>
    </div>
  );
};

