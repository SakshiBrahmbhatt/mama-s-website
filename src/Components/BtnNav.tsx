import { useState } from "react";
import { Link } from "react-router-dom";

export default function BtnNav() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end", // Corrected "right" to "flex-end"
      }}
    >
      <Link
        to="/Contact"
        style={{
          backgroundColor: isHovered ? "#4D4D4F" : "#3A3B3C",
          color: "white",
          margin: "50px 120px",
          padding: "10px 20px",
          fontSize: "18px",
          textDecoration: "none",
          transition: "background-color 0.3s", // Smooth transition for color change
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        CONTACT US
      </Link>
    </div>
  );
}
