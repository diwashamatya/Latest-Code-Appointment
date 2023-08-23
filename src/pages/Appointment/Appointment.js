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
import UpcomingCombine from "../../shared/Table/UpcomingCombine";
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
        <div className="flex w-[100%]   justify-between mt-1 mb-5 items-center">
          <h1 className="text-[23px] overflow-hidden break-words ">
            Appointment
          </h1>
          {/* <button
            className="flex  items-center justify-center gap-2 border p-3 text-center text-[#93e4f8] text-inter text=[12px] font-[600] rounded-[3px]"
            onClick={onOpenModal}
          >
            <img className="  w-3 " src={Add} alt="add"></img>
            <div>Appointment</div>
          </button> */}
          <button
            onClick={onOpenModal}
            className="bg-[#f8f8f8] hidden md:flex px-2 py-2 md:px-[11px] md:py-[8px] text-[#5B76FC] font-[600] shadow-md md:rounded-[4px]"
          >
            <span className=""> + Appointment</span>
          </button>
          <button
            style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
            onClick={onOpenModal}
            className="  relative  cursor-none md:hidden bg-[#53b2f1] hover:bg-[#69bdf5] h-[40px] w-[40px] p-2 rounded-full "
          >
            <svg
              className="absolute top-3.5 left-[0.81rem] "
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7H7M7 7H13M7 7V13M7 7V1"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          {/* <button
            // onClick={onOpenModal2}
            onClick={onOpenModal}
            className="bg-[#f8f8f8] px-[11px] pt-[8px] pb-[10px] text-[#4bd3f5] font-[600] shadow-md rounded-[4px] hover:bg-[#ffffff77]"
          >
            + Appointment
          </button> */}
        </div>

        <div className="w-full flex flex-col  justify-center  items-start gap-2 md:gap-0 md:flex-row md:justify-between">
          <div className="flex   w-full md:w-auto md:items-center md:justify-center sm:flex-row md:flex-row ">
            <div className="relative  w-auto">
              <button
                className={`border-r w-[100%] h-[100%] py-3  md:py-3 md:px-3 ${
                  activeTab === "today"
                    ? "border-gray-300  px-[0.5rem]   bg-gradient bg-gradient-to-b from-gray-100 via-white to-transparent shadow-inner inset-x-0 inset-y-2 bg-blue-200"
                    : " px-[0.3rem]  "
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
                <span className="text-sm  overflow-hidden break-words  md:text-base">
                  Today
                </span>
              </button>
              <p
                className={`absolute top-1 font-[500] right-2 text-[12px] ${
                  activeTab === "today" ? "text-[#346AFF] " : ""
                } hidden md:block `}
              >
                10
              </p>
            </div>

            <div className="relative w-auto">
              <button
                className={`border-r w-[100%] h-[100%] py-3 md:py-3 md:px-3 ${
                  activeTab === "upcoming"
                    ? "border-gray-300  px-[0.5rem]  bg-gradient bg-gradient-to-b from-gray-100 via-white to-transparent shadow-inner inset-x-0 inset-y-2 bg-blue-200"
                    : " px-[0.3rem] "
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
                <span className="text-sm  overflow-hidden break-words  md:text-base">
                  Upcoming
                </span>
              </button>
              <p
                className={`absolute top-1 font-[500] right-2 text-[12px] ${
                  activeTab === "upcoming" ? "text-[#346AFF] " : ""
                } hidden md:block`}
              >
                10
              </p>
            </div>
            <div className="relative w-auto">
              <button
                className={`border-r w-[100%] h-[100%] py-3  md:py-3 md:px-3 ${
                  activeTab === "completed"
                    ? "border-gray-300 px-[0.5rem] bg-gradient bg-gradient-to-b from-gray-100 via-white to-transparent shadow-inner inset-x-0 inset-y-2 bg-blue-200"
                    : "px-[0.3rem]"
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
                <span className="text-sm  overflow-hidden break-words  md:text-base">
                  Completed
                </span>
              </button>
              <p
                className={`absolute top-1 font-[500] right-2 text-[12px] ${
                  activeTab === "completed" ? "text-[#346AFF] " : ""
                } hidden md:block `}
              >
                10
              </p>
            </div>
            <div className="relative  w-auto">
              <button
                className={`border-r w-[100%] h-[100%] py-3  md:py-3 md:px-3 ${
                  activeTab === "total"
                    ? "border-gray-300 px-[0.5rem] bg-gradient bg-gradient-to-b from-gray-100 via-white to-transparent shadow-inner inset-x-0 inset-y-2 bg-blue-200"
                    : " px-[0.3rem]"
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
                <span className="text-sm overflow-hidden break-words md:text-base">
                  Total
                </span>
              </button>
              <p
                className={`absolute top-1 font-[500] right-2 text-[12px] ${
                  activeTab === "total" ? "text-[#346AFF] " : ""
                } hidden md:block `}
              >
                10
              </p>
            </div>
          </div>
          {/* SEARCH */}

          {!showSearch ? (
            <div className="flex  justify-center items-center  h-[49px] ">
              <div className="bg-[#6fa6f94d] flex justify-center md:justify-center py-2  w-[40px] md:w-[50px] border rounded-sm">
                <motion.div
                  className="flex justify-center"
                  animate={{
                    scale: 1,
                    rotate: 360,
                  }}
                >
                  <button
                    className=""
                    onClick={() => setShowSearch(!showSearch)}
                  >
                    <img src={Search_Magnifying_Glass} alt="Search" />
                  </button>
                </motion.div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center h-[49px]   items-center">
              <div className="relative flex justify-center">
                <input
                  className={`w-[80%] rounded-none rounded-s-sm border-[#6fa6f94d] text-[16px] h-[39px] pl-2 border-[0.5px] focus:bg-white focus:border-[#6fa6f94d] focus:border-l-[0.5px] focus:border-t-[0.5px]  focus:border-b-[0.5px] focus:border-r-[0px] placeholder:text-[#8B8989] bg-[#dceaff4d] shadow-shado2 placeholder:text-[16px] md:w-[230px] md:h-[45px]`}
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  placeholder="Search"
                  required
                />
                <div className="bg-[white] rounded-s-none flex justify-center w-[50px] px-2 border-r border-t border-b rounded-sm">
                  {imageSearch ? (
                    <motion.div
                      className="flex justify-center"
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
                      className="flex justify-center"
                      animate={{
                        scale: 1,
                        rotate: 90,
                      }}
                    >
                      <button
                        className=""
                        onClick={() => setShowSearch(!showSearch)}
                      >
                        <img src={Search_Magnifying_Glass} alt="Search" />
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className=" mt-[10px] md:mt-[20px] w-full  text-right">
          <Date />
        </div>
        {/* button Routing */}
        <div className=" mt-2 w-[100%]">
          <div>
            {activeTab === "today" && <Today />}
            {/* {activeTab === "today" && <UpcomingCombine />} */}
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

        
        {/* AddAppointment */}
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
        {/* Edit Appointment */}
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
