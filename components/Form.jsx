import React from "react";
import Image from "next/image";

const Form = () => {
  return (
    <div className="flex justify-between h-72 items-center p-6">
      <div className="flex justify-between items-center">
        <div>
          <img src="assets/icons/logo.png" alt="logo" />

          <Image
            src="/assets/icons/main.png"
            alt="logo"
            width={133}
            height={16}
          />
        </div>
        <div className="p-5">
          <h1 className="font-bold text-gray-600 ">INFOS PRATIQUES</h1>
          <div className="text-sm text-gray-500">
            <p>À propos</p>
            <p>Livraisons & Reprises</p>
            <p>Mode demploi</p>
            <p>F.A.Q</p>

          </div>
        </div>
        <div className="p-5">
          <h1 className="font-bold text-gray-600 ">INFOS PRATIQUES</h1>
          <div className="text-sm text-gray-500">
            <p>À propos</p>
            <p>Livraisons & Reprises</p>
            <p>Mode demploi</p>
            <p>F.A.Q</p>

          </div>
        </div>
        <div className="p-5">
          <h1 className="font-bold text-gray-600 ">INFOS PRATIQUES</h1>
          <div className="text-sm text-gray-500">
            <p>À propos</p>
            <p>Livraisons & Reprises</p>
            <p>Mode demploi</p>
            <p>F.A.Q</p>

          </div>
        </div>
      </div>

      <div>
        <div>
          <Image
            src="/assets/icons/Footicons.png"
            alt="logo"
            width={133}
            height={16}
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
