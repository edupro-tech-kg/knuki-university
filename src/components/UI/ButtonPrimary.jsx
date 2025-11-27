import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";

const ButtonPrimary = ({
  children,
  hasIcon = false,
  className = "",
  onClick,
  disabled = false,
  id = "button-primary",
  resetCondition = false,
  completed = false,
  size = "md", // Размер по умолчанию
  ...rest
}) => {
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (completed !== undefined) return;

    const savedState = localStorage.getItem(`button-${id}-completed`);
    if (savedState === "true") {
      setIsCompleted(true);
    }
  }, [id, completed]);

  useEffect(() => {
    if (completed !== undefined) return;
    localStorage.setItem(`button-${id}-completed`, isCompleted.toString());
  }, [isCompleted, id, completed]);

  useEffect(() => {
    if (resetCondition) {
      setIsCompleted(false);
      localStorage.removeItem(`button-${id}-completed`);
    }
  }, [resetCondition, id]);

  useEffect(() => {
    if (completed !== undefined) {
      setIsCompleted(completed);
    }
  }, [completed]);

  //  размеры в baseClasses
  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "py-2 px-4 text-sm";
      case "lg":
        return "py-4 px-8 text-lg";
      case "auto":
        return "py-3 px-6 w-full sm:w-auto";
      default:
        return "py-3 px-6"; // md
    }
  };

  const baseClasses = `${getSizeClasses()} font-medium transition-all duration-200 whitespace-nowrap flex items-center justify-center border rounded-[66px]`;

  const defaultClasses =
    "border-black text-black bg-transparent hover:bg-black hover:text-white active:bg-gray-800 active:text-white";
  const completedClasses = "bg-[#EEEEEE] text-[#898989] border-[#EEEEEE] cursor-not-allowed";
  const disabledClasses = "bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed";

  const handleClick = async (event) => {
    if (isCompleted || disabled) return;

    try {
      if (onClick) {
        await onClick(event);
        if (completed === undefined) {
          setIsCompleted(true);
        }
      }
    } catch (error) {
      console.error("Button click error:", error);
    }
  };

  const getButtonClasses = () => {
    if (disabled) return disabledClasses;
    if (isCompleted) return completedClasses;
    return defaultClasses;
  };

  const getIconClasses = () => {
    if (disabled) return "text-gray-500";
    if (isCompleted) return "text-[#898989]";
    return "text-black group-hover:text-white";
  };

  const isButtonDisabled = disabled || isCompleted;
  const groupClass = hasIcon && !isButtonDisabled ? "group" : "";

  return (
    <button
      className={`${baseClasses} ${getButtonClasses()} ${groupClass} ${className}`}
      disabled={isButtonDisabled}
      onClick={handleClick}
      {...rest}
    >
      {children}

      {hasIcon && (
        <FaArrowRight
          className={`ml-2 transition-colors duration-200 ${getIconClasses()}`}
          aria-hidden="true"
        />
      )}
    </button>
  );
};

export default ButtonPrimary;
