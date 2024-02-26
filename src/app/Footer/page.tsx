import React from "react";
import {FaInstagramSquare, FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

import Link from "next/link";
const FooterSocialLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com/035Subhans67914",
    icon: <FaTwitter />,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/subhanshu-jha-1429a1195/",
    icon: <FaLinkedin />,
  },
  {
    name: "Github",
    href: "https://github.com/subhanahujha007",
    icon: <FaGithub />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/jha.subhanshu/",
    icon: <FaInstagramSquare />,
  },
];
const FooterAboutLinks = [
  {
    name: "Learn about me",
    href: "/subhanshu.pdf",
  },
  {
    name: "subhanshujha001@gmail.com",
    href: "mailto:subhanshujha001@gmail.com",
  },
];
const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[999] pb-20 sm:pb-0">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            {FooterSocialLinks?.map((social, index) => (
              <Link href={social.href} key={index}>
                <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  {social.icon}
                  <span className="text-[15px] ml-[6px]">{social.name}</span>
                </p>
              </Link>
            ))}
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            {FooterAboutLinks?.map((social, index) => (
              <Link href={social.href} key={index}>
                <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  <span className="text-[15px] ml-[6px]">{social.name}</span>
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Subhanshu Jha 2024. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;