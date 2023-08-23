import React, { useState } from "react";
import vector from "../../assets/Vector.png";
import circle from "../../assets/circle.png";
import Modal from "react-responsive-modal";
import bell from "../../assets/bell.svg";
import accepted from "../../assets/accepted.svg";
import tick2 from "../../assets/tick2.svg";
import CompletedDetail from "../AppointmentDetail/CompletedDetail";
import Reschedule from "../../assets/Reschedule.svg";
import Delete from "../../assets/delete.svg";
import Arrow from "../../assets/Arrow_Right_SM.svg";
import Action from "../../assets/Action.svg";
import arrowbtns from "../../assets/ARROWBTNS.svg";
import { motion } from "framer-motion";
import { closeIcon, closeIcon2 } from "./UpcomingCombine";

export function Completed() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Diwash Raj Amatya",
      email: "Test@gmail.com",
      contact: "9842411394",
      date: "2023/Jul/06",
      services: "Legal Consultant",
      time: "6:00 AM",
      duration: "30 Min",
      color: "yellow",
      status: "Pending",
      reminder: "Notify",
      notified: false,
    },
    {
      id: 2,

      name: "Diwash Raj Amatya",
      email: "Test@gmail.com",
      contact: "9842411394",
      date: "2023/Jul/06",
      services: "Legal Consultant",
      time: "6:00 AM",
      duration: "30 Min",
      color: "yellow",
      status: "Pending",
      reminder: "Notify",
      notified: false,
    },
    {
      id: 3,

      name: "Diwash Raj Amatya",
      email: "Test@gmail.com",
      contact: "9842411394",
      date: "2023/Jul/06",
      services: "Legal Consultant",
      time: "6:00 AM",
      duration: "30 Min",
      color: "yellow",
      status: "Pending",
      reminder: "Notify",
      notified: false,
    },
    {
      id: 4,

      name: "Diwash Raj Amatya",
      email: "Test@gmail.com",
      contact: "9842411394",
      date: "2023/Jul/06",
      services: "Legal Consultant",
      time: "6:00 AM",
      duration: "30 Min",
      color: "yellow",
      status: "Pending",
      reminder: "Notify",
      notified: false,
    },
    // {
    //   id: 5,
    //   name: "Diwash Raj Amatya",
    //   email: "Test@gmail.com",
    //   contact: "9842411394",
    //   date: "2023/Jul/06",
    //   services: "Legal Consultant",
    //   time: "6:00AM",
    //   duration: "30 Min",
    //   color: "yellow",
    //   status: "Pending",
    //   reminder: "Notify",
    //   notified: false,
    // },
    // {
    //   id: 6,
    //   name: "Diwash Raj Amatya",
    //   email: "Test@gmail.com",
    //   contact: "9842411394",
    //   date: "2023/Jul/06",
    //   services: "Legal Consultant",
    //   time: "6:00AM",
    //   duration: "30 Min",
    //   color: "yellow",
    //   status: "Pending",
    //   reminder: "Notify",
    //   notified: false,
    // },
    // Add more data objects here as needed
  ]);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [detailOpen, setDetailOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleExpand = (itemId) => {
    setExpandedItem(itemId === expandedItem ? null : itemId);
  };

  const onOpenModal = () => {
    setOpen(true);
  };
  const onCloseModal = () => {
    setOpen(false);
  };
  const onOpenModal2 = () => {
    setOpen2(true);
  };
  const onCloseModal2 = () => {
    setOpen2(false);
  };

  const onOpenDetailModal = (id) => {
    console.log(id);
    setSelectedItemId(id);
    setDetailOpen(true);
  };
  const onCloseDetailModal = () => {
    setDetailOpen(false);
  };
  const handleNotifyClick = (itemId) => {
    // Find the item in the data array and update its notified state
    const updatedData = data.map((item) => {
      if (item.id === itemId) {
        return { ...item, notified: true };
      }
      return item;
    });

    // Update the data array with the updatedData
    setData(updatedData);
  };
  const handleCommit = (commitId) => {
    const updateStatus = data.map((item) => {
      if (item.id === commitId) {
        return {
          ...item,
          status: "Accepted",
          color: "green",
        };
      }
      return item;
    });
    setData(updateStatus);
  };
  const handleDelete = (itemId) => {
    const updatedData = data.filter((item) => item.id !== itemId);

    setData(updatedData);
  };
  return (
    <>
      <div className="border hidden md:block   w-full   p-2 ">
        <table className="w-[800px] md:w-full h-full">
          <thead className="bg-[#E2F2FA]">
            <tr className="h-[50px] text-[16px] md:text-[100%]">
              <th className="border font-normal w-[3%]">ID</th>
              <th className="border font-normal  w-[20%]">Name</th>
              <th className="border  font-normal w-[15%]">Services</th>
              <th className="border font-normal w-[10%]">Time</th>
              <th className="border font-normal w-[10%]">Date</th>
              <th className="border  font-normal w-[10%]">Status</th>
              <th className="border font-normal w-[10%]">Action</th>
              <th className="border font-normal w-[15%]">Reminder</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border h-[50%] text-[16px] md:text-[16px] md:h-[60px]"
              >
                <td className="border text-center w-[5%] md:w-[3%]">
                  {item.id}
                </td>
                <td className="border text-center w-[25%] md:w-[20%]">
                  <button onClick={() => onOpenDetailModal(item.id)}>
                    {item.name}
                  </button>
                </td>
                <td className="border text-center w-[20%] md:w-[15%]">
                  {item.services}
                </td>
                <td className="border  text-center  w-[15%] md:w-[10%]">
                  {item.time}
                </td>
                <td className="border   text-center w-[15%] md:w-[10%]">
                  {item.date}
                </td>
                <td className="border  text-center  w-[10%] md:w-[10%]">
                  <div className="md:flex md:justify-evenly md:gap-2  md:items-center  ">
                    <div className="flex justify-center items-centers">
                      {!item.color === "yellow" ? (
                        <img className="w-2" src={circle} alt="yellow"></img>
                      ) : (
                        <img className="w-2" src={accepted} alt="green"></img>
                      )}
                    </div>
                    <div className="hidden md:block">
                      {/* {item.status} */}
                      Accepted
                    </div>
                  </div>
                </td>
                <td className="  flex gap-2 flex-col md:flex-row justify-center items-center    md:h-[60px] ">
                  <button
                    onClick={() => handleCommit(item.id)}
                    className="group relative"
                  >
                    {/* {item.status === "Pending" ? (
                    <>
                      <p className="  hidden md:hidden md:group-hover:block absolute top-0 left-0 p-1 rounded mt-8  bg-white  shadow">
                        Accept
                      </p>
                      <img
                        className="md:hidden w-[13px] h-[15px]"
                        src={AcceptTick}
                        alt="AcceptTick"
                      ></img>
                      <div className=" hidden md:block">
                        <svg
                          width="17"
                          height="12"
                          viewBox="0 0 17 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 5.94979L5.94975 10.8995L15.8482 1"
                            stroke="#4EAD07"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </>
                  ) : (
                    <>
                      <svg
                        width="17"
                        height="12"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 5.94979L5.98139 10.8995L15.9431 1"
                          stroke="#4EAD07"
                          stroke-opacity="0.43"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p className=" hidden md:hidden md:group-hover:block absolute top-0 left-0 p-1 rounded mt-8  bg-white shadow">
                        Accepted
                      </p>
                    </>
                  )} */}
                  </button>
                  <button onClick={onOpenModal2} className="group relative">
                    <img
                      className="md:hidden w-[13px] h-[15px]"
                      src={Reschedule}
                      alt="reschedule"
                    ></img>
                    <div className=" hidden md:block">
                      <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.91788 3H4.11077C2.98043 3 2.41485 3 1.98312 3.21799C1.60335 3.40973 1.29482 3.71547 1.10133 4.0918C0.881348 4.51962 0.881348 5.08009 0.881348 6.2002V7M4.91788 3H12.9909M4.91788 3V1M12.9909 3H13.7984C14.9288 3 15.4932 3 15.9249 3.21799C16.3046 3.40973 16.6142 3.71547 16.8077 4.0918C17.0275 4.5192 17.0275 5.07899 17.0275 6.19691V7M12.9909 3V1M0.881348 7V15.8002C0.881348 16.9203 0.881348 17.4801 1.10133 17.9079C1.29482 18.2842 1.60335 18.5905 1.98312 18.7822C2.41442 19 2.97933 19 4.10745 19H13.8014C14.9295 19 15.4936 19 15.9249 18.7822C16.3046 18.5905 16.6142 18.2842 16.8077 17.9079C17.0275 17.4805 17.0275 16.9215 17.0275 15.8036V7M0.881348 7H17.0275M12.9909 15H12.993L12.9929 15.002L12.9909 15.002V15ZM8.95441 15H8.95642L8.95638 15.002L8.95441 15.002V15ZM4.91788 15H4.9199L4.91985 15.002L4.91788 15.002V15ZM12.9929 11V11.002L12.9909 11.002V11H12.9929ZM8.95441 11H8.95642L8.95638 11.002L8.95441 11.002V11ZM4.91788 11H4.9199L4.91985 11.002L4.91788 11.002V11Z"
                          stroke="#0754AD"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>

                    <p className=" hidden md:hidden md:group-hover:block  absolute top-0 left-0 p-1 rounded mt-8  bg-white shadow">
                      Reschedule
                    </p>
                  </button>
                  <button onClick={onOpenModal} className="group relative">
                    <img
                      className="md:hidden w-[13px] h-[15px]"
                      src={Delete}
                      alt="Delete"
                    ></img>
                    <div className=" hidden md:block">
                      <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 8V15M7 8V15M3 4V15.8C3 16.9201 3 17.4798 3.21799 17.9076C3.40973 18.2839 3.71547 18.5905 4.0918 18.7822C4.5192 19 5.07899 19 6.19691 19H11.8031C12.921 19 13.48 19 13.9074 18.7822C14.2837 18.5905 14.5905 18.2839 14.7822 17.9076C15 17.4802 15 16.921 15 15.8031V4M3 4H5M3 4H1M5 4H13M5 4C5 3.06812 5 2.60241 5.15224 2.23486C5.35523 1.74481 5.74432 1.35523 6.23438 1.15224C6.60192 1 7.06812 1 8 1H10C10.9319 1 11.3978 1 11.7654 1.15224C12.2554 1.35523 12.6447 1.74481 12.8477 2.23486C12.9999 2.6024 13 3.06812 13 4M13 4H15M15 4H17"
                          stroke="#AD3307"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>

                    <p className=" hidden md:hidden md:group-hover:blockabsolute top-0 left-0  p-1 rounded mt-9  bg-white  shadow">
                      Delete
                    </p>
                  </button>
                  <Modal
                    open={open}
                    onClose={onCloseModal}
                    closeIcon={closeIcon}
                    classNames={{
                      overlay: "customOverlay4",
                      modal: "customModal4",
                      closeButton: "customButton",
                    }}
                    center
                  >
                    <div className=" w-full sm:w-[270px] md:w-[300px] p-2 md:p-0 flex flex-col justify-center items-start gap-8">
                      <div>
                        <p className="text-[15px]   text-left  tracking-wide w-[100%]  font-roboto ">
                          Are you sure want to delete?
                        </p>
                      </div>

                      <div className=" w-full flex gap-4  justify-end">
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="bg-[rgba(220, 234, 255, 0.30)] text-[#0b1a1e] rounded hover:bg-[#DCEAFF4D]  focus:outline-none px-4 py-1"
                          style={{
                            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 2px",
                          }}
                        >
                          Yes
                        </button>
                        <button
                          onClick={onCloseModal}
                          className="text-[#383535] rounded bg-[#ede8f2] hover:bg-[#f1f1f1] focus:outline-none px-4 py-1"
                          style={{
                            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 2px",
                          }}
                        >
                          No
                        </button>
                      </div>
                    </div>
                  </Modal>
                </td>
                <td className=" border">
                  <div className="flex justify-center">
                    {!item.notified ? (
                      <button
                        className="flex p-2 border  bg-[#C3ECF4] md:px-3 md:gap-1 text-[15px] justify-center items-center rounded-sm md:p-1"
                        onClick={() => handleNotifyClick(item.id)}
                      >
                        <span className="hidden  md:inline">
                          {item.reminder}
                        </span>
                        <img className="w-4 " src={bell} alt="notification" />
                      </button>
                    ) : (
                      <button className="flex gap-1 px-2 bg-[#EDEDED] text-[#0038FF] text-[14px] justify-center rounded-sm items-center p-1">
                        <span className="hidden md:inline">Notified</span>
                        <img className="w-3" src={vector} alt="notified" />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Modal
          open={open2}
          onClose={onCloseModal2}
          closeIcon={closeIcon}
          classNames={{
            overlay: "customOverlay4",
            modal: "customModal2",
            closeButton: "customButton",
          }}
          center
        >
          <div className=" w-[full] md:w-[300px]">
            <div className=" h-[50px] flex flex-col items-center justify-center bg-[#aabef5]">
              <p className=" w-full text-center text-[#1a1a1a] text-[17px] font-sans tracking-[1.3px] font-[400]">
                Reschedule
              </p>
              <div className=" w-full relative">
                <img
                  src={tick2}
                  className="w-[30px] h-[30px] absolute bottom-[-30px]  left-1/2 transform -translate-x-1/2"
                  alt=""
                />
              </div>
            </div>

            <div className="m-5  p-3 text-[14px] text-center ">
              Reschedule message has been sent. Thanks
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-[#95AEF4] hover:bg-[#7f9ff5] text-[16px] text-white font-[500] px-[18px] py-[5px] mb-5 rounded-[5px] shadow-md "
                onClick={onCloseModal2}
              >
                OK
              </button>
            </div>
          </div>
        </Modal>

        <Modal
          open={detailOpen}
          onClose={onCloseDetailModal}
          closeIcon={closeIcon2}
          classNames={{
            overlay: "customOverlayCompleted",
            modal: "customModalCompleted",
            closeButton: "customButton2",
          }}
          center
        >
          {selectedItemId !== null && (
            <>
              <div className=" py-2 md:py-3   relative flex justify-center items-center bg-[#8399d6]">
                <p className=" font-[600] font-sans text-[white] w-full text-center text-[20px] tracking-wide ">
                  Appointment
                </p>
              </div>

              <CompletedDetail
                key={selectedItemId}
                data={data.find((item) => item.id === selectedItemId)}
              />
              <div className="group   ">
                <button
                  type="button"
                  onClick={() => {
                    onCloseDetailModal();
                  }}
                  className="absolute   top-[77%] md:top-[75%] text-[#6262f5] right-[15%] md:right-[13%] text-center text-[11px] hover:text-[#4949eb] "
                >
                  {/* See all history */}{" "}
                  <img className="w-30px" src={Arrow} alt="arrow"></img>
                </button>
                <p className=" hidden text-[14px] md:hidden md:group-hover:block  absolute  top-[79%] md:top-[60%] right-[15%] md:right-[3%]  p-1 rounded mt-6 ml-6 bg-white shadow">
                  See User History
                </p>
              </div>

              <div className="font-roboto mt-3 mb-6 flex justify-end gap-3 mr-10">
                <button
                  type="button"
                  // className="border-none text-white bg-[#517EC1] hover:bg-[#4172bb] rounded-md"
                  // style={{
                  //   padding: "8px 17px 10px 18px",
                  //   boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                  // }}
                  className="bg-[#5C8CBC] border-none  text-[#ffffff] text-[16px] rounded  hover:bg-[#447fba]  font-[600]    focus:outline-none px-4 py-1"
                  style={{
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                    fontFamily:
                      "Canva Sans,Noto Sans Variable,Noto Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif",
                  }}
                >
                  Edit
                </button>

                <button
                  type="button"
                  onClick={onCloseDetailModal}
                  className="bg-[rgba(220, 234, 255, 0.30)] border-[#9681eba0] border-[1px] text-[16px] text-[#0b1a1e] rounded hover:bg-[#ffffff]  font-[600]  focus:outline-none px-4 py-2"
                  style={{
                    // boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                    fontFamily:
                      "Canva Sans,Noto Sans Variable,Noto Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif",
                  }}
                >
                  Cancel
                </button>
              </div>
            </>
          )}
        </Modal>
      </div>

      <h6 className="font-bold md:hidden  mb-2 text-center text-[20px]">
        TODAY
      </h6>

      {/* <div className=" md:hidden    overflow-y-auto h-[400px]">
              {data.map((item) => (
                <div
                  className=" border-b  flex  p-4 justify-center gap-3 items-center"
                  key={item.id}
                >
                  <div className=" relative  w-full">
                    <div className="flex absolute bottom-1 left-1 text-[15px] font-bold rounded-full bg-indigo-400 text-white w-8 h-8 justify-center items-center">
                      {item.id}
                    </div>
                    <div className="  p-2 flex flex-col border  rounded-[0.3rem]  justify-between items-center gap-3">
                      <p
                        onClick={() => onOpenDetailModal(item.id)}
                        className="text-[15px] font-semibold"
                      >
                        {item.name}
                      </p>
                      <p className="text-[15px] text-slate-700  ">{item.services}</p>
                      <p className="text-[15px] font-semibold text-indigo-600">
                        {item.time}
                      </p>
                      <p className="text-[15px] text-slate-700  ">{item.status}</p>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <button
                          onClick={() => toggleExpand(item.id)}
                          className="  focus:outline-none"
                        >
                          <img
                            className="w-[70px]  bottom-0 right-0 p-0 m-0  absolute "
                            src={Action}
                            alt="action"
                          ></img>
                        </button>
                      </motion.div>
      
                      {expandedItem === item.id && (
                        <div
                          className="absolute  bottom-0 right-0 h-[120px] w-[125px]  "
                          style={{
                            backgroundImage: `url('${arrowbtns}')`,
                            backgroundPosition: "right bottom",
                            backgroundRepeat: "no-repeat",
                          }}
                        >
                          <div className=" relative">
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            >
                              {!item.notified ? (
                                <button
                                  className="flex   absolute right-2 top-6 rounded-2xl p-1.5  bg-[#ffffff] md:px-3 md:gap-1 text-[15px] justify-center items-center md:p-1"
                                  onClick={() => handleNotifyClick(item.id)}
                                >
                                  <img
                                    className="w-4 "
                                    src={bell}
                                    alt="notification"
                                  />
                                </button>
                              ) : (
                                <button className="flex  absolute right-1 top-6 bg-white rounded-2xl gap-1 px-2 py-2   text-[14px] justify-center items-center md:p-1">
                                  <img className="w-4" src={vector} alt="notified" />
                                </button>
                              )}
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            >
                              <button className="group  absolute  right-[2.5rem] top-12 bg-white rounded-2xl p-2 ">
                                {item.status === "Pending" ? (
                                  <>
                                    <div className="">
                                      <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 17 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M1 5.94979L5.94975 10.8995L15.8482 1"
                                          stroke="#4EAD07"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <svg
                                      width="17"
                                      height="12"
                                      viewBox="0 0 17 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1 5.94979L5.98139 10.8995L15.9431 1"
                                        stroke="#4EAD07"
                                        stroke-opacity="0.43"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                    </svg>
                                  </>
                                )}
                              </button>
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            >
                              <button className="group absolute bg-white p-1.5 rounded-2xl top-[5.2rem] right-[4rem]">
                                <div className=" ">
                                  <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 18 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M11 8V15M7 8V15M3 4V15.8C3 16.9201 3 17.4798 3.21799 17.9076C3.40973 18.2839 3.71547 18.5905 4.0918 18.7822C4.5192 19 5.07899 19 6.19691 19H11.8031C12.921 19 13.48 19 13.9074 18.7822C14.2837 18.5905 14.5905 18.2839 14.7822 17.9076C15 17.4802 15 16.921 15 15.8031V4M3 4H5M3 4H1M5 4H13M5 4C5 3.06812 5 2.60241 5.15224 2.23486C5.35523 1.74481 5.74432 1.35523 6.23438 1.15224C6.60192 1 7.06812 1 8 1H10C10.9319 1 11.3978 1 11.7654 1.15224C12.2554 1.35523 12.6447 1.74481 12.8477 2.23486C12.9999 2.6024 13 3.06812 13 4M13 4H15M15 4H17"
                                      stroke="#AD3307"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                </div>
                              </button>
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            >
                              <button
                                onClick={() => setExpandedItem(false)}
                                className=" absolute right-[1rem] top-[5rem]"
                              >
                                <svg
                                  width="22"
                                  height="22"
                                  viewBox="0 0 39 39"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17.6072 25.7184L25.8266 25.5032M25.8266 25.5032L25.6113 17.2838M25.8266 25.5032L13.1746 13.4969M1.00692 19.9843C1.27438 30.1981 9.77109 38.2612 19.9849 37.9937C30.1986 37.7262 38.2617 29.2295 37.9942 19.0158C37.7268 8.802 29.2301 0.738925 19.0163 1.00638C8.80254 1.27384 0.739463 9.77055 1.00692 19.9843Z"
                                    stroke="white"
                                    stroke-width="4"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </button>
                            </motion.div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
      <div className=" md:hidden    overflow-y-auto h-[400px]">
        {data.map((item) => (
          <div
            className=" border-b  flex px-2  py-4 justify-center gap-3 items-center"
            key={item.id}
          >
            <div className=" relative  w-full">
              <div className="flex absolute top-2 right-2 text-[15px] font-bold rounded-full bg-indigo-400 text-white w-8 h-8 justify-center items-center">
                {item.id}
              </div>
              <div className=" bg-[#f8f8f8]   p-2 flex flex-col border  rounded-[0.3rem]  justify-between gap-3">
                <p
                  onClick={() => onOpenDetailModal(item.id)}
                  className="text-[16px] font-semibold "
                >
                  {item.name}
                </p>
                <div className="flex  justify-start items-center">
                  <p className=" px-2 pb-0.5 rounded-md border-none bg-[#4FC0D0] font-bold text-[15px] text-[white]  ">
                    {item.services}
                  </p>
                </div>
                <div className="flex justify-start items-center">
                  <p
                    className={`px-2 pb-0.5 rounded-md border-none ${
                      item.status === "Pending"
                        ? "bg-[#FFA41B]"
                        : "bg-[#63c046]"
                    } font-bold text-[15px] text-white`}
                  >
                    {item.status}
                  </p>
                </div>
                <div className="flex justify-start items-center">
                  <p className=" px-2 pb-0.5 rounded-md border-none bg-[#8062D6] font-bold text-[15px] text-[white]  ">
                    {item.time}
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="  focus:outline-none"
                  >
                    <img
                      className="w-[70px]  bottom-0 right-0 p-0 m-0  absolute "
                      src={Action}
                      alt="action"
                    ></img>
                  </button>
                </motion.div>

                {expandedItem === item.id && (
                  <div
                    className="absolute border-none  bottom-0 right-0 h-[120px] w-[125px]  "
                    style={{
                      backgroundImage: `url('${arrowbtns}')`,
                      backgroundPosition: "right bottom",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className=" relative">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {!item.notified ? (
                          <button
                            className="flex  border-none  absolute right-2 top-6 rounded-2xl p-1.5  bg-[#ffffff] md:px-3 md:gap-1 text-[15px] justify-center items-center md:p-1"
                            onClick={() => handleNotifyClick(item.id)}
                          >
                            <img
                              className="w-4 "
                              src={bell}
                              alt="notification"
                            />
                          </button>
                        ) : (
                          <button className="flex border-none   absolute right-1 top-6 bg-white rounded-2xl gap-1 px-2 py-2   text-[14px] justify-center items-center md:p-1">
                            <img className="w-4" src={vector} alt="notified" />
                          </button>
                        )}
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <button
                          onClick={() => handleCommit(item.id)}
                          className="group border-none   absolute  right-[2.5rem] top-12 bg-white rounded-2xl p-2 "
                        >
                          {item.status === "Pending" ? (
                            <>
                              <div className="">
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 17 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1 5.94979L5.94975 10.8995L15.8482 1"
                                    stroke="#4EAD07"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </>
                          ) : (
                            <>
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 17 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 5.94979L5.98139 10.8995L15.9431 1"
                                  stroke="#4EAD07"
                                  stroke-opacity="0.43"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </>
                          )}
                        </button>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <button
                          onClick={onOpenModal}
                          className="group  border-none  absolute bg-white p-1.5 rounded-2xl top-[5.2rem] right-[4rem]"
                        >
                          <div className=" ">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 18 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11 8V15M7 8V15M3 4V15.8C3 16.9201 3 17.4798 3.21799 17.9076C3.40973 18.2839 3.71547 18.5905 4.0918 18.7822C4.5192 19 5.07899 19 6.19691 19H11.8031C12.921 19 13.48 19 13.9074 18.7822C14.2837 18.5905 14.5905 18.2839 14.7822 17.9076C15 17.4802 15 16.921 15 15.8031V4M3 4H5M3 4H1M5 4H13M5 4C5 3.06812 5 2.60241 5.15224 2.23486C5.35523 1.74481 5.74432 1.35523 6.23438 1.15224C6.60192 1 7.06812 1 8 1H10C10.9319 1 11.3978 1 11.7654 1.15224C12.2554 1.35523 12.6447 1.74481 12.8477 2.23486C12.9999 2.6024 13 3.06812 13 4M13 4H15M15 4H17"
                                stroke="#AD3307"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        </button>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <button
                          onClick={() => setExpandedItem(false)}
                          className=" absolute  border-none  right-[1rem] top-[5rem]"
                        >
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 39 39"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.6072 25.7184L25.8266 25.5032M25.8266 25.5032L25.6113 17.2838M25.8266 25.5032L13.1746 13.4969M1.00692 19.9843C1.27438 30.1981 9.77109 38.2612 19.9849 37.9937C30.1986 37.7262 38.2617 29.2295 37.9942 19.0158C37.7268 8.802 29.2301 0.738925 19.0163 1.00638C8.80254 1.27384 0.739463 9.77055 1.00692 19.9843Z"
                              stroke="white"
                              stroke-width="4"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                      </motion.div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
