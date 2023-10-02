import React from "react";
import { AiFillGithub,AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="mx-20 mt-10 flex flex-row justify-between flex-wrap">
      <div className="mb-5">Copyrights &#169; Ravindra Mohith, 2023</div>
      <div className="mb-5 flex flex-row gap-4 text-xl">
        <a href='https://github.com/Ravindra-Mohith'></a><AiFillGithub />
        <a href='https://www.linkedin.com/'></a><AiFillLinkedin />
      </div>
    </div>
  );
};

export default Footer;
