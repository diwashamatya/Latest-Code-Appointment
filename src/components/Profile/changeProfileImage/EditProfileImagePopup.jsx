// import React, { useState, useEffect } from "react";
// import "react-responsive-modal/styles.css";
// import Modal from "react-responsive-modal";
// import "./custom.css";
// import Avatar from "react-avatar-edit";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from "react-router-dom";
// import logo from "../../images/admin-photo.png";
// export const EditProfileImagePopup = ({
//   setOpenEditProfileImage,
//   openEditProfileImage,
//   setProfileImage,
// }) => {
//   const navigate = useNavigate();
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [avatarSize, setAvatarSize] = useState({ width: "160", height: "120" });
//   console.log(avatarSize.width);
//   // console.log(avatarSize.width);
//   const onClose = () => {
//     setPreview(null);
//   };
//   const notify = () => {
//     toast.info("Your Profile Image has been updated!", {
//       position: "top-center",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });
//   };
//   const notifyBigFile = () => {
//     toast.info("Please select image with size less than 2MB!", {
//       position: "top-center",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });
//   };

//   // Function to update avatar size based on screen width
//   const updateAvatarSize = () => {
//     if (window.innerWidth > 768) {
//       // setAvatarSize({ width: '500', height: '380' });
//       setAvatarSize({ width: "500", height: "200" });
//     } else {
//       setAvatarSize({ width: "180", height: "150" });
//     }
//   };
//   // Add event listener for window resize
//   useEffect(() => {
//     updateAvatarSize();
//     window.addEventListener("resize", updateAvatarSize);
//     return () => {
//       window.removeEventListener("resize", updateAvatarSize);
//     };
//   }, []);
//   // console.log(image);
//   const onCrop = (view) => {
//     setPreview(view);
//     setImage(view);
//     console.log("Image", image);
//   };
//   function onBeforeFileLoad(elem) {
//     if (elem.target.files[0].size > 2048000) {
//       notifyBigFile();
//       // alert("File is too big!");
//       elem.target.value = "";
//     }
//   }
//   const handleImageUpdateBtn = () => {
//     setOpenEditProfileImage(false);
//     setProfileImage(image);
//     notify();
//     navigate("/profile", { state: { image: image } });
//   };
//   const closeOpenEditProfileImage = () => {
//     setOpenEditProfileImage(false);
//   };
//   return (
//     <div className="">
//       {" "}
//       <Modal
//         open={openEditProfileImage}
//         onClose={closeOpenEditProfileImage}
//         contentLabel="Example Modal"
//         // overlayClassname="modal-overlay"
//         classNames={{
//           modal: "custommodal",
//           closeButton: "customButton",
//           closeIcon: "closeIcon",
//         }}
//       >
//         <div className="my-8 sm:m-5 md:m-8 flex flex-col items-center border bg-slate-100  ">
//           {/* <Avatar
//             width={avatarSize.width}
//             height={avatarSize.height}
//             src={image}
//             onCrop={onCrop}
//             label="Choose Image"
//             labelStyle={{ fontSize: "14px", margin: "15px" }}
//             onBeforeFileLoad={onBeforeFileLoad}
//             borderStyle={{ minWidth: "70%" }}
//             cropColor="green"
//             backgroundColor=""
//             exportQuality={1}
//             exportSize={1000}
//           /> */}
//           {/* <Avatar
//             width={avatarSize.width}
//             height={avatarSize.height}
//             src={null}
//             onCrop={onCrop}
//             label="Choose Image"
//             labelStyle={{ fontSize: "14px", margin: "15px" }}
//             onBeforeFileLoad={onBeforeFileLoad}
//             borderStyle={{ minWidth: "70%" }}
//             cropColor="green"
//             backgroundColor=""
//             exportQuality={1}
//             exportSize={1000}
//           /> */}

//           <Avatar
//             width={avatarSize.width}
//             height={avatarSize.height}
//             onCrop={onCrop}
//             src={image}
//             onClose={onClose}
//           />
//         </div>

//         <div className="flex justify-center">
//           {image && (
//             <button
//               className="border text-[14px] p-2 md:text-[18px] md:mx-20 mt-2 flex justify-center"
//               onClick={handleImageUpdateBtn}
//             >
//               <p className="text-white text-center">Update Image</p>
//             </button>
//           )}
//         </div>
//       </Modal>
//     </div>
//   );
// };

 import React, { useState, useEffect } from "react";
import "react-responsive-modal/styles.css";
import  Modal  from "react-responsive-modal";
import "./custom.css";
import Avatar from "react-avatar-edit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
// import logo from "../../images/admin-photo.png"
export const EditProfileImagePopup = ({
  setOpenEditProfileImage,
  openEditProfileImage,
  setProfileImage, profileImage
}) => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [avatarSize, setAvatarSize] = useState({ width: "160", height: "120" });

  // Function to update avatar size based on screen width
  const updateAvatarSize = () => {
    if (window.innerWidth > 768) {
      // setAvatarSize({ width: '500', height: '380' });
      setAvatarSize({ width: "500", height: "200" });
    } else {
      setAvatarSize({ width: "180", height: "150" });
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
      elem.target.value = "";
    }
  }
  const handleImageUpdateBtn = () => {
    setOpenEditProfileImage(false);
    setProfileImage(image);
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
        // overlayClassname="modal-overlay"
     
        classNames={{
          modal: "custommodal", closeButton:"customButton", closeIcon:'closeIconInProfileImagePopup'
        }}
      >
        <div className="my-8 sm:m-5 md:m-8 flex flex-col items-center border bg-slate-100  ">
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
              className="bg-[#068FFF] text-[#ffffff]  font-[500] inline-block rounded  hover:bg-[#4E4FEB] active:bg-[#2C3477]  focus:outline-none border text-[14px] p-2 bg-blue md:text-[18px] md:mx-20 flex justify-center"
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

