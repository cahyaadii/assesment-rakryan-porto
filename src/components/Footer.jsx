import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div>
        <h1 className="text-3xl font-bold text-black/50 text-center py-10">
          FAWZIUIUX
        </h1>

        <div className="nav flex flex-wrap gap-8 justify-center px-4 mx-auto lg:max-w-2xl mx-auto">
          <a href="/">Home</a>
          <a href="/">About Me</a>
          <a href="/">Services</a>
          <a href="/">Projects</a>
          <a href="/">Testimonials</a>
          <a href="/">Contact</a>
        </div>

        <div className="social flex gap-4 justify-center py-15">
          <a href="">
            <img
              src="/icons/sosmed/facebook.svg"
              alt=""
              width={24}
              height={24}
            />
          </a>
          <a href="">
            <img
              src="/icons/sosmed/instagram.svg"
              alt=""
              width={24}
              height={24}
            />
          </a>
          <a href="">
            <img
              src="/icons/sosmed/linkedin.svg"
              alt=""
              width={24}
              height={24}
            />
          </a>
          <a href="">
            <img
              src="/icons/sosmed/twitter.svg"
              alt=""
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>

      <div className="copyright text-center py-5 bg-black/70">
        <p className="text-white">
          &copy; 2023{" "}
          <span className="font-bold text-[#FD6F00]">FawziUiUx</span> All Rights
          Reserved , Inc.
        </p>
      </div>
    </section>
  );
};

export default Footer;
