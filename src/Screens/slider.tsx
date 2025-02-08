import React, { useState, useRef } from "react";

interface SlideData {
  id: number;
  title: string;
  imageUrl: string;
  webp439Url: string;
  webpUrl: string;
  aboutText: string;
  descriptionText: string;
}

const Slider: React.FC = () => {
  const slidesData: SlideData[] = [
    {
      id: 2259,
      title: "Slide",
      imageUrl:
        "https://cdn.smartslider3.com/wp-content/uploads/slider/cache/1ef1df87c569c25927239af0a1ddb1be/slide2.jpg",
      webp439Url:
        "https://cdn.smartslider3.com/wp-content/uploads/slider/cache/489f316d16e6ba16bab3aea2e180fe86/slide2.webp",
      webpUrl:
        "https://cdn.smartslider3.com/wp-content/uploads/slider/cache/4f2dfa6a2d4dbf637a9641106c15829c/slide2.webp",
      aboutText: "ABOUT PROJECT",
      descriptionText:
        "Cras nec odio sit amet erat tristique malesuada nec non libero",
    },
    {
      id: 2260,
      title: "Slide",
      imageUrl:
        "https://cdn.smartslider3.com/wp-content/uploads/slider/cache/0e368976f2609fa4fbb268147529e9e9/slide1.jpg",
      webp439Url:
        "https://cdn.smartslider3.com/wp-content/uploads/slider/cache/775573a803edea45624d46610c942295/slide1.webp",
      webpUrl:
        "https://cdn.smartslider3.com/wp-content/uploads/slider/cache/1aab6f585dcd095e8ec76a4a80ec011f/slide1.webp",
      aboutText: "ABOUT PROJECT",
      descriptionText:
        "Cras nec odio sit amet erat tristique malesuada nec non libero",
    },
    // Add remaining slides here...
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [draggedX, setDraggedX] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const slideWidth = 600;
  const totalSlides = slidesData.length;

  // Navigate to next slide
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  // Navigate to previous slide
  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  // --- TOUCH EVENTS ---
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    if (sliderRef.current) {
      sliderRef.current.style.cursor = "grabbing";
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    setDraggedX(startX - currentX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (sliderRef.current) {
      sliderRef.current.style.cursor = "grab";
    }

    if (Math.abs(draggedX) > slideWidth / 4) {
      draggedX > 0 ? goToNextSlide() : goToPrevSlide();
    }
    setDraggedX(0);
  };

  // --- MOUSE EVENTS ---
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    if (sliderRef.current) {
      sliderRef.current.style.cursor = "grabbing";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    setDraggedX(startX - currentX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (sliderRef.current) {
      sliderRef.current.style.cursor = "grab";
    }

    if (Math.abs(draggedX) > slideWidth / 4) {
      draggedX > 0 ? goToNextSlide() : goToPrevSlide();
    }
    setDraggedX(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (sliderRef.current) {
        sliderRef.current.style.cursor = "grab";
      }
      setDraggedX(0);
    }
  };

  return (
    <div className="slider-wrap">
      <div className="n2_clear">
        <ss3-force-full-width
          data-overflow-x="body"
          data-horizontal-selector="body"
          style={{
            transform: "translate3d(0px, 0px, 0px)",
            width: "1875px",
            opacity: 1,
          }}
        >
          <div
            className="n2-section-smartslider fitvidsignore n2_clear"
            data-ssid="621"
            tabIndex={0}
            role="region"
            aria-label="Slider"
          >
            <div
              id="n2-ss-621-align"
              className="n2-ss-align n2-ss-align-visible"
            >
              <div className="n2-padding">
                <div
                  id="n2-ss-621"
                  data-creator="Smart Slider 3"
                  data-responsive="fullwidth"
                  className="n2-ss-slider n2-ow n2-has-hover n2-ss-showcase-horizontal n2-ss-desktopPortrait n2-ss-loaded"
                  data-device-mode="desktopPortrait"
                >
                  <div className="n2-ss-slider-wrapper-inside">
                    <div
                      ref={sliderRef}
                      className="n2-ss-slider-1 n2_ss__touch_element n2-ow"
                      style={{
                        cursor: isDragging ? "grabbing" : "grab",
                        touchAction: "pan-y",
                      }}
                      onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleTouchEnd}
                      onMouseDown={handleMouseDown}
                      onMouseMove={handleMouseMove}
                      onMouseUp={handleMouseUp}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="n2-ss-slider-2 n2-ow">
                        <div className="n2-ss-slider-3 n2-ow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1920 900"
                            data-related-device="desktopPortrait"
                            className="n2-ow n2-ss-preserve-size n2-ss-preserve-size--slider n2-ss-slide-limiter"
                            style={{ maxWidth: "1920px" }}
                          />
                          <div className="n2-ss-showcase-slides n2-ow n2-ss-showcase-slides--ready">
                            {slidesData.map((slide, index) => {
                              const isActive = index === currentSlide;
                              const offset =
                                (index - currentSlide) * slideWidth + draggedX;
                              const zIndex = isActive
                                ? 104
                                : 100 +
                                  slidesData.length -
                                  Math.abs(index - currentSlide);
                              const opacity = isActive
                                ? 1
                                : Math.abs(index - currentSlide) <= 2
                                ? 0.5
                                : 0;

                              return (
                                <div
                                  key={slide.id}
                                  data-first={index === 0 ? "1" : undefined}
                                  data-slide-duration="0"
                                  data-id={slide.id}
                                  data-slide-public-id={index + 1}
                                  data-title="Slide"
                                  className={`n2-ss-slide n2-ss-slide-${
                                    slide.id
                                  } n2-ow ${
                                    isActive ? "n2-ss-slide-active" : ""
                                  }`}
                                  style={{
                                    opacity,
                                    transform: `translate3d(${offset}px, 0px, 0px)`,
                                    zIndex,
                                    width: `${slideWidth}px`,
                                    height: "900px",
                                  }}
                                  aria-hidden={!isActive}
                                >
                                  <div
                                    className="n2-ss-slide-background"
                                    data-public-id={index + 1}
                                    data-mode="fill"
                                  >
                                    <div
                                      className="n2-ss-slide-background-image"
                                      data-blur="0"
                                      data-opacity="100"
                                      data-x="49"
                                      data-y="31"
                                      style={{
                                        "--ss-o-pos-x": "49%",
                                        "--ss-o-pos-y": "31%",
                                        margin: "0px",
                                        padding: "0px",
                                        filter: "blur(0px)",
                                      }}
                                    >
                                      <picture
                                        className="skip-lazy"
                                        data-skip-lazy="1"
                                      >
                                        <source
                                          srcSet={slide.webp439Url}
                                          type="image/webp"
                                          media="(max-width: 439px)"
                                        />
                                        <source
                                          srcSet={slide.webpUrl}
                                          type="image/webp"
                                        />
                                        <img
                                          src={slide.imageUrl}
                                          alt=""
                                          title=""
                                          loading="eager"
                                          className="skip-lazy"
                                        />
                                      </picture>
                                    </div>
                                    <div
                                      className="n2-ss-slide-background-color"
                                      style={{
                                        backgroundColor: "RGBA(0,0,0,0)",
                                      }}
                                    />
                                  </div>
                                  <div className="n2-ss-slide-inner">
                                    <div
                                      role="note"
                                      className="n2-ss-slide--focus"
                                      tabIndex={-1}
                                    >
                                      Slide
                                    </div>
                                    <div className="n2-ss-layers-container n2-ss-slide-limiter n2-ow">
                                      <div
                                        className="n2-ss-layer n2-ow n-uc-KDI91qnW8WWk"
                                        data-sstype="slide"
                                        style={{ perspective: "1000px" }}
                                      >
                                        <div className="n2-ss-section-main-content n2-ss-layer-content n2-ow">
                                          <div className="n2-ss-layer n2-ow n-uc-ndTSAmO5zBkD">
                                            <div className="n2-ss-item-content n2-ss-text n2-ow">
                                              {slide.aboutText}
                                            </div>
                                          </div>
                                          <div className="n2-ss-layer n2-ow n-uc-SnnHcWudEHEw">
                                            <div className="n2-ss-item-content n2-ss-text n2-ow">
                                              {slide.descriptionText}
                                            </div>
                                          </div>
                                          <div className="n2-ss-layer n2-ow n-uc-nf2YuG1CzHO9">
                                            <div className="n2-ss-button-container n2-ss-item-content n2-ow">
                                              <a
                                                className="n2-style-e6db759d51250fe8d138040e4889748f-heading n2-ow"
                                                href="#"
                                                onClick={(e) =>
                                                  e.preventDefault()
                                                }
                                                tabIndex={isActive ? 0 : -1}
                                              >
                                                <div>Learn More</div>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                            <div className="n2-ss-showcase-overlay n2-ow" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="n2-ss-slider-controls n2-ss-slider-controls-absolute-left-center">
                      <div
                        className="n2-ss-widget nextend-arrow n2-ow-all nextend-arrow-previous nextend-arrow-animated-fade"
                        id="n2-ss-621-arrow-previous"
                        role="button"
                        aria-label="previous arrow"
                        tabIndex={0}
                        onClick={goToPrevSlide}
                      >
                        &lt;
                      </div>
                    </div>
                    <div className="n2-ss-slider-controls n2-ss-slider-controls-absolute-right-center">
                      <div
                        className="n2-ss-widget nextend-arrow n2-ow-all nextend-arrow-next nextend-arrow-animated-fade"
                        id="n2-ss-621-arrow-next"
                        role="button"
                        aria-label="next arrow"
                        tabIndex={0}
                        onClick={goToNextSlide}
                      >
                        &gt;
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ss3-force-full-width>
      </div>
    </div>
  );
};

export default Slider;
