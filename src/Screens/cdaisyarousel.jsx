import { useState, useRef, useCallback } from "react";

const Carousel = ({ projects }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust sensitivity
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={carouselRef}
      className="carousel carousel-center rounded-box overflow-x-scroll flex gap-4 p-4 cursor-grab active:cursor-grabbing select-none transition-transform duration-300 ease-in-out"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {projects.map((project) => (
        <div
          key={project.id}
          className="carousel-item relative w-80 h-128 transition-transform duration-300 ease-in-out hover:scale-110"
          draggable="false"
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover rounded-md"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 p-4 text-center">
            <h2 className="text-white text-lg font-bold">{project.name}</h2>
            <p className="text-white text-sm">{project.description}</p>
            <a
              href={project.watchLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-300 transition"
            >
              Watch Case Study
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
