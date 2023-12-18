import React from 'react';

const InputTask = ({ icon, placeholder }) => {
  return (
    <>
      <div className="relative ">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <i className={`${icon}`}></i>
        </div>
        <input
          type="text"
          placeholder={placeholder}
          className="pl-10 pr-4 py-2 border rounded-md  focus:outline-none focus:border-blue-500"
        />
      </div>
    </>
  );
};

export default InputTask;
