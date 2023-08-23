import React from "react";

function Detail({ data }) {
  return (
    // <div className="grid border grid-cols-2 p-10 gap-2.5">
    //   <div className="">
    //     <p className="font-bold text-blue-600">Name:</p>
    //     <p className="font-bold text-blue-600">Email:</p>
    //     <p className="font-bold text-blue-600">Contact:</p>
    //     <p className="font-bold text-blue-600">Service:</p>
    //     <p className="font-bold text-blue-600">Duration:</p>
    //     <p className="font-bold text-blue-600">Date:</p>
    //     <p className="font-bold text-blue-600">Time:</p>
    //     <p className="font-bold text-blue-600">Status:</p>
    //   </div>
    //   <div>
    //     <p className="text-start">{data.name}</p>
    //     <p className="text-start text-green-500">{data.email}</p>
    //     <p className="text-start text-yellow-500">{data.contact}</p>
    //     <p className="text-start text-purple-500">{data.services}</p>
    //     <p className="text-start text-red-500">{data.duration}</p>
    //     <p className="text-start text-indigo-500">{data.date}</p>
    //     <p className="text-start text-pink-500">{data.time}</p>
    //     <p className="text-start text-gray-500">{data.status}</p>
    //   </div>
    // </div>
    // <div className="grid  grid-cols-2 p-10 gap-2.5">
    //   <div className="">
    //     <p className="font-bold text-slate-600">Name:</p>
    //     <p className="text-start">{data.name}</p>
    //   </div>
    //   <div>
    //     <p className="font-bold text-slate-600">Email:</p>
    //     <p className="text-start overflow-hidden break-words">{data.email}</p>
    //   </div>

    //   <div>
    //     <p className="font-bold text-slate-600">Contact:</p>
    //     <p className="text-start">{data.contact}</p>
    //   </div>
    //   <div>
    //     <p className="font-bold text-slate-600">Service:</p>
    //     <p className="text-start">{data.services}</p>
    //   </div>
    //   <div>
    //     <p className="font-bold text-slate-600">Duration:</p>
    //     <p className="text-start text-indigo-500">{data.duration}</p>
    //   </div>
    //   <div>
    //     <p className="font-bold text-slate-600">Date:</p>
    //     <p className="text-start text-indigo-500">{data.date}</p>
    //   </div>
    //   <div>
    //     <p className="font-bold text-slate-600">Time:</p>
    //     <p className="text-start text-indigo-500">{data.time}</p>
    //   </div>
    //   <div>
    //     <p className="font-bold text-slate-600">Status:</p>
    //     <p className="text-start text-green-500">{data.status}</p>
    //   </div>
    // </div>
    // <div className="w-full flex justify-center border-red-700 border-[2px]">
    //   <div className="w-full flex justify-center border-red-700 border-[2px]">
    //     <div className="rounded-md flex gap-10 flex-row md:justify-center text-[15px] md:text-[16px] md:w-[100%]">
    //       <div className="flex text-[#4f4f4f] flex-col gap-2 py-4 md:py-0">
    //         <p>Name:</p>
    //         <p>Email:</p>
    //         <p>Contact:</p>
    //         <p>Service:</p>
    //         <p>Duration:</p>
    //         <p>Date:</p>
    //         <p>Time:</p>
    //         <p>Status:</p>
    //       </div>
    //       <div className="flex text-[#3b3b3b] flex-col gap-2 py-4 md:py-0">
    //         <p className="text-sm md:text-base font-bold">{data.name}</p>
    //         <p className="overflow-hidden break-words text-sm md:text-base text-green-500">
    //           {data.email}
    //         </p>
    //         <p className="text-sm md:text-base text-yellow-500">
    //           {data.contact}
    //         </p>
    //         <p className="text-sm md:text-base text-purple-500">
    //           {data.services}
    //         </p>
    //         <p className="text-sm md:text-base text-red-500">{data.duration}</p>
    //         <p className="text-sm md:text-base text-indigo-500">{data.date}</p>
    //         <p className="text-sm md:text-base text-pink-500">{data.time}</p>
    //         <p className="text-sm md:text-base text-gray-500">{data.status}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className=" border  rounded-md flex flex-col text-[15px]  md:text-[16px] md:mx-12 md:p-2 md:w-[100%]  ">
    //   <div className="flex  ">
    //     <p className="w-[50%] border">Name:</p>
    //     <p className=" w-full border">{data.name}</p>
    //   </div>
    //   <div className="flex  ">
    //     <p className=" w-[50%] ">Email:</p>
    //     <p className="w-full overflow-hidden break-words">{data.email}</p>
    //   </div>
    //   <div className="flex ">
    //     <p className=" w-[50%] ">Contact:</p>
    //     <p className="w-full">{data.contact}</p>
    //   </div>
    //   <div className="flex ">
    //     <p className=" w-[50%] ">Service:</p>
    //     <p className="w-full">{data.services}</p>
    //   </div>
    //   <div className="flex ">
    //     <p className=" w-[50%] ">Duration:</p>
    //     <p className="w-full">{data.duration}</p>
    //   </div>
    //   <div className="flex  ">
    //     <p className=" w-[50%] ">Date:</p>
    //     <p className="w-full">{data.date}</p>
    //   </div>
    //   <div className="flex  ">
    //     <p className=" w-[50%] ">Time:</p>
    //     <p className="w-full">{data.time}</p>
    //   </div>
    //   <div className="flex  ">
    //     <p className=" w-[50%] ">Status:</p>
    //     <p className="w-full">{data.status}</p>
    //   </div>
    // </div>
    <div className="p-10 flex flex-col items-center">
      <div className="flex gap-5">
        <p className="w-[60px] sm:w-[90px] text-start font-bold text-slate-600">
          Name:
        </p>
        <p className="w-[200px] sm:w-[200px] text-start">{data.name}</p>
      </div>
      <div className="flex gap-5">
        <p className="w-[60px] sm:w-[90px] text-start font-bold text-slate-600">
          Email:
        </p>
        <p className="w-[200px] sm:w-[200px] text-start ">{data.email}</p>
      </div>

      <div className="flex gap-5">
        <p className="w-[60px] sm:w-[90px] text-start font-bold text-slate-600">
          Contact:
        </p>
        <p className="w-[200px] sm:w-[200px] text-start">{data.contact}</p>
      </div>
      <div className="flex gap-5">
        <p className="w-[60px] sm:w-[90px] text-start font-bold text-slate-600">
          Service:
        </p>
        <p className="w-[200px] sm:w-[200px] text-start">{data.services}</p>
      </div>
      <div className="flex gap-5">
        <p className="w-[60px] sm:w-[90px] text-start font-bold text-slate-600">
          Duration:
        </p>
        <p className="w-[200px] sm:w-[200px] text-start text-indigo-500">
          {data.duration}
        </p>
      </div>
      <div className="flex gap-5">
        <p className="w-[60px] sm:w-[90px] text-start font-bold text-slate-600">
          Date:
        </p>
        <p className="w-[200px] sm:w-[200px] text-start text-indigo-500">
          {data.date}
        </p>
      </div>
      <div className="flex gap-5">
        <p className="w-[60px] sm:w-[90px] text-start font-bold text-slate-600">
          Time:
        </p>
        <p className="w-[200px] sm:w-[200px] text-start text-indigo-500">
          {data.time}
        </p>
      </div>
      <div className="flex gap-5">
        <p className="w-[60px] sm:w-[90px] text-start font-bold text-slate-600">
          Status:
        </p>
        <p className="w-[200px] sm:w-[200px] text-start text-green-500">
          {data.status}
        </p>
      </div>
    </div>
  );
}

export default Detail;
