import React from "react";
import Image from "next/image";

const PromptCard = () => {
  return (
    <div className="flex justify-between p-6 gap-3">
      <div className=" h-72 w-1/2">
        <Image
          src="/assets/images/buffe.png"
          alt="Heart Icon"
          width={724}
          height={230}
          className="w-full h-full object-cove rounded-xl"
        />
      </div>

      <div className="bg-[#fff3f5] h-72 w-1/2 rounded-2xl p-9">
        <div className="text-[35px]">
          {" "}
          S'inscrire & ecomnomiser{" "}
          <span className="text-blue-300 pl-6">10 %</span>
        </div>
        <p className="pt-5 text-[12px] text-gray-500">
          Office ipsum you must be muted. Synergize helicopter prioritize anyway
          job due harvest most opportunity didn't. Yet busy any meeting shark
          light marginalised 4-blocker message. Productize corporate nail caught
          synergy highlights lunch. Company another pushback items dear or any.
        </p>
        <div>
          <input type="text"
          placeholder="johndoe.gmailcom"
          className=" rounded-xl p-5  mt-5"
           />
           <button className="p-5 bg-blue-500 rounded-2xl text-white">
           Sinscrire

           </button>
        </div>
      </div>
    </div>
  );
};

export default PromptCard;

{
  /* <div className="bg-[#fff3f5] h-72 w-1/2 rounded-2xl p-9">
<div className="text-[35px]">
  Sinscrire & economiser <span className="text-blue-300 pl-6">10%</span>
</div>
<p className="pt-5 text-[12px] text-gray-500">
  Office ipsum you must be muted. Synergize helicopter prioritize anyway
  job due harvest most opportunity didnt. Yet busy any meeting shark
  light marginalised 4-blocker message. Productize corporate nail caught
  synergy highlights lunch. Company another pushback items dear or any.
</p>

<div className="flex items-center gap-2 mt-6 p-4 border border-gray-300 rounded-lg">
  <input
    type="text"
    placeholder="john@doe.com"
    className="flex-grow px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
    Sinscrire
  </button>
</div>
</div> */
}
