import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "./../public/Asset 1@1200x.png";
import { colors } from "@/styles/color";

const Header = () => {
  const router = useRouter();
  return (
    <header>
      <div>
        <Link href="/" legacyBehavior>
          <Image
            src={logo}
            alt="Image"
            // layout="responsive"
            width={190}
          />
        </Link>
      </div>
      {/* <Image src={logo} layout="responsive" width="10vw" /> */}
      <div className="navWrapper">
        <Link href="/work" legacyBehavior>
          <a>work</a>
        </Link>
        <Link href="/solution" legacyBehavior>
          <a>solution</a>
        </Link>
        <Link href="/product" legacyBehavior>
          <a>product</a>
        </Link>
        <Link href="/news" legacyBehavior>
          <a>news</a>
        </Link>
        <Link href="/company" legacyBehavior>
          <a>company</a>
        </Link>
        <div className="contactBtn">contact</div>
      </div>

      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5vw 10vw;
        }
        a {
          position: relative;
          font-size: 1vw;
          font-weight: bold;
          color: ${colors.purple};
          text-transform: uppercase;
          padding: 0.5vw;
        }
        a:not(:last-of-type)::before {
          position: absolute;
          top: 0.4vw;
          right: -0.7vw;
          content: "";
          height: 1.3vw;
          box-shadow: 0 0 0 0.3px ${colors.purple};
        }
        .navWrapper {
          display: flex;
          align-items: center;
          gap: 1.5vw;
        }
        .contactBtn {
          font-size: 1vw;
          font-weight: bold;
          color: white;
          text-transform: uppercase;
          background-color: ${colors.purple};
          padding: 0.6vw 1vw;
          border-radius: 1vw;
        }
      `}</style>
    </header>
  );
};

export default Header;
