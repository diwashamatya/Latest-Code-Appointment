import React, { useState } from "react";

const AddService = ({ setData, data, setOpenModal, handleToggle}) => {
  const [newService, setNewService] = useState({
    id: data.length + 1,
    servicename: "",
    availability: {
      Monday: false,
      Tuesday: false,
      Wednesday: false,
      Thursday: false,
      Friday: false,
      Saturday: false,
      Sunday: false,
    },
    duration: [
      "30 minutes",
      "1 hour",
      "1 hour 30 minutes",
      "2 hours",
      // Add more options as needed
    ],
    visibility: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setNewService((prevState) => ({
        ...prevState,
        availability: {
          ...prevState.availability,
          [name]: checked,
        },
      }));
    } else {
      setNewService((prevState) => ({ ...prevState, [name]: value }));
    }
  };
  const handleSubmit = () => {
    // Validate the input before adding the new service
    if (
      newService.servicename.trim() === "" ||
      newService.availability.trim() === "" ||
      newService.duration.trim() === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    // Add the new service to the data array
    setData((prevState) => [...prevState, newService]);
    setOpenModal(false);
  };


  const handleDuration = () => {
    return newService.duration.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
  };

  
  return (
    <div className="bg-[#ecf1fc] w-[500px] h-[560px] flex flex-col gap-4 px-6 py-4 rounded-md">
      <h2 className=" flex items-center justify-center text-[24px]">
        Add New Service
      </h2>
      <div>
        <label> 
          Service Name:
          <input
            type="text"
            name="servicename"
            value={newService.servicename}
            onChange={handleChange}
            placeholder="Service Name"
            className="border w-full h-[50px] px-4 rounded-[5px] shadow-sm hover:to-blue-500"
          />
        </label>
      </div>
      <div className="flex gap-2 ">
      <div className="flex flex-col">
        <label>Availability:</label>

        <div className="bg-white flex flex-wrap p-1 rounded-[5px] shadow-sm border px-4">
          <div className="flex w-[100px]">
         
            <input
              type="checkbox"
              name="Monday"
              checked={newService.availability.Monday}
              onChange={handleChange}
          style={{backgroundColor:"#A8CCD1"}}
              
            />
             <label className="p-1 text-gray-500 text-[15px]">
          Monday
          </label>
           

          </div>
         
          <div className="flex w-[100px]">
         
            <input
              type="checkbox"
              name="Tuesday"
              checked={newService.availability.Tuesday}
              onChange={handleChange}
             
              
            />
             <label className="p-1  text-gray-500 text-[15px]">
          Tuesday
          </label>
           

          </div>
         
          <div className="flex w-[100px]">
         
            <input
              type="checkbox"
              name="Wednesday"
              checked={newService.availability.Wednesday}
              onChange={handleChange}
             
              
            />
             <label className="p-1 text-gray-500 text-[15px]">
          Wednesday
          </label>
           

          </div>
         
          <div className="flex w-[100px]">
         
         <input
           type="checkbox"
           name="Thursday"
           checked={newService.availability.Thursday}
           onChange={handleChange}
          
           
         />
          <label className="p-1 text-gray-500 text-[15px]">
       Thursday
       </label>
        

       </div>
      
       <div className="flex w-[100px]">
         
         <input
           type="checkbox"
           name="Friday"
           checked={newService.availability.Friday}
           onChange={handleChange}
          
           
         />
          <label className="p-1 text-gray-500 text-[15px]">
       Friday
       </label>
        

       </div>
      
       <div className="flex w-[100px]">
         
         <input
           type="checkbox"
           name="Saturday"
           checked={newService.availability.Saturday}
           onChange={handleChange}
          
           
         />
          <label className="p-1 text-gray-500 text-[15px]">
       Saturday
       </label>
        

       </div>
      
       <div className="flex w-[100px]">
         
         <input
           type="checkbox"
           name="Sunday"
           checked={newService.availability.Sunday}
           onChange={handleChange}
          
           
         />
          <label className="p-1 text-gray-500 text-[15px]">
       Sunday
       </label>
        

       </div>
      
        </div>
      </div>
    
      <div>
  <label>Duration:</label>
  <select
    name="duration"
    value={newService.duration}
    onChange={handleDuration}
    className="border w-full h-[50px] px-2 rounded-[5px] shadow-sm "
  >
    <option value="" >Select</option>
    {handleDuration()}
   
  </select>
</div>

      </div>
     
    
      <div className="flex gap-5 items-center">
        <label>Visibility</label>
        <div className="relative">
          {/* Hidden input to hold the toggle state */}
          <input
            type="checkbox"
            className="sr-only"
            checked={newService.checked}
            onChange={() => handleToggle(newService.id)} // Use onChange instead of onClick
          />
          {/* Track (background) */}
          <div
            className={`w-[35px] h-[16px] rounded-full shadow-inner ${
              newService.checked ? "bg-[#08A0E9]" : " bg-gray-300"
            }`}
          ></div>
          {/* Thumb (circle) */}
          <div
            className={`absolute top-0 left-0 w-[16px] h-[16px] bg-white rounded-full shadow transform transition-transform ${
              newService.checked ? "translate-x-5" : "translate-x-0"
            }`}
          ></div>
        </div>
      </div>
      <div>
        <label> 
          Description:
          <input
            type="text"
            name="description"
            value={newService.servicename}
            onChange={handleChange}
            placeholder="Description"
            className=" flex border w-full h-[100px] px-4 rounded-[5px] shadow-sm place-items-start "
          />
        </label>
      </div>

      <div className="flex items-center justify-center">
        <button
          onClick={handleSubmit}
          className="bg-[#0AA1DD] w-[120px] h-[45px] rounded-[5px] text-white"
        >
          Add Service
        </button>
      </div>
    </div>
  );
};

export default AddService;
