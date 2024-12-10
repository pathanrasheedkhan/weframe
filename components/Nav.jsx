import React from "react";
import Image from "next/image";
const Nav = () => {
  return (
    <><nav className="flex justify-between w-full overflow-x-hidden mt-8 ">
      <div>
        <img src="assets/icons/logo.png" alt="logo" />

        <Image
          src="/assets/icons/main.png"
          alt="logo"
          width={133}
          height={16} />
      </div>
      <div className=" flex  justify-between border border-none w-96 rounded-lg  pt-3">
        <span className="">Rechercher un produit</span>
        <Image
          src="/assets/icons/search.png"
          alt="search"
          width={13}
          height={13}
          className="h-[20px] w-[20px] ml-2" />
      </div>

      <div className="flex">
        <Image
          src="/assets/icons/idea.png"
          alt="idea"
          width={18}
          height={18}
          className="w-[16px] h-[19px] mr-2 flex-none order-0 flex-grow-0 pt-2" />
        <span>Inspirations</span>
      </div>
      <div className="flex ">
        <img
          src="assets/icons/heart.png"
          height={3}
          width={13}
          alt="heart"
          className="h-3 mt-2 mr-2" />
        <span>Mes favoris</span>
      </div>
      <div className="flex items-center p-[10px_16px] gap-[8px] bg-[#0093D0] border border-[#007AAD] rounded-[6px]">
        <Image
          src="/assets/icons/cart.png"
          alt="cart"
          width={15}
          height={8}
          className="h-3 mt-2 mr-2" />
        <span className="w-[45px] h-[21px] font-poppins font-medium text-[14px] leading-[150%] text-[#FFFFFF] flex-none order-1 flex-grow-0">
          Panier
        </span>
      </div>

      <div className=" rounded-full">
         into
      </div>
      <div>profile</div>
    </nav>
    <hr />
    <div className='flex justify-evenly  font-light text-sm text-gray-400 w-full overflow-x-hidden mt-8 border-b-2 border-gray-400' >
                    <div className='text-blue-500'>ARTDELA TABLE</div>
                    <div>Mobilier</div>
                    <div>Nappage</div>
                    <div>Matériel de salle</div>
                    <div>Cuisine</div>
                    <div>Barbecue</div>
                    <div>Tente</div>
                    <div>Chauffage</div>
                    <div>Podium - Piste de danse</div>
                    <div>Son et lumière</div>
                    <div className="border-b border-gray-300">Consommables</div>
                    
                </div>
                <div className="border-b border-gray-300">
</div>

                
      </>
  );
};

export default Nav;

// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { signIn, signOut, useSession, getProviders } from "next-auth/react";

// const Nav = () => {
//   return (
//     <>
//       <nav className="flex justify-between w-full mb-16 pt-13 overflow-x-hidden max-w-full">
//         {/* Logo Section */}
//         <div className="flex items-center">
//           <img src="/assets/icons/logo.png" alt="logo" className="logo" />
//           <img src="/assets/icons/main.png" alt="logo" className="logo" />
//         </div>

//         {/* Search Bar */}
//         <div className="flex ml-20 items-center px-[15px] gap-[10px] w-auto h-[50px] bg-[#f0f1f3] rounded-[6px]">
//           <span className="text-[#667482] text-[14px] leading-[150%] font-normal">
//             Rechercher un produit
//           </span>
//           <div className="w-[39px] h-[50px] relative">
//             <div className="absolute w-[39px] h-[50px] left-[719px] top-0 rounded-[0px_6px_6px_0px]"></div>
//             <div className="absolute w-[19px] h-[24px] left-[711px] top-[12px] opacity-[0.3]">
//               <div className="absolute left-[12.5%] right-[12.5%] top-[12.5%] bottom-[12.5%] border-2 border-[#ffffff]">
//                 <Image
//                   src="/assets/icons/search.png"
//                   alt="search"
//                   width={24}
//                   height={24}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Links and Icons */}
//         <div className="flex items-center gap-[8px]">
//           <div className="flex flex-row items-center gap-[8px]">
//             <img src="/assets/icons/idea.png" alt="inspiration" className="mt-1" />
//             <span>Inspirations</span>
//           </div>
//           <div className="flex flex-row items-center p-[10px_16px] gap-[8px] bg-[white]">
//             <img src="/assets/icons/heart.png" alt="heart icon" className="mt-1" />
//             <span>Mes favoris</span>
//           </div>
//           <div className="flex flex-row items-center p-[10px_16px] gap-[8px] bg-[#0093D0] border border-[#007AAD] rounded-[6px]">
//             <img src="/assets/icons/cart.png" alt="cart icon" className="mt-1" />
//             <span>panier</span>
//           </div>
//         </div>
//       </nav>

//     </>
//   );
// };

// export default Nav;
