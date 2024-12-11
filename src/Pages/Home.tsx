import Content from "../Components/Content";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HomeSlidder from "../Components/HomeSlider";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <div
        style={{
          background: 'url("./image.png") fixed center',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Header></Header>
        <HomeSlidder></HomeSlidder>
        <div style={{ backgroundColor: "white" }}>
          {/* About us */}
          <Content
            content='INFINITY INDUSTRIAL FIBER Infinity Industrial Fiber is a full-service turnkey solution provider in the field of corrosion resistant glass fiber reinforced plastic (FRP) Gratings, Cable Tray, tanks, canopies, sheets... Founded in ...<br><br><Link to="/About">READ MORE</Link> <Link to="/Contact">CONTACT US</Link>'
            className="text-center fs-5 ms-1"
            style={{ padding: "17px 0px 67px", color: "#888B90" }}
          ></Content>
          {/* Product Display */}
          <Content
            content='<h1>Our Products</h1><hr style="width: 10%;"><br>'
            className=""
            style={{ padding: "17px 0px 15px" }}
          ></Content>
          <div style={{ padding: "0px 0px 67px" }}>
            <div className="container">
              <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3 text-center">
                <div className="col">
                  <div
                    className="p-3"
                    style={{ backgroundColor: "#F8F8FF" }}
                  >
                    <img
                      src="./Storage.png"
                      style={{ height: "200px", width: "200px" }}
                    />
                    <br />
                    <br />
                    <p>FRP Storage Tanks</p>
                    <br />
                    <Link to="/Products" className="text-decoration-none text-dark">
                      View More
                    </Link>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="p-3"
                    style={{ backgroundColor: "#F8F8FF" }}
                  >
                    <img
                      src="./canopies.jpg"
                      style={{ height: "200px", width: "200px" }}
                    />
                    <br />
                    <br />
                    <p>Motor Canopies</p>
                    <br />
                    <Link to="/Products" className="text-decoration-none text-dark">
                      View More
                    </Link>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="p-3"
                    style={{ backgroundColor: "#F8F8FF" }}
                  >
                    <img
                      src="./Grating.jpg"
                      style={{ height: "200px", width: "200px" }}
                    />
                    <br />
                    <br />
                    <p>FRP Grating</p>
                    <br />
                    <Link to="/Products" className="text-decoration-none text-dark">
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Organization */}
          <div className="" style={{ padding: "0px 170px 50px" }}>
            <table
              style={{
                borderCollapse: "collapse",
                width: "100%",
                margin: "50px 0",
              }}
            >
              <tr>
                <td
                  rowSpan={11}
                  style={{ paddingRight: "20px", verticalAlign: "top" }}
                >
                  <img
                    src="./sheets.jpg"
                    style={{ height: "300px", width: "400px" }}
                  ></img>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 style={{ marginBottom: "20px" }}>
                    ABOUT OUR ORGANIZATION
                  </h3>
                </td>
              </tr>
              <tr>
                <td style={{ color: "#888B90" }}>INFINITY INDUSTRIAL FIBER</td>
              </tr>
              <tr>
                <td style={{ color: "#888B90" }}>
                  Infinity Industrial Fiber is a full-service turnkey solution
                  provider in the field of corrosion resistant glass fiber
                  reinforced plastic (FRP) Gratings, Cable Tray, tanks,
                  canopies, sheets... Founded in{" "}
                  <Link
                    to="/About"
                    className="text-decoration-none"
                    style={{ color: "#888B90" }}
                  >
                    ...Read More
                  </Link>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "0px 300px", textAlign: "center" }}>
                  <button
                    style={{
                      border: "none",
                      borderRadius: "25px",
                      backgroundColor: "black",
                      width: "50px",
                      height: "50px",
                    }}
                  >
                    <Link
                      to="/About"
                      className="text-decoration-none"
                      style={{ color: "#888B90" }}
                    >
                      <FontAwesomeIcon icon={faHouseChimney} />
                    </Link>
                  </button>
                  <br />
                  <p style={{ fontSize: "25px" }}>19</p>
                  Products Available
                </td>
              </tr>
            </table>
          </div>
        </div>
        {/* Email */}
        <div style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <Content
            content="HI WORLD"
            className="text-center text-light"
            style={{ padding: "0px 0px 50px" }}
          ></Content>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
