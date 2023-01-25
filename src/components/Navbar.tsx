import React, { FC, useState } from "react";
import Hamburger from "hamburger-react";
import albaLogo from "../assets/alba-logo.svg";
import Button from "./Button";
import useNavbarStore from "../hooks/zustand/useNavbarStore";
import useModalStore from "../hooks/zustand/userModalStore";
import useUserStore from "../hooks/zustand/useUserStore";
import { Link } from "react-router-dom";

const links: String[] = ["Service", "About", "Portfolio", "Blog", "Career"];

const Navbar: FC = () => {
  const [_, setMobileNavState] = useState<boolean>(false);
  const { setModalState } = useModalStore((state) => state);
  const { isNavOpen, setNavState } = useNavbarStore((state) => state);
  const { userToken: user } = useUserStore((state) => state);

  return (
    <header className="h-24 w-full flex items-center justify-between lg:justify-center px-10 gap-[85px] font-display sticky top-0 z-30 bg-white shadow-nav-shadow">
      <Link to="/">
        <img src={albaLogo} alt="alba-logo" />
      </Link>
      <ul className="lg:flex items center gap-[85px] font-bold text-sm md:text-base lg:text-lg hidden ">
        {links.map((e, i) => (
          <li key={i}>
            <a
              href="#"
              className="relative after:h-1 after:w-[0%] after:content-[''] after:absolute   after:left-0 after:-bottom-[6px] after:bg-[#FFCE07] hover:after:rounded-lg after:duration-300 hover:after:w-full"
            >
              {e}
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden lg:flex flex-row gap-8">
        <Button title="Contact Us" />
        {user ? (
          <Link to="/user">
            <Button title="Dashboard" />
          </Link>
        ) : (
          <Button title="Login" clickAction={setModalState} />
        )}
      </div>

      <div className="block lg:hidden">
        <Hamburger
          toggled={isNavOpen}
          toggle={setMobileNavState}
          onToggle={(e) => setNavState(e)}
          direction="left"
          color="#272727"
        />
      </div>
    </header>
  );
};

export default Navbar;
