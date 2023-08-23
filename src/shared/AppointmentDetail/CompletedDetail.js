import React from "react";
import AcceptTick from "../../assets/AcceptTick.svg";
import Reschedule from "../../assets/Reschedule.svg";
import Delete from "../../assets/delete.svg";

function Detail({ data }) {
  return (
    <div className="grid my-5 mx-5  grid-cols-2 gap-x-5 gap-y-4 ">
      <div className="text-center">
        <p className="font-bold text-slate-600">Name:</p>
        <p className="text-center">{data.name}</p>
      </div>
      <div className=" text-center">
        <p className="font-bold text-slate-600">Email:</p>
        <p className=" overflow-hidden break-words">{data.email}</p>
      </div>

      <div className="text-center">
        <p className="font-bold text-slate-600">Contact:</p>
        <p className=" overflow-hidden break-words">{data.contact}</p>
      </div>
      <div className="text-center">
        <p className="font-bold text-slate-600">Service:</p>
        <p className=" overflow-hidden break-words">{data.services}</p>
      </div>
      <div className="text-center">
        <p className="font-bold text-slate-600">Duration:</p>
        <p className=" text-indigo-500">{data.duration}</p>
      </div>
      <div className="text-center">
        <p className="font-bold text-slate-600">Date:</p>
        <p className=" text-indigo-500">{data.date}</p>
      </div>
      <div className="text-center">
        <p className="font-bold text-slate-600">Time:</p>
        <p className=" text-indigo-500">{data.time}</p>
      </div>
      <div className="text-center">
        <p className="font-bold text-slate-600">Status:</p>
        <p className=" text-green-500">{data.status}</p>
      </div>
      <div className="text-center">
        <p className="font-bold text-slate-600">Status:</p>
        <div className="flex  mt-1.5 gap-2 justify-center items-center">
          <button className="group relative">
            {data.status === "Pending" ? (
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
          <button className="group relative">
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
          <button className="group relative">
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
        </div>
      </div>
      <div className="text-center">
        <p className="font-bold text-slate-600">Reminder</p>
        <button> Notify</button>
      </div>
    </div>
  );
}

export default Detail;
