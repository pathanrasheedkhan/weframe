"use clint";
import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { Children } from "react";
import Profile from "@components/Profile";
import PromptCard from "@components/PromptCard";
import Form from "@components/Form";
import Feed from "@components/Feed";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
       

        <main className="">
          <Nav />
          <div className="flex items-center gap-2 p-[12px_0] pl-8  absolute  h-[45px] left-[34px] top-[177px]">
            <span className="text-black">Home</span>
            <span className="text-gray-400">Art de la table</span>
          </div>

          {children}
          {/* <h1 className="text-red-700 text-left">
  Description produit
</h1> */}
          <div className="flex justify-between  w-full h-37 p-0 gap-x-4">
            <div className="w-1/2 h-36 rounded-md font-sm text-gray-400 pt-9 pl-6 font-satoshi  flex items-center justify-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum at, atque aliquid quae nobis, repudiandae inventore, odit ipsam modi alias nulla animi. Necessitatibus, tempore odio sequi soluta eligendi rem cupiditate? Est porro temporibus illum, maxime et perspiciatis asperiores facilis excepturi! Vitae quia quos error voluptas accusamus est unde. Accusantium, cumque.</div>
            <div className="w-1/2 h-36 bg-[rgba(251,249,248,0.6)]  rounded-md">
            <div className="flex justify-between font-semibold p-6">
              <div>Livraisons</div>
              <div>+</div>
            </div>
            <div className="flex justify-between font-semibold p-6">
              <div>Questions</div>
              <div>+</div>
            </div>
            </div>
            
          </div>

          <div className="pt-24 pl-6 font-bold text-[44px] mb-9"><h1>Articles similaires</h1></div>
          
          
          <Profile />
          <div className="p-10 text-[35px] font-bold "><h1>Ces produits pourraient vous intéresser</h1></div>
          <Feed/>
          <Provider/>
          <PromptCard/>
          <Form/>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
