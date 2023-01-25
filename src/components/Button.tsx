import React, { FC } from "react";

interface ComponentProps {
  title: string;
  useBorder?: boolean;
  clickAction?: any;
}

const Button: FC<ComponentProps> = ({
  title,
  useBorder = false,
  clickAction,
}) => {
  return (
    <button
      onClick={clickAction}
      className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 font-bold bg-[#FFCE07] p-[20px] rounded-3xl min-w-[188px] h-[57px] flex items-center justify-center text-sm ${
        useBorder && "border border-black"
      }`}
    >
      {title}
    </button>
  );
};

export default Button;
