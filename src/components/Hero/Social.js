/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { TbBrandLeetcode } from "react-icons/tb";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://leetcode.com/u/Mudassarkareem/"
        className="home__social-icon"
        target="_blank"
      >
        <TbBrandLeetcode size={25} />
      </a>
      <a
        href="https://github.com/Mudassar-Kareem"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil-github-alt"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/mudassar-kareem-4874032bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil-linkedin"></i>
      </a>
    </div>
  );
};

export default Social;
