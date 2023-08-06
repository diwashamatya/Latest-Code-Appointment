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
    <div className="grid  grid-cols-2 p-10 gap-2.5">
      <div className="">
        <p className="font-bold text-slate-600">Name:</p>
        <p className="text-start">{data.name}</p>
      </div>
      <div>
        <p className="font-bold text-slate-600">Email:</p>
        <p className="text-start ">{data.email}</p>
      </div>

      <div>
        <p className="font-bold text-slate-600">Contact:</p>
        <p className="text-start">{data.contact}</p>
      </div>
      <div>
        <p className="font-bold text-slate-600">Service:</p>
        <p className="text-start">{data.services}</p>
      </div>
      <div>
        <p className="font-bold text-slate-600">Duration:</p>
        <p className="text-start text-indigo-500">{data.duration}</p>
      </div>
      <div>
        <p className="font-bold text-slate-600">Date:</p>
        <p className="text-start text-indigo-500">{data.date}</p>
      </div>
      <div>
        <p className="font-bold text-slate-600">Time:</p>
        <p className="text-start text-indigo-500">{data.time}</p>
      </div>
      <div>
        <p className="font-bold text-slate-600">Status:</p>
        <p className="text-start text-green-500">{data.status}</p>
      </div>
    </div>
  );
}

export default Detail;
