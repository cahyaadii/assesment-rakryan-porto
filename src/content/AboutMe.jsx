import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between my-20 gap-6 max-w-6xl mx-auto px-4">
      <div className="identity flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
        <p className="font-semibold text-lg">Hi, I am</p>
        <p className="text-[#FD6F00] text-xl font-bold">Fawzi Sayed</p>
        <p className="text-6xl font-bold">
          Website <br /> Developer
        </p>
        <p className="text-gray-500 my-2 lg:max-w-[420px] md:max-w-[600px]">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <button className="bg-[#FD6F00] my-2 text-white px-6 py-1 rounded-md hover:bg-[#CC5900] transition-colors text-lg hover:cursor-pointer">
          Hire me{""}
        </button>
      </div>
      <div className="profile">
        <img
          src="/Profile.png"
          alt="profile"
          className="rounded-full lg:w-100 lg:h-110 w-80 h-80"
        />
        <div className="sosmed flex gap-4 justify-center items-center py-6">
            <a href="#">
                <img src="/icons/sosmed/facebook.svg" alt="" width={24} height={24} />
            </a>
            <a href="#">
                <img src="/icons/sosmed/instagram.svg" alt="" width={24} height={24} />
            </a>
            <a href="#">
                <img src="/icons/sosmed/linkedin.svg" alt="" width={24} height={24} />
            </a>
            <a href="#">
                <img src="/icons/sosmed/twitter.svg" alt="" width={24} height={24} />
            </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
