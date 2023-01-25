import React, { FC } from "react";

interface ComponentProps {
  banner: string;
  category: string;
  title: string;
  description: string;
}

const PortfolioCard: FC<ComponentProps> = (props) => {
  return (
    <div className="w-[344px] h-[410px] flex flex-col items-center justify-center">
      <div className="transition ease-in-out h-full border border-[#C4C4C4] hover:border-[#FFCE07] rounded-xl">
        <div>
          <img src={props.banner} alt="build-or-scale-up" />
        </div>
        <div className="transition ease-in-out delay-75 flex h-fit flex-col items-start px-4 pt-4  grow">
          <p className="text-[#C4C4C4] text-xs">{props.category}</p>
          <h6 className="text-[#FFCE07] text-lg">{props.title}</h6>
          <p className="text-sm text-left text-[#272727] ">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
