import React from "react";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="wrapper">
      <div>
        <h1>contact</h1>
        <ul>
          <li>02-545-3982</li>
          <li>info@tsp-xr.com</li>
          <li>서울 강남구 학동로 101길 26</li>
        </ul>
        <div className="rights">
          &copy; 2023 공간의파티. All rights reserved.
        </div>
      </div>
      <div className="icon">
        <AiFillYoutube color="#9D9DA0" />
      </div>
      <style jsx>{`
        .wrapper {
          background-color: #000;
          color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding: 3vw 8vw;
        }
        h1 {
          text-transform: uppercase;
          font-weight: bold;
          font-size: 1.3vw;
          margin-bottom: 1vw;
        }
        li {
          font-size: 1.25vw;
          margin-bottom: 0.2vw;
        }
        .rights {
          font-size: 1.25vw;
          margin-top: 1.5vw;
        }
        .icon {
          font-size: 2.5vw;
        }
      `}</style>
    </div>
  );
};

export default Footer;
