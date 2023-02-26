import { useEffect, FC } from "react";

// Components
import Button from "./components/Button";
import PackagesCard from "./components/PackagesCard";
import PortfolioCard from "./components/PortfolioCard";
import LogoSlider from "./components/LogoSlider";
import ModalMenu from "./components/ModalMenu";

// Mock Data
import { portFolioContent } from "./mockData";

// Asset Import
import { completePackageIcons, techIcons } from "./assetImport";

// Assets
import hero from "./assets/hero.png";
import buildOrScaleUp from "./assets/build-or-scale-up.svg";
import yourDevelopmentTeam from "./assets/your-development-team.svg";
import collaborationHeading from "./assets/collaboration-heading.svg";
import albaLogo from "./assets/alba-logo.svg";
import testimonials from "./assets/testimonials.png";
import textureTestimonials from "./assets/texture-testimonial.svg";

// Social media icons
import fb from "./assets/icons/facebook.svg";
import ig from "./assets/icons/instagram.svg";
import linkedin from "./assets/icons/linkedin.svg";

// Zustand
import useModalStore from "./hooks/zustand/userModalStore";
import useNavbarStore from "./hooks/zustand/useNavbarStore";

const App: FC = () => {
  const { isModalOpen, setModalState } = useModalStore((state) => state);
  const { setNavState } = useNavbarStore((state) => state);

  const handleResize = () => {
    setNavState(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <ModalMenu isModalOpen={isModalOpen} setModalOpen={setModalState} />
      <main className="w-full h-full relative scroll-mt-24" id="top">
        <section className="h-fit w-screen bg-texture bg-no-repeat">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="w-full h-full flex flex-row-reverse items-center relative">
              <img
                src={hero}
                alt="hero"
                className="relative -top-12 w-8/12 z-10 hidden lg:block"
              />
              <div className="static lg:absolute w-fit h-fit top-44 -left-[35%] right-0 my-0 mx-auto flex flex-col items-center lg:items-start gap-1 mt-10 lg:mt-0">
                <div className="w-11/12 lg:w-fit bg-white border-2 border-black  pl-2 py-5 pr-14 flex items-center justify-center z-20">
                  <img
                    src={buildOrScaleUp}
                    alt="build-or-scale-up"
                    className="mt-2"
                  />
                </div>

                <img
                  src={yourDevelopmentTeam}
                  alt="your-development-team"
                  className=" mt-2 w-11/12 z-20"
                />

                <div className="w-full lg:w-5/6 flex items-center justify-center lg:justify-start gap-4 bg-white p-10 z-0">
                  <div className="w-32 h-2 rounded-3xl bg-[#FFCE07]"></div>

                  <p className="text-xl mt-2">In weeks, not months</p>
                </div>

                <div className="w-full flex justify-center lg:w-1/4 lg:block">
                  <Button title="Book now" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-full h-fit flex flex-col items-center justify-center gap-4 mt-24 scroll-mt-32"
            id="Service"
          >
            <p className="text-[#C4C4C4] text-xl">Complete Package</p>

            <div className="w-full h-fit flex flex-col items-center justify-center gap-10 mt-2">
              <div className="flex flex-col items-center justify-center font-bold text-2xl lg:text-4xl text-center">
                <h3>From product design to software continuous delivery</h3>
              </div>
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-3/4 flex flex-wrap items-center justify-center gap-8">
                  {completePackageIcons.map((e, i) => (
                    <PackagesCard {...e} key={i} />
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full h-full flex items-center justify-center mt-10">
              <div className="w-full lg:w-7/12 flex flex-wrap items-center justify-center gap-x-28 gap-y-12">
                {techIcons.map((e, i) => (
                  <img src={e} alt="build-or-scale-up" key={i} />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full h-fit flex flex-col items-center justify-center bg-[#272727] p-4 lg:p-8 mt-16 gap-10 ">
            <img
              src={collaborationHeading}
              alt="build-or-scale-up"
              className="mt-3"
            />
            <div className="w-full h-fit flex items-center justify-around flex-wrap gap-10 flex-col lg:flex-row text-white">
              <div className="flex flex-col items-center justify-center tracking-widest ">
                <p className="font-semibold text-5xl">1000+</p>
                <p className="font-light text-2xl">Designs</p>
              </div>
              <div className="flex flex-col items-center justify-center tracking-widest">
                <p className="font-semibold text-5xl">30+</p>
                <p className="font-light text-2xl">Products</p>
              </div>
              <div className="flex flex-col items-center justify-center tracking-widest">
                <p className="font-semibold text-5xl">58+</p>
                <p className="font-light text-2xl">Website Developments</p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="w-full h-fit flex flex-col items-center justify-center mt-24 scroll-mt-32"
          id="Portfolio"
        >
          <p className="text-[#C4C4C4] text-xl">Portfolio</p>
          <div className="w-full h-fit flex flex-col items-center justify-center gap-10 mt-2">
            <div className="flex flex-col items-center justify-center font-bold text-2xl lg:text-4xl">
              <h3>The software that we build</h3>
              <h3>takes our clients to the next level</h3>
            </div>
            <div className="w-fit h-fit gap-10 flex flex-col lg:flex-row items-center justify-around flex-wrap">
              {portFolioContent.map((e, i) => (
                <PortfolioCard {...e} key={i} />
              ))}
            </div>
            <Button title="Learn More" />
          </div>
        </section>

        <section
          className="h-fit w-screen flex flex-col items-center justify-center mt-24 scroll-mt-32 "
          id="Testimonials"
        >
          <p className="text-[#C4C4C4] text-xl">Testimonials</p>
          <div className="w-full h-fit flex flex-col items-center justify-center gap-10 mt-2">
            <div className="flex flex-col items-center justify-center font-bold text-2xl lg:text-4xl">
              <h3>What clients love in working</h3>
              <h3>with Albatech Team</h3>
            </div>
            <div className="h-full lg:h-[580px] w-screen flex items-center justify-center ">
              <div className="h-full w-10/12 p-4 relative">
                <div className="w-full h-full">
                  <img
                    src={textureTestimonials}
                    alt="testimonial-texture"
                    className="object-cover"
                  />
                </div>
                <img
                  src={testimonials}
                  alt="testimonials"
                  className="absolute inset-0"
                />
              </div>
            </div>
            <div className="w-4/5 h-fit">
              <LogoSlider />
            </div>
            <div className="h-fit flex flex-col items-center justify-center w-4/5 bg-[#FFCE07] rounded-3xl p-5 gap-4">
              <p className="text-base lg:text-lg font-medium">
                Is software important for your business?
              </p>
              <p className="text-2xl lg:text-4xl font-medium">
                Build it with Albatech
              </p>
              <Button title="Consultation Now" useBorder={true} />
            </div>
          </div>
        </section>

        <footer className="w-screen flex flex-col items-center justify-center my-10">
          <div className="w-4/5 flex flex-col lg:flex-row items-center justify-between border-y-2 border-[#C4C4C4] py-10 gap-10">
            <div className="flex flex-col items-center lg:items-start gap-10 flex-1">
              <img src={albaLogo} alt="alba-logo" />
              <p>
                Albatech act as corporate partner to help digitalize their
                business to accelerate trends in remote work
              </p>
              <div className="flex items-center justify-center gap-10">
                <img src={fb} alt="facebook" />
                <img src={ig} alt="instagram" />
                <img src={linkedin} alt="linkedin" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-10 flex-1">
              <h5 className="font-bold">Website</h5>
              <ul className="flex flex-col items-center justify-center gap-6">
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
            </div>
            <div className="flex flex-col items-center justify-start gap-10 flex-1 grow">
              <h5 className="font-bold">Contact</h5>
              <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start justify-center gap-5">
                <p className="text-left">
                  The prominence Blok 38D No.25 Jl. Jalur Sutera Barat, Alam
                  Sutera, Kota Tanggerang, Banten 15134
                </p>
                <p>
                  <span className="font-semibold">P :</span> +62 81 18893383
                </p>
                <p>
                  <span className="font-semibold">E :</span> info@albatechid
                </p>
              </div>
            </div>
          </div>
          <div className="w-4/5 flex items-center justify-between text-[#C4C4C4] text-xs lg:text-base mt-2">
            <p>©PT.Alba Digital Teknologi 2021 | All Rights Reserved.</p>
            <ul className="flex items-center gap-2">
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>|</li>
              <li>
                <a href="#">Terms of service</a>
              </li>
            </ul>
          </div>
        </footer>
      </main>
    </>
  );
};

export default App;
