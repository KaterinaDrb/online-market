import React from "react";

const Button = ({
  color = "primary",
  disabled = false,
  style = "fill",
  label = "Add to cart",
  startIcon: StartIcon,
  endIcon: EndIcon,
  ...props
}) => {
  const baseStyles =
    "flex items-center justify-center w-44 h-12 font-normal px-3 py-2 border-2 rounded-lg";
  //состояние: default, hover, disabled
  //цвет: primary, secondary
  //стиль: fill, outlined, text, small text

  const colorStyles = {
    primary: {
      fill: {
        default: "bg-primary border-primary text-white cursor-pointer",
        hover: "hover:bg-primary-600 hover:border-primary-600",
        disabled:
          "bg-primary-50 text-white border-primary-50 cursor-not-allowed",
      },
      outlined: {
        default: "bg-white border-primary text-primary cursor-pointer",
        hover: "hover:text-primary-600 hover:border-primary-600",
        disabled:
          "bg-white text-primary-50 border-primary-50 cursor-not-allowed",
      },
      text: {
        default: "bg-white border-white text-primary cursor-pointer",
        hover: "hover:text-primary-600",
        disabled: "bg-white text-primary-50 border-white cursor-not-allowed",
      },
      smallText: {
        default: "bg-white border-white text-primary text-sm cursor-pointer",
        hover: "hover:text-primary-600",
        disabled:
          "bg-white text-primary-50 border-white text-sm cursor-not-allowed",
      },
    },
    secondary: {
      fill: {
        default: "bg-secondary text-white border-secondary cursor-pointer",
        hover: "hover:bg-secondary-500 hover:border-secondary-500",
        disabled:
          "bg-secondary-100 text-white border-secondary-100 cursor-not-allowed",
      },
      outlined: {
        default: "bg-white text-secondary border-secondary cursor-pointer",
        hover: "hover:text-secondary-500 hover:border-secondary-500",
        disabled:
          "bg-white text-secondary-100 border-secondary-100 cursor-not-allowed",
      },
      text: {
        default: "bg-white text-secondary border-white cursor-pointer",
        hover: "hover:text-secondary-500",
        disabled: "bg-white text-secondary-100 border-white cursor-not-allowed",
      },
    },
  };

  const currentColorStyles = colorStyles[color] || colorStyles.primary;
  const currentStyles = disabled
    ? currentColorStyles[style].disabled
    : `${currentColorStyles[style].default} ${currentColorStyles[style].hover}`;

  return (
    <button
      className={`${baseStyles} ${currentStyles}`}
      disabled={disabled}
      {...props}
    >
      {StartIcon && <StartIcon />}
      {label}
      {EndIcon && <EndIcon />}
    </button>
  );
};

export default Button;
