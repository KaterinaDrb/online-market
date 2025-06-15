"use client";
import React, { useState } from "react";

const Input = ({
  disabled = false,
  error,
  startIcon: StartIcon,
  endIcon: EndIcon,
  supportingText,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClearInput = () => {
    setInputValue("");
  };

  const baseStyles =
    "text-black flex items-center justify-between w-80 h-12 border-2 rounded-lg px-2 py-4 my-1 border-black";

  const Styles = {
    inactive: "border-neutral-400 text-neutral-400",
    hover: "hover:border-neutral-500 hover:text-neutral-500",
    focused: "border-primary text-primary shadow-xs shadow-current",
    disabled: "border-neutral-300 text-neutral-300",
    error: "border-red-errors text-red-errors",
  };

  const style = disabled
    ? Styles.disabled
    : error
    ? Styles.error
    : `${Styles.inactive} ${isFocused ? Styles.focused : Styles.hover}`;

  return (
    <div>
      <div className={`${baseStyles} ${style}`} tabIndex={0}>
        {StartIcon && <StartIcon />}
        <input
          className="focus:outline-none"
          placeholder="label"
          value={inputValue}
          onChange={handleInputChange}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {EndIcon && (
          <button
            type="button"
            onClick={handleClearInput}
            aria-label="Clear input"
          >
            <EndIcon />
          </button>
        )}
      </div>
      {error && supportingText && (
        <p className="text-xs text-red-errors">{supportingText}</p>
      )}
    </div>
  );
};

export default Input;
