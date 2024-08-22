import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface AbProPageIndicatorProps {
  Page: string;
  AbsPage: string;
}

export default function AbProPageIndicator({ Page, AbsPage }: AbProPageIndicatorProps) {
  return (
    <div style={{ position: "relative", paddingTop: "125px"}}>
      {/* Your image */}
      <div
        style={{
          backgroundImage: 'url("./image.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "300px",
        }}
      ></div>

      {/* Black overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          opacity: 0.65,
        }}
      ></div>

      {/* Centered text */}
      <div
        className="container"
        style={{
          position: "absolute",
          top: "60%", // Vertically centered
          left: "50%", // Horizontally centered
          transform: "translate(-50%, -50%)", // Adjust for centering
          textAlign: "center", // Center text within this div
          color: "white", // Text color
        }}
      >
        <div className="row">
          <div className="container h1">{Page}</div>
        </div>
        <div className="row">
          <div className="container h5" style={{color: "#454545"}}>
            <Link to="/" className="text-light mx-2">
              Home
            </Link>
            <FontAwesomeIcon icon={faAngleRight} className="text-light mx-2" />
            <Link to={`/${AbsPage}`} className="text-light mx-2">
              {AbsPage}
            </Link>
            <FontAwesomeIcon icon={faAngleRight} className="text-light mx-2" />
            {Page}
          </div>
        </div>
      </div>
    </div>
  );
}
