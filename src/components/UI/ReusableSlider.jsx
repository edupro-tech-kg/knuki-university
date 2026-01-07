import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import PropTypes from "prop-types";

const ReusableSlider = ({
    images = [],
    type = "default",
    showArrows = true,
    showNumbers = false,
    showDots = true,
    autoplay = true,
    autoplayInterval = 2000,
    overlap = false,
    className = "",
    imageClassName = "",
    dotsPosition = "top",
    mobilePosition = "top",
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () =>
        setCurrentSlide((prev) => (prev + 1) % images.length);

    const prevSlide = () =>
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    useEffect(() => {
        if (!autoplay || images.length <= 1) return;

        const interval = setInterval(() => {
            nextSlide();
        }, autoplayInterval);

        return () => clearInterval(interval);
    }, [autoplay, autoplayInterval, images.length, currentSlide]);

    if (!images.length) return null;

    return (
        <div className={`${type === "default" ? "bg-[#751715]" : ""} ${className}`}>
            {type === "default" && showArrows && (
                <div className="flex justify-between items-center text-white z-20 relative">
                    <button
                        onClick={prevSlide}
                        className="flex items-center justify-center h-10 w-10 border border-white rounded-full"
                        aria-label="Previous slide"
                    >
                        <FaArrowLeft size={14} />
                    </button>

                    {showNumbers && (
                        <div className="flex items-center gap-2 text-base sm:text-lg">
                            <p>
                                {String(currentSlide + 1).padStart(2, "0")}/
                                <span className="text-xs sm:text-sm">{images.length}</span>
                            </p>
                            {showDots && (
                                <div className="flex gap-1 ml-3">
                                    {images.map((_, i) => (
                                        <span
                                            key={i}
                                            className={`h-1.5 w-1.5 rounded-full ${i === currentSlide ? "bg-white" : "bg-white/40"
                                                }`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    <button
                        onClick={nextSlide}
                        className="flex items-center justify-center h-10 w-10 border border-white rounded-full"
                        aria-label="Next slide"
                    >
                        <FaArrowRight size={14} />
                    </button>
                </div>
            )}

            {type === "round" ? (
                <div className="bg-[#751715] rounded-sm shadow-lg p-4 md:p-8 w-full flex flex-col items-center">
                    <div className="h-56 w-56 md:h-96 md:w-96 rounded-full overflow-hidden border-[6px] md:border-[8px] border-white shadow-2xl bg-white relative mb-4">
                        {images.map((image, i) => (
                            <img
                                key={i}
                                src={image.src}
                                alt={image.alt || `Slide ${i + 1}`}
                                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${i === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                                    }`}
                            />
                        ))}
                    </div>

                    {showDots && dotsPosition === "bottom" && (
                        <div className="flex justify-center gap-1.5">
                            {images.map((_, i) => (
                                <span
                                    key={i}
                                    className={`h-1.5 w-1.5 rounded-full ${i === currentSlide ? "bg-white" : "bg-white/40"
                                        }`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                <div className="relative w-full aspect-[4/3] ">

                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image.src}
                            alt={image.alt || `Slide ${i + 1}`}
                            className={`
    w-full
    max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg 
    xl:max-w-2xl
    object-cover
    absolute top-8
    left-1/2 -translate-x-1/2
    xl:left-auto xl:right-1/3 xl:translate-x-[43%] 
    transition-all duration-700 ease-in-out
    ${i === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}
    ${imageClassName}
  `}
                        />

                    ))}
                </div>

            )}
        </div>
    );
};

ReusableSlider.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string,
        })
    ).isRequired,
    type: PropTypes.oneOf(["default", "round"]),
    showArrows: PropTypes.bool,
    showNumbers: PropTypes.bool,
    showDots: PropTypes.bool,
    autoplay: PropTypes.bool,
    autoplayInterval: PropTypes.number,
    overlap: PropTypes.bool,
    className: PropTypes.string,
    imageClassName: PropTypes.string,
    dotsPosition: PropTypes.oneOf(["top", "bottom"]),
    mobilePosition: PropTypes.oneOf(["top", "left"]),
};

export default ReusableSlider;