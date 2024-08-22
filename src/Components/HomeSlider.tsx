import { useState } from "react";
import { Carousel } from "react-bootstrap";

const HomeSlider: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{ position: "relative", paddingTop: "calc(100px + 20px)" }}> {/* Adjust based on your header height */}
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        prevIcon={null} // Remove left arrow
        nextIcon={null} // Remove right arrow
        indicators={false} // Disable default indicators
        interval={2500}
      >
        {["./image.png", "./image2.jpg", "./image3.jpg", "./image4.jpg"].map(
          (image, idx) => (
            <Carousel.Item key={idx}>
              <div
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "677px",
                  position: "relative",
                }}
              >
                {/* The overlay with opacity */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    zIndex: 1,
                  }}
                ></div>
              </div>
            </Carousel.Item>
          )
        )}
      </Carousel>

      {/* Fixed text */}
      <div
        style={{
          position: "absolute",
          top: "55%", // Center vertically
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "80px",
          fontWeight: "bold",
          textAlign: "center",
          zIndex: 2,
          width: "100%", // Ensure the text container takes full width
          padding: "0 10px", // Add padding if needed to prevent text from touching edges
        }}
      >
        INFINITY INDUSTRIAL FIBER
      </div>

      {/* Custom Dots */}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
        }}
      >
        {["./image.png", "./image2.jpg", "./image3.jpg", "./image4.jpg"].map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setIndex(idx)}
            style={{
              backgroundColor: index === idx ? "#033E3E" : "white",
              border: "none",
              borderRadius: "50%",
              height: "12px",
              width: "10px",
              margin: "0 5px",
              cursor: "pointer",
            }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;
