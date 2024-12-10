import React from "react";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="pl-6 gap-2 pt-24 flex">
     
      <div className="h-[400px] w-[300px] border  bg-[#f4f4f2]  border-black">
        <div className="h-[350px] w-[300px] pt-9 flex items-center pl-4">
          <Image
            src="/assets/images/card.png"
            alt="Heart Icon"
            width={224}
            height={224}
            className="w-[264px] h-[350px] mt-1 mr-2 pb-6" />
        </div>
        <div>
          <div className="flex justify-between">
            <span className=" font-mono text-lg pl-4">Title</span>
            <span className="">
              <img
                src="/assets/icons/Price.png"
                alt="Heart Icon 1"
                width={24}
                height={24}
                className="w-[28px] h-[23px] flex-none mr-3" />
            </span>
          </div>
          <div className="text-[10px] flex justify-between pl-2 pt-1">
            <div>
              <span>0,35€/Pièce · RÉF : VABGN5</span>
            </div>
            <div>
              <span className="pr-3">20 pièces</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[400px] w-[300px] border  bg-[#f4f4f2]  border-black">
        <div className="h-[350px] w-[300px] pt-9 flex items-center pl-4">
          <Image
            src="/assets/images/card.png"
            alt="Heart Icon"
            width={224}
            height={224}
            className="w-[264px] h-[350px] mt-1 mr-2 pb-6" />
        </div>
        <div>
          <div className="flex justify-between">
            <span className=" font-mono text-lg pl-4">Title</span>
            <span className="">
              <img
                src="/assets/icons/Price.png"
                alt="Heart Icon 1"
                width={24}
                height={24}
                className="w-[28px] h-[23px] flex-none mr-3" />
            </span>
          </div>
          <div className="text-[10px] flex justify-between pl-2 pt-1">
            <div>
              <span>0,35€/Pièce · RÉF : VABGN5</span>
            </div>
            <div>
              <span className="pr-3">20 pièces</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[400px] w-[300px] border  bg-[#f4f4f2]  border-black">
        <div className="h-[350px] w-[300px] pt-9 flex items-center pl-4">
          <Image
            src="/assets/images/card.png"
            alt="Heart Icon"
            width={224}
            height={224}
            className="w-[264px] h-[350px] mt-1 mr-2 pb-6" />
        </div>
        <div>
          <div className="flex justify-between">
            <span className=" font-mono text-lg pl-4">Title</span>
            <span className="">
              <img
                src="/assets/icons/Price.png"
                alt="Heart Icon 1"
                width={24}
                height={24}
                className="w-[28px] h-[23px] flex-none mr-3" />
            </span>
          </div>
          <div className="text-[10px] flex justify-between pl-2 pt-1">
            <div>
              <span>0,35€/Pièce · RÉF : VABGN5</span>
            </div>
            <div>
              <span className="pr-3">20 pièces</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[400px] w-[300px] border  bg-[#f4f4f2]  border-black">
        <div className="h-[350px] w-[300px] pt-9 flex items-center pl-4">
          <Image
            src="/assets/images/card.png"
            alt="Heart Icon"
            width={224}
            height={224}
            className="w-[264px] h-[350px] mt-1 mr-2 pb-6" />
        </div>
        <div>
          <div className="flex justify-between">
            <span className=" font-mono text-lg pl-4">Title</span>
            <span className="">
              <img
                src="/assets/icons/Price.png"
                alt="Heart Icon 1"
                width={24}
                height={24}
                className="w-[28px] h-[23px] flex-none mr-3" />
            </span>
          </div>
          <div className="text-[10px] flex justify-between pl-2 pt-1">
            <div>
              <span>0,35€/Pièce · RÉF : VABGN5</span>
            </div>
            <div>
              <span className="pr-3">20 pièces</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
