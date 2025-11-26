export default function ButtonSecondary({ 
  children,
  onClick,
  disabled = false,
  backgroundColor = "#A22220",
  hoverColor = "#751715",
  disabledBackground = "#FFFFFF",
  disabledText = "#898989",
  textColor = "#FFFFFF",
  
  // Размеры
  width = "w-[150px] sm:w-[180px]",
  height = "h-[45px] sm:h-[50px]",
  
  // Отступы
  padding = "px-4 py-2 sm:px-6 sm:py-3",
  
  // Текст
  textSize = "text-sm sm:text-base lg:text-lg",
  fontWeight = "font-semibold",
  
  // Стили
  borderRadius = "rounded",
  
  className = "",
  type = "button",
  ...props
}) {
  const baseClasses = `
    inline-flex items-center justify-center
    transition-all duration-200 ease-in-out
    focus:outline-none
    disabled:cursor-not-allowed
    border border-transparent
    ${width}
    ${height}
    ${padding}
    ${textSize}
    ${fontWeight}
    ${borderRadius}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  const buttonStyle = {
    backgroundColor: disabled ? disabledBackground : backgroundColor,
    color: disabled ? disabledText : textColor,
    borderColor: disabled ? disabledText : 'transparent',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={buttonStyle}
      className={baseClasses}
      {...props}
      onMouseOver={(e) => {
        if (!disabled && hoverColor) {
          e.target.style.backgroundColor = hoverColor;
        }
      }}
      onMouseOut={(e) => {
        if (!disabled) {
          e.target.style.backgroundColor = backgroundColor;
        }
      }}
    >
      {children}
    </button>
  );
}