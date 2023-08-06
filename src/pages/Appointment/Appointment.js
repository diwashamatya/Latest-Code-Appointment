import React, { useState } from "react";
import Today from "../../shared/Table/Today";
import Upcoming from "../../shared/Table/Upcoming";
import Completed from "../../shared/Table/Completed";
import Total from "../../shared/Table/Total";
import Add from "../../assets/Add.svg";
import { AppProvider } from "../AppContext";
import AddAppointment from "../../components/AddAppointment/AddAppointment";
import EditAppointment from "../../components/EditAppointment/EditAppointment";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import clear from "../../assets/clear.svg";
import "./Home.css";
import Search_Magnifying_Glass from "../../assets/Search_Magnifying_Glass.svg";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import Date from "../../shared/Date/Date";
const closeIcon = (
  <svg
    width="29"
    height="29"
    viewBox="2 9 20 30"
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

function Appointment() {
  const [activeTab, setActiveTab] = useState("today");

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [editData, setEditData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [imageSearch, setImageSearch] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const onOpenModal2 = () => setOpen2(true);
  const onCloseModal2 = () => setOpen2(false);

  const onCloseModal3 = () => setOpen3(false);

  function openAddAppointment(data) {
    setEditData(data);

    setOpen3(true);
  }
  function handleCloseModal(data) {
    setOpen(data);
  }
  function handleSearchChange(event) {
    const searchText = event.target.value;
    setSearchTerm(searchText);
    setImageSearch(true);
    if (searchText === "") {
      setImageSearch(false);
    }
  }
  function clearSearch() {
    setSearchTerm("");
    setImageSearch(false);
  }
  function searchTermFromUpcoming(data) {
    setSearchTerm(data);
    setImageSearch(true);
    setShowSearch(true);
  }
  return (
    <AppProvider>
      <div className="flex  flex-col justify-center items-center px-4  w-[100%] ">
        <div className="flex w-[100%]  justify-between mt-1 mb-5 items-center">
          <h1 className="text-[23px]">Appointment</h1>
          {/* <button
          className="flex  items-center justify-center gap-2 border p-3 text-center text-[#93e4f8] text-inter text=[12px] font-[600] rounded-[3px]"
          onClick={onOpenModal}
        >
          <img className="  w-3 " src={Add} alt="add"></img>
          <div>Appointment</div>
        </button>
        <button
          onClick={onOpenModal}
          className="bg-[#f8f8f8] px-[11px] py-[8px] text-[#5B76FC] font-[600] shadow-md rounded-[4px]"
        >
          + Appointment
        </button> */}
          <button
            // onClick={onOpenModal2}
            onClick={onOpenModal}
            className="bg-[#f8f8f8] px-[11px] pt-[8px] pb-[10px] text-[#4bd3f5] font-[600] shadow-md rounded-[4px] hover:bg-[#ffffff77]"
          >
            + Appointment
          </button>
        </div>
        <div className="  w-full flex justify-between">
          <div className="flex md:items-center md:justify-center   sm:flex-row md:flex-row ">
            <div className="relative w-full md:w-auto">
              <button
                className={`border-r w-full  p-3 ${
                  activeTab === "today"
                    ? "border-gray-300  bg-gradient bg-gradient-to-b from-gray-100 via-white to-transparent shadow-inner inset-x-0 inset-y-2 bg-blue-200"
                    : ""
                } md:h-[50px] md:w-[100px] md:p-0`}
                style={
                  activeTab === "today"
                    ? {
                        borderWidth: "0.5px",
                        color: "#346AFF",
                        boxShadow: "0px 2px 5px 0px #D2F3FA",
                      }
                    : { boxShadow: "0px 2px 5px 0px #D2F3FA" }
                }
                onClick={() => setActiveTab("today")}
              >
                Today
              </button>
              <p
                className={`absolute top-1  font-[500]  right-2 text-[12px] ${
                  activeTab === "today" ? "text-[#346AFF] " : ""
                } hidden md:block `}
              >
                10
              </p>
            </div>

            <div className="relative w-full md:w-auto">
              <button
                className={`border-r w-[full] h-[full]  p-3  ${
                  activeTab === "upcoming"
                    ? "border-gray-300 bg-gradient bg-gradient-to-b from-gray-100 via-white to-transparent shadow-inner inset-x-0 inset-y-2 bg-blue-200"
                    : ""
                } md:h-[50px] md:w-[120px]`}
                style={
                  activeTab === "upcoming"
                    ? {
                        borderWidth: "0.5px",
                        color: "#346AFF",
                        boxShadow: "0px 2px 5px 0px #D2F3FA",
                      }
                    : { boxShadow: "0px 2px 5px 0px #D2F3FA" }
                }
                onClick={() => setActiveTab("upcoming")}
              >
                Upcoming
              </button>
              <p
                className={`absolute top-1  font-[500]  right-2 text-[12px] ${
                  activeTab === "upcoming" ? "text-[#346AFF] " : ""
                } hidden md:block`}
              >
                10
              </p>
            </div>
            <div className="relative w-full md:w-auto">
              <button
                className={`border-r p-3 ${
                  activeTab === "completed"
                    ? "border-gray-300 bg-gradient bg-gradient-to-b from-gray-100 via-white to-transparent shadow-inner inset-x-0 inset-y-2 bg-blue-200"
                    : ""
                } md:h-[50px] md:w-[130px]`}
                style={
                  activeTab === "completed"
                    ? {
                        borderWidth: "0.5px",
                        color: "#346AFF",
                        boxShadow: "0px 2px 5px 0px #D2F3FA",
                      }
                    : { boxShadow: "0px 2px 5px 0px #D2F3FA" }
                }
                onClick={() => setActiveTab("completed")}
              >
                Completed
              </button>
              <p
                className={`absolute top-1  font-[500]  right-2 text-[12px] ${
                  activeTab === "completed" ? "text-[#346AFF] " : ""
                } hidden md:block `}
              >
                10
              </p>
            </div>
            <div className="relative w-full md:w-auto">
              <button
                className={`border-r p-3 ${
                  activeTab === "total"
                    ? "border-gray-300 bg-gradient bg-gradient-to-b from-gray-100 via-white to-transparent shadow-inner inset-x-0 inset-y-2 bg-blue-200"
                    : ""
                } md:h-[50px] md:w-[100px]`}
                style={
                  activeTab === "total"
                    ? {
                        borderWidth: "0.5px",
                        color: "#346AFF",
                        boxShadow: "0px 2px 5px 0px #D2F3FA",
                      }
                    : { boxShadow: "0px 2px 5px 0px #D2F3FA" }
                }
                onClick={() => setActiveTab("total")}
              >
                Total
              </button>
              <p
                className={`absolute top-1  font-[500]  right-2 text-[12px] ${
                  activeTab === "total" ? "text-[#346AFF] " : ""
                } hidden md:block `}
              >
                10
              </p>
            </div>
          </div>
          {/* SEARCH */}
          {!showSearch ? (
            // <button
            //   className="w-[50px]  h-[42px]  flex justify-center border"
            //   onClick={() => setShowSearch(!showSearch)}
            // >
            //   <img
            //     className="w-[25px] rounded-[2px]"
            //     src={Search_Magnifying_Glass}
            //     alt="Search"
            //   ></img>
            // </button>
            <div className="bg-[#6fa6f94d] flex justify-center w-[50px] my-[3px] px-2 border rounded-sm ">
              <motion.div
                className=" flex justify-center  "
                animate={{
                  scale: 1,
                  rotate: 360,
                }}
              >
                <button className="" onClick={() => setShowSearch(!showSearch)}>
                  <img src={Search_Magnifying_Glass} alt="Search"></img>
                </button>
              </motion.div>
            </div>
          ) : (
            <div className="flex   justify-center items-center ">
              <div className="relative  flex justify-center  ">
                <input
                  className={`w-auto rounded-none rounded-s-sm border-[#6fa6f94d]    text-[16px] h-[39px]    pl-2 border-[0.5px]   focus:bg-white outline-none   placeholder:text-[#8B8989] bg-[#dceaff4d] shadow-shado2  placeholder:text-[16px]  md:w-[230px] md:h-[45px]  `}
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  placeholder="Search"
                  required
                />

                <div className="bg-[#6fa6f94d] rounded-s-none flex justify-center w-[50px] px-2 border rounded-sm ">
                  {imageSearch ? (
                    <motion.div
                      className=" flex justify-center  "
                      animate={{
                        scale: 1,
                        rotate: 180,
                      }}
                    >
                      <button onClick={clearSearch}>
                        <AiOutlineClose />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      className=" flex justify-center  "
                      animate={{
                        scale: 1,
                        rotate: 90,
                      }}
                    >
                      <button
                        className=""
                        onClick={() => setShowSearch(!showSearch)}
                      >
                        <img src={Search_Magnifying_Glass} alt="Search"></img>
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className=" mt-[10px] md:mt-[20px] w-full text-right">
          <Date />
        </div>
        <div className=" mt-2 w-[100%]">
          <div>
            {activeTab === "today" && <Today />}
            {activeTab === "upcoming" && (
              <Upcoming
                childAddAppointment={openAddAppointment}
                searchTermFromUpcoming={searchTermFromUpcoming}
                searchText={searchTerm}
              />
            )}
            {activeTab === "completed" && <Completed />}
            {activeTab === "total" && <Total />}
          </div>
        </div>

        <div>
          <Modal
            open={open2}
            onClose={onCloseModal2}
            center
            classNames={{
              modal: "customModal",
            }}
          ></Modal>
        </div>
        <div>
          <Modal
            open={open}
            onClose={onCloseModal}
            closeIcon={closeIcon}
            center
            classNames={{
              modal: "customModal",
            }}
          >
            <AddAppointment handleCloseModal={handleCloseModal} />
          </Modal>
        </div>
        <div>
          <Modal
            open={open3}
            onClose={onCloseModal3}
            closeIcon={closeIcon}
            center
            classNames={{
              modal: "customModal",
            }}
          >
            <EditAppointment
              editData={editData}
              handleCloseModal={handleCloseModal}
            />
          </Modal>
        </div>
      </div>
    </AppProvider>
  );
}

export default Appointment;
