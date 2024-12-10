import React from "react";
import Image from "next/image";

const Provider = () => {
  return (
    <>
      <div className="flex justify-center items-center pt-16 mt-3">
        <Image
          src="/assets/images/addi.png"
          alt="Heart Icon"
          width={724}
          height={230}
          className="w-[764px] h-[350px] mt-1 mr-2 pb-6"
        />
      </div>
      {/* <div className="flex items-center gap-2 p-4 border border-gray-300 rounded-lg">
        <input
          type="text"
          placeholder="Enter your text"
          className="flex-grow px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Submit
        </button>
      </div> */}
    </>
  );
};

export default Provider;
