import React, { FC } from "react";

interface componentProps {
  logo: string;
  title: string;
  description: string;
}

const PackagesCard: FC<componentProps> = (props) => {
  return (
    <div className="transition ease-in-out w-[345px] h-[183px] flex flex-col items-start p-8 justify-center border-2 border-[#C4C4C4] hover:border-[#FFCE07] rounded-xl">
      <img src={props.logo} alt="build-or-scale-up" className=" mt-2" />
      <h3 className="font-bold text-lg text-[#FFCE07]">{props.title}</h3>
      <p className="text-sm">{props.description}</p>
    </div>
  );
};

export default PackagesCard;
