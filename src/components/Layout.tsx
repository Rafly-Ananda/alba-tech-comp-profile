import { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, Link, useLocation } from "react-router-dom";
import Button from "./Button";
import useNavbarStore from "../hooks/zustand/useNavbarStore";
import useModalStore from "../hooks/zustand/userModalStore";
import useUserStore from "../hooks/zustand/useUserStore";

const Layout = () => {
  let location = useLocation();
  const { isNavOpen, setNavState } = useNavbarStore((state) => state);
  const { setModalState } = useModalStore((state) => state);
  const { userToken: user } = useUserStore((state) => state);

  useEffect(() => {
    setNavState(false);
  }, [location]);

  return (
    <div
      className={`w-full h-screen scroll-my-24 ${
        isNavOpen && "overflow-hidden"
      } `}
    >
      <div>
        <Navbar />
        <div className={`w-full relative ${isNavOpen && "h-screen"}`}>
          {isNavOpen && (
            <div className="lg:hidden bg-[#ffffff] absolute inset-0 z-30">
              <ul className="flex flex-col items-center justify-center gap-10 font-bold text-lg ">
                <li>
                  <a href="#">Service</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Carrer</a>
                </li>
              </ul>
              <div className="w-full flex flex-col items-center justify-center gap-10 mt-10">
                <Button title="Contact Us" />
                {user ? (
                  <Link to="/user">
                    <Button title="Dashboard" />
                  </Link>
                ) : (
                  <Button title="Login" clickAction={setModalState} />
                )}
              </div>
            </div>
          )}
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
