import React, { useState } from "react";
import vector from "../../assets/Vector.png";
import circle from "../../assets/circle.png";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./css/Upcoming.css";
import bell from "../../assets/bell.svg";
import accepted from "../../assets/accepted.svg";
import tick2 from "../../assets/tick2.svg";
import Detail from "../AppointmentDetail/Detail";
import AcceptTick from "../../assets/AcceptTick.svg";
import Reschedule from "../../assets/Reschedule.svg";
import Delete from "../../assets/delete.svg";

const closeIcon = (
  <svg
    width="28"
    height="28"
    viewBox="0 10 20 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.3331 21.3331L15.9999 15.9999M15.9999 15.9999L10.6665 10.6665M15.9999 15.9999L21.3332 10.6665M15.9999 15.9999L10.6665 21.3332"
      stroke="black"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const closeIcon2 = (
  <svg
    width="11"
    height="11"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.6666 11.6666L6.33335 6.33335M6.33335 6.33335L1 1M6.33335 6.33335L11.6667 1M6.33335 6.33335L1 11.6667"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
function Total() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Diwash Raj Amatya",
      email: "Test@gmail.com",
      contact: "9842411394",
      date: "2023/Jul/06",
      services: "Legal Consultant",
      time: "6:00AM",
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
      time: "6:00AM",
      duration: "30 Min",
      color: "yellow",
      status: "Pending",
      reminder: "Notify",
      notified: false,
    },
    // Add more data objects here as needed
  ]);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

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
    <div className="border w-full overflow-x-auto p-2 ">
      <table className="w-[800px] md:w-full h-full">
        <thead className="bg-[#E2F2FA]">
          <tr className="h-[50px] text-[16px] md:text-[100%]">
            <th className="border font-normal w-[3%]">ID</th>
            <th className="border font-normal  w-[20%]">Name</th>
            <th className="border  font-normal w-[15%]">Services</th>
            <th className="border font-normal w-[10%]">Time</th>
            <th className="border font-normal w-[10%]">Duration</th>
            <th className="border  font-normal w-[10%]">Status</th>
            <th className="border font-normal w-[15%]">Action</th>
            <th className="border font-normal w-[15%]">Reminder</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="border h-[50%] text-[16px] md:text-[16px] md:h-[60px]"
            >
              <td className="border text-center w-[5%] md:w-[3%]">{item.id}</td>
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
                {item.duration}
              </td>
              <td className="border  text-center  w-[10%] md:w-[10%]">
                <div className="md:flex md:justify-evenly md:gap-2  md:items-center  ">
                  <div className="flex justify-center items-centers">
                    {item.color === "yellow" ? (
                      <img className="w-2" src={circle} alt="yellow"></img>
                    ) : (
                      <img className="w-2" src={accepted} alt="green"></img>
                    )}
                  </div>
                  <div className="hidden md:block">{item.status}</div>
                </div>
              </td>
              <td className="  flex gap-2 flex-col md:flex-row justify-center items-center    md:h-[60px] ">
                <button
                  onClick={() => handleCommit(item.id)}
                  className="group relative"
                >
                  {item.status === "Pending" ? (
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
                  )}
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
                  className="hello"
                  open={open}
                  onClose={onCloseModal}
                  closeIcon={closeIcon}
                  classNames={{
                    overlay: "customOverlay",
                    modal: "customModal",
                    closeButton: "customButton",
                  }}
                  center
                >
                  <div className=" w-[300px]  flex flex-col justify-center items-start gap-8">
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
                      <span className="hidden  md:inline">{item.reminder}</span>
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
          overlay: "customOverlay",
          modal: "customModal2",
          closeButton: "customButton",
        }}
        center
      >
        <div className="bg-[#d61818] w-[full] md:w-[300px]">
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
          overlay: "customOverlay",
          modal: "customModal3",
          closeButton: "customButton2",
        }}
        center
      >
        {selectedItemId !== null && (
          <>
            <div className="h-[50px] relative flex justify-center items-center bg-[#8399d6]">
              <p className=" font-[500] font-serif text-[white] w-full text-center text-[20px] tracking-wider ">
                Appointment
              </p>
            </div>

            <Detail
              key={selectedItemId}
              data={data.find((item) => item.id === selectedItemId)}
            />
            <button className="absolute top-[75%] text-[#6262f5] right-[13%] text-center text-[11px] hover:text-[#4949eb] ">
              See all history
            </button>

            <div className=" mt-3 mb-5 gap-[90px]  flex justify-evenly">
              <button
                type="button"
                // className="border-none text-white bg-[#517EC1] hover:bg-[#4172bb] rounded-md"
                // style={{
                //   padding: "8px 17px 10px 18px",
                //   boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                // }}
                className="bg-[#C5DFF8] hover:bg-[#d9e8f5]  text-[#0b1a1e] text-[17px] rounded   font-serif focus:outline-none px-4 py-1"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                }}
              >
                Edit
              </button>
              <button
                type="button"
                onClick={onCloseDetailModal}
                className="bg-[rgba(220, 234, 255, 0.30)] text-[17px] text-[#0b1a1e] rounded hover:bg-[#ffffff]  font-serif focus:outline-none px-4 py-2"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                }}
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
}

export default Total;
