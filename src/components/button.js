import React from "react";
import Image from "next/image";

const Button = ({ color = "primary", state = "default" }) => {
  const baseStyles =
    "flex items-center w-44 h-12 font-normal px-3 py-2 border-2 rounded-lg";
  //состояние: default, hover, disabled
  //цвет: primary, secondary

  const colorStyles = {
    primary: {
      default: "bg-primary border-primary text-white",
      hover: "hover:bg-primary-600 hover:border-primary-600",
      disabled: "bg-primary-50 text-white border-primary-50",
    },
    secondary: {
      default: "bg-secondary text-white border-secondary",
      hover: "hover:bg-secondary-500 hover:border-secondary-500",
      disabled: "bg-secondary-100 text-white border-secondary-100",
    },
  };

  const currentColorStyles = colorStyles[color] || colorStyles.primary;

  const currentStyles =
    state === "disabled"
      ? currentColorStyles.disabled
      : `${currentColorStyles.default} ${currentColorStyles.hover}`;

  return (
    <button
      className={`${baseStyles} ${currentStyles}`}
      disabled={state === "disabled"}
    >
      <ShoppingCartIcon />
      Add to cart
      <ShoppingCartIcon />
    </button>
  );
};

export default Button;

const ShoppingCartIcon = () => {
  return (
    <Image
      src="/shopping-cart.svg"
      alt="Shopping Cart"
      width={24}
      height={24}
      className="mx-0.5"
    />
  );
};
