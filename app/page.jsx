import Feed from "@components/Feed";
import Provider from "@components/Provider";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <section className="flex justify-between items-center w-full h-screen p-0 gap-x-4">
        <div className="w-1/2 h-3/4 bg-[##fffdd0] rounded-md flex items-center justify-center ">
          {/* <div className="p-3 pl-3 gap-3">
            <div >
              <Image
                src="/assets/images/hero.png"
                alt="Home Background"
                width={20}
                height={23}
                className="rounded-md w-20 h-23"
              />
            </div>
            <div>
              <Image
                src="/assets/images/hero.png"
                alt="Home Background"
                width={20}
                height={23}
                className="rounded-md w-20 h-23"
              />
            </div>
            <div>
              <Image
                src="/assets/images/hero.png"
                alt="Home Background"
                width={20}
                height={23}
                className="rounded-md w-20 h-23"
              />
            </div>
          </div> */}
          <div className="relative w-full h-full p-23 flex  items-center p-14">
            <Image
              src="/assets/images/hero.png"
              alt="Home Background"
              width={335}
              height={14}
              className="rounded-md w-[335px] h-80 "
            />
          </div>
        </div>

        <div className="w-1/2 h-3/4 bg-white  rounded-md">
          <div className=" flex p-9 w-full justify-between ">
            <h1 className="text-xl font-bold">
              Cheese – appareil à raclette 1/2 roue
            </h1>
            <img
              src="/assets/icons/heart.png"
              alt="Heart Icon"
              className="w-6 h-6"
            />
          </div>
          <div className=" absolute h-0 opacity-40 border-[0.5px] flex items-center gap-2 pl-9 border-b-2 border-gray-300">
            <span className="text-black font-bold">39,50€</span>
            <span className="text-gray-400 font-thin">/pièce</span>
          </div>
          <div className="flex items-center p-9 border-b border-gray-700-300">
            <img
              src="/assets/icons/Hicon1.png"
              alt="Heart Icon 1"
              className="w-[69px] h-[24px] flex-none"
            />
            <img
              src="/assets/icons/Hicon2.png"
              alt="Heart Icon 2"
              className="w-[69px] h-[24px] flex-none"
            />
          </div>
          <div className="font-thin text-sm text-gray-500 pl-9">
            <p>
              Location appareil à raclette - Raclette traditionnelle 1/2 roue
            </p>
            <p>Réglable en hauteur</p>
            <p>Appareil à raclette professionnel</p>
            <p>Boîtier de chauffe horizontal réglable en hauteur</p>

            <div className="pt-5">
              <span>220V</span>
              <br />
              <span>900M</span>
            </div>
          </div>
          <div className="  ">
            <div className="absolute flex items-center justify-center gap-2 mt-11 w-[362px] h-[50px] left-[878px]  bg-[#5CD2DD] rounded-lg">
              <span className="text-center text-white uppercase font-semibold text-[16px] leading-[130%]">
                Ajouter au panier
              </span>
            </div>
            <div className="pt-11">
              <div className="absolute  flex justify-between w-[153px] h-[39px]   rounded-md ">
                <div className="p-3 text-sm text-gray-500">-</div>
                <div className="p-3 text-sm text-gray-500">1</div>
                <div className="p-3 text-sm text-gray-500">+</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <h1 className="absolute left-0 top-111 pl-6 pb-8 mt-0  text-black text-left">
          Description produit
        </h1>
      </div>
    </>
  );
};

export default Home;
