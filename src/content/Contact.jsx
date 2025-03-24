import React from "react";

const Contact = () => {
  return (
    <section className="contact bg-[#FFEBDB]">
      <div className="content text-center py-16 px-4 mx-auto">
        <h2 className="text-5xl font-bold">Lets Design Together</h2>
        <p className="py-4 text-gray-500 lg:w-3/7 mx-auto md:max-w-[600px]">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium{" "}
        </p>

        <div className="form text-center pt-12">
          <form className="flex gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md border-2 border-gray-300 bg-[#F8F8F8] lg:w-2/7 sm:w-2/3 w-full placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:shadow"
            />
            <button className="bg-[#FD6F00] text-white lg:px-8 py-2 sm:px-4 sm:w-40 w-5/9 rounded-md hover:bg-[#CC5900] transition-colors hover:cursor-pointer">
              Contact Me
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
