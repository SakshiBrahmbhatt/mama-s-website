import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
  faSearch,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Mobile View */}
      <div
        className="d-md-none fixed-header"
        style={{ position: "fixed", top: 0, zIndex: 1000, width: "100%" }}
      >
        <div className="p-2 text-center" style={{ backgroundColor: "gray" }}>
          <a href="tel:08048037704" className="text-decoration-none text-light">
            <FontAwesomeIcon icon={faPhone} /> 8048037704
          </a>
        </div>
        <div
          className="p-2 d-flex justify-content-between align-items-center"
          style={{ backgroundColor: "#252525" }}
        >
          <Link to="/" className="text-decoration-none text-light">
            <img
              src="./logowithbgw.png"
              alt="Logo"
              style={{ height: "50px", width: "100px" }}
            />
          </Link>
          <div className="d-flex">
            <a href="#" className="text-decoration-none text-light me-3">
              <FontAwesomeIcon icon={faSearch} />
            </a>
            <Link to="/Cart" className="text-decoration-none text-light">
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
          </div>
        </div>
      </div>

      {/* Tablet View */}
      <div
        className="d-none d-md-block d-lg-none fixed-header"
        style={{ position: "fixed", top: 0, zIndex: 1000, width: "100%" }}
      >
        <div
          className="p-2 d-flex justify-content-end align-items-center"
          style={{ backgroundColor: "gray" }}
        >
          <Link to="/Location" className="text-decoration-none text-light me-4">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Vadodara
          </Link>
          <a
            href="tel:08048037704"
            className="text-decoration-none text-light ms-3 me-4"
          >
            <FontAwesomeIcon icon={faPhone} /> 8048037704
          </a>
          <a
            href="mailto:infinityfrp611@gmail.com"
            className="text-decoration-none text-light ms-3 me-4"
          >
            <FontAwesomeIcon icon={faEnvelope} /> infinityfrp611@gmail.com
          </a>
        </div>

        {/* Logo, menu icon row */}
        <div
          className="p-2 d-flex justify-content-between align-items-center"
          style={{ backgroundColor: "#252525" }}
        >
          <Link to="/" className="text-decoration-none text-light me-4">
            <img
              src="./logowithbgw.png"
              alt="Logo"
              style={{ height: "50px", width: "100px" }}
            />
          </Link>
          <div className="d-flex align-items-center">
            <button
              className="btn text-light"
              onClick={toggleMenu}
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div
            className="position-relative top-0 start-0 end-0 bottom-0"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              zIndex: 10,
            }}
          >
            <div className="p-4">
              <ul className="list-unstyled text-light">
                <li className="mb-2">
                  <Link to="/" className="text-decoration-none text-light">
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  {/* About drop down */}
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle text-light"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      About
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          to="/OurTeam"
                          className="text-decoration-none text-dark dropdown-item"
                        >
                          Our Team
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/OurCustomers"
                          className="text-decoration-none text-dark dropdown-item"
                        >
                          Our Customers
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Projects"
                          className="text-decoration-none text-dark dropdown-item"
                        >
                          Projects
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/FAQs"
                          className="text-decoration-none text-dark dropdown-item"
                        >
                          FAQs
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mb-2">
                  {/* Products drop down */}
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle text-light"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Product
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          to="/FRP Storage Tanks"
                          className="text-decoration-none text-dark dropdown-item"
                        >
                          FRP Storage Tanks
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/FRP Canopies"
                          className="text-decoration-none text-dark dropdown-item"
                        >
                          FRP Canopies
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/FRP Plain & Corrugated Sheets"
                          className="text-decoration-none text-dark dropdown-item"
                        >
                          FRP Plain & Corrugated Sheets
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/FRP Molded Grating"
                          className="text-decoration-none text-dark dropdown-item"
                        >
                          FRP Molded Grating
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/FRP Moulded Grating"
                          className="text-decoration-none text-dark dropdown-item"
                        >
                          FRP Moulded Grating
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Products/View"
                          className="text-decoration-none text-dark dropdown-item"
                        >
                          View all...
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mb-2">
                  <Link
                    to="/LatestNews"
                    className="text-decoration-none text-light"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Latest News
                  </Link>
                </li>
                <li className="mb-2">
                  {/* Gallery drop down */}
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle text-light"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Gallery
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          to="/Images"
                          className="text-decoration-none text-dark dropdown-item"
                        >
                          Images
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Videos"
                          className="text-decoration-none text-dark dropdown-item"
                        >
                          Videos
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mb-2">
                  {/* More drop down */}
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle text-light"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      More
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          to="/More"
                          className="text-decoration-none text-dark dropdown-item"
                        >
                          Manufacturing of ...
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mb-2">
                  <Link
                    to="/Contact"
                    className="text-decoration-none text-light"
                  >
                    Contact
                  </Link>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none text-light me-3">
                    <FontAwesomeIcon icon={faSearch} />
                  </a>
                  <Link to="/Cart" className="text-decoration-none text-light">
                    <FontAwesomeIcon icon={faCartShopping} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Desktop View */}
      <div
        className="d-none d-lg-block fixed-header"
        style={{ position: "fixed", top: 0, zIndex: 1000, width: "100%" }}
      >
        <div
          className="p-2 d-flex justify-content-end align-items-center"
          style={{ backgroundColor: "gray" }}
        >
          <Link to="/Location" className="text-decoration-none text-light me-4">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Vadodara
          </Link>
          <a
            href="tel:08048037704"
            className="text-decoration-none text-light ms-3 me-4"
          >
            <FontAwesomeIcon icon={faPhone} /> 8048037704
          </a>
          <a
            href="mailto:infinityfrp611@gmail.com"
            className="text-decoration-none text-light ms-3 me-4"
          >
            <FontAwesomeIcon icon={faEnvelope} /> infinityfrp611@gmail.com
          </a>
        </div>
        <div
          className="p-2 d-flex justify-content-between align-items-center"
          style={{ backgroundColor: "#252525" }}
        >
          <div className="d-flex align-items-center ms-5">
            <Link to="/" className="text-decoration-none text-light me-4">
              <img
                src="./logowithbgw.png"
                alt="Logo"
                style={{ height: "70px", width: "140px" }}
              />
            </Link>
          </div>
          <div className="d-flex align-items-center">
            <ul className="list-inline me-md-4 m-0 d-flex flex-column flex-md-row align-items-center">
              <li className="list-inline-item me-4 p-2">
                <Link to="/" className="text-decoration-none text-light">
                  Home
                </Link>
              </li>
              <li className="list-inline-item me-4 p-2">
                {/* About drop down */}
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle text-light"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        to="/OurTeam"
                        className="text-decoration-none text-dark dropdown-item"
                      >
                        Our Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/OurCustomers"
                        className="text-decoration-none text-dark dropdown-item"
                      >
                        Our Customers
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Projects"
                        className="text-decoration-none text-dark dropdown-item"
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/FAQs"
                        className="text-decoration-none text-dark dropdown-item"
                      >
                        FAQs
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-inline-item me-4 p-2">
                {/* Products drop down */}
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle text-light"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Product
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        to="/FRP Storage Tanks"
                        className="text-decoration-none text-dark dropdown-item"
                      >
                        FRP Storage Tanks
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/FRP Canopies"
                        className="text-decoration-none text-dark dropdown-item"
                      >
                        FRP Canopies
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/FRP Plain & Corrugated Sheets"
                        className="text-decoration-none text-dark dropdown-item"
                      >
                        FRP Plain & Corrugated Sheets
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/FRP Molded Grating"
                        className="text-decoration-none text-dark dropdown-item"
                      >
                        FRP Molded Grating
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/FRP Moulded Grating"
                        className="text-decoration-none text-dark dropdown-item"
                      >
                        FRP Moulded Grating
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Products"
                        className="text-decoration-none text-dark dropdown-item"
                      >
                        View all...
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-inline-item me-4 p-2">
                <Link
                  to="/LatestNews"
                  className="text-decoration-none text-light"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Latest News
                </Link>
              </li>
              <li className="list-inline-item me-4 p-2">
                {/* Gallery drop down */}
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle text-light"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Gallery
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        to="/Images"
                        className="text-decoration-none text-dark dropdown-item"
                      >
                        Images
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Videos"
                        className="text-decoration-none text-dark dropdown-item"
                      >
                        Videos
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-inline-item me-4 p-2">
                {/* More drop down */}
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle text-light"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    More
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        to="/More"
                        className="text-decoration-none text-dark dropdown-item"
                      >
                        Manufacturing of ...
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-inline-item p-2">
                <Link to="/Contact" className="text-decoration-none text-light">
                  Contact
                </Link>
              </li>
              <li className="list-inline-item me-4 p-2">
                <a href="#" className="text-decoration-none text-light me-3">
                  <FontAwesomeIcon icon={faSearch} />
                </a>
                <Link to="/Cart" className="text-decoration-none text-light">
                  <FontAwesomeIcon icon={faCartShopping} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
