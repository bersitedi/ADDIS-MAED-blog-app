import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPinterestSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import SocialShareButtons from "./social-share-button";

const AboutMe = () => {
  return (
    <div className="flex flex-col xl:flex-row">
      <div className="lg:flex-3 h-fit lg:m-5 p-8 lg:border-r lg:border-r-grey rounded-lg  items-center">
        <div className="flex flex-col items-center">
          <span className="m-2.5 p-1.5 w-4/5 border-t border-b border-[#a7a4a4] text-center font-sans text-xs leading-5 text-[#222222] font-semibold">
            SIFEN ALEMAYEHU
          </span>
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="mt-3.5 w-64 h-64"
          />
          <p className="pt-5 pb-5">
            Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
            amet ex esse. Sunt eu ut nostrud id quis proident.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <span className="m-2.5 p-1.5 w-4/5 border-t border-b border-[#a7a4a4] text-center font-sans text-xs leading-5 text-[#222222] font-semibold">
            FOLLOW US
          </span>
          <div className="mt-3.5 w-64 flex items-center justify-center cursor-pointer">
            <a
              href="URL_OF_FACEBOOK_PROFILE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg ml-2.5"
            >
              <FaFacebookSquare className="text-2xl text-black" />
            </a>
            <a
              href="URL_OF_INSTAGRAM_PROFILE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg ml-2.5"
            >
              <FaInstagramSquare className="text-2xl text-black" />
            </a>
            <a
              href="URL_OF_PINTEREST_PROFILE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg ml-2.5"
            >
              <FaPinterestSquare className="text-2xl text-black" />
            </a>
            <a
              href="URL_OF_TWITTER_PROFILE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg ml-2.5"
            >
              <FaTwitterSquare className="text-2xl text-black" />
            </a>
          </div>
        </div>
      </div>
      <div className="xl:flex-9 xl:pl-8 pr-1 xl:m-5 xl:p-8 xl:ml-5">
        <div className="w-full mb-8">
          <h1 className="hidden lg:flex m-2.5 p-1.5 w-4/5 border-t border-b border-[#a7a4a4] text-center font-sans text-xl leading-5 text-[#222222] font-semibold">
            About Me
          </h1>
          <p className="text-base">
            Hi, I'm a Junior Chef passionate about creating delicious and
            innovative dishes. With a background in culinary arts and a love for
            experimenting with flavors, I strive to bring joy to people's lives
            through my cooking. Join me on my culinary journey as I explore new
            recipes, techniques, and share my experiences from the kitchen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
