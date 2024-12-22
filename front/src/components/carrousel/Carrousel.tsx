import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "/carrousel 1.jpg", alt: "carrousel 1" },
    { src: "/carrousel 3.jpg", alt: "carrousel 2" },
    { src: "/carrousel 2.jpg", alt: "carrousel 3" },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="relative w-full mx-auto z-0" id="soyeldivdelcarrousel">
      <div className="overflow-hidden w-full">
        <div
          className="w-full h-1/4 flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Controles */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-2xl bg-prim-green text-prim-bone rounded-full p-2 shadow-lg hover:bg-sec-brown transition duration-300 z-10"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl bg-prim-green text-prim-bone rounded-full p-2 shadow-lg hover:bg-sec-brown transition duration-300 z-10"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Carousel;
