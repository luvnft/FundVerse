import React from "react";

const CustomButton = ({
  btnType,
  title,
  handleClick,
  styles,
  isDisabled = false,
}) => {

  return (
    <button
      type={btnType}
      className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] transition-all duration-300 hover:scale-95 focus:scale-105 outline-none focus:ring-4 ${styles} ${
        isDisabled && "bg-gray-500 cursor-not-allowed"
      }`}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
