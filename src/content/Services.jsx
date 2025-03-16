import React from "react";
import ServicesItems from "../assets/SercivesItems";

const Services = () => {
  return (
    <div className=" text-center flex flex-col gap-8 bg-[#FFF6E7] py-16">
      <h2 className="text-5xl font-bold">Services</h2>
      <p className="text-gray-800 lg:w-3/8 mx-auto md:max-w-[600px] px-4">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium
      </p>
      <div className="services grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 max-w-6xl mx-auto px-4">
        {ServicesItems.map((item) => (
          <div
            key={item.id}
            className="bg-white px-4 py-8 rounded-lg shadow-md flex flex-col gap-4 items-start"
          >
            <img src={item.image} alt={item.title} className="w-12 h-12" />
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p className="text-gray-600 text-start">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
              interdum
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
