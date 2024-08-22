import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faCopyright } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebook,
  faTwitter,
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      {/* Mobile view */}
      <div className="d-md-none text-center">
        {/* Upper footer */}
        <div style={{ backgroundColor: "#252525" }}>
          <div className="container">
            <div className="row">
              <ul className="list-unstyled text-light">
                <br />
                <br />
                <li>OPENING HOURS</li>
                <br />
                <br />
                <div style={{ opacity: "0.5" }}>
                  <li>Mon : 8:00 AM to 7:00 PM</li>
                  <li>Tue : 8:00 AM to 7:00 PM</li>
                  <li>Wed : 8:00 AM to 7:00 PM</li>
                  <li>Thr : 8:00 AM to 7:00 PM</li>
                  <li>Fri : 8:00 AM to 7:00 PM</li>
                  <li>Sat : 8:00 AM to 7:00 PM</li>
                  <li>Sun : CLOSED</li>
                </div>
              </ul>
            </div>
            <div className="row">
              <ul className="list-unstyled text-light">
                <br />
                <br />
                <li>SUBSCRIBE US</li>
                <br />
                <br />
                <li style={{ opacity: "0.7" }}>Subscribe to our newsletter!</li>
                <br />
                <li>
                  <input
                    type="email"
                    placeholder="Email Address..."
                    style={{ opacity: "0.7" }}
                  ></input>
                  <button className="text-light bg-dark">
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </button>
                </li>
                <br />
                <br />
                <li> SOCIAL SHARE</li>
                <br />
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item mx-3">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </li>
                  <li className="list-inline-item mx-3">
                    <FontAwesomeIcon icon={faFacebook} />
                  </li>
                  <li className="list-inline-item mx-3">
                    <FontAwesomeIcon icon={faTwitter} />
                  </li>
                  <li className="list-inline-item mx-3">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </li>
                  <li className="list-inline-item mx-3">
                    <FontAwesomeIcon icon={faPinterest} />
                  </li>
                </ul>
                <br />
                <br />
              </ul>
            </div>
          </div>
        </div>
        {/* Lower copyright */}
        <div className="bg-dark">
          <div className="container text-center text-light">
            <br/>
          <FontAwesomeIcon icon={faCopyright}  /> 2024 |Made in india
          </div>
        </div>
      </div>

      {/* Tablet and Desktop view */}
      <div className=" d-md-block d-none d-lg-block">
        {/* Upper Footer */}
        <div style={{ backgroundColor: "#252525" }}>
          <div className="container">
            <div className="row">
              <div className="col">
                <ul className="list-unstyled text-light">
                  <br />
                  <br />
                  <li>OPENING HOURS</li>
                  <br />
                  <br />
                  <div style={{ opacity: "0.5" }}>
                    <li>Mon : 8:00 AM to 7:00 PM</li>
                    <li>Tue : 8:00 AM to 7:00 PM</li>
                    <li>Wed : 8:00 AM to 7:00 PM</li>
                    <li>Thr : 8:00 AM to 7:00 PM</li>
                    <li>Fri : 8:00 AM to 7:00 PM</li>
                    <li>Sat : 8:00 AM to 7:00 PM</li>
                    <li>Sun : CLOSED</li>
                  </div>
                </ul>
              </div>
              <div className="col">
                <ul className="list-unstyled text-light">
                  <br />
                  <br />
                  <li>SUBSCRIBE US</li>
                  <br />
                  <br />
                  <li style={{ opacity: "0.7" }}>
                    Subscribe to our newsletter!
                  </li>
                  <br />
                  <li>
                    <input
                      type="email"
                      placeholder="Email Address..."
                      style={{ opacity: "0.7" }}
                    ></input>
                    <button className="text-light bg-dark">
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                  </li>
                  <br />
                  <br />
                  <li> SOCIAL SHARE</li>
                  <br />
                  <ul className="list-unstyled list-inline">
                    <li className="list-inline-item mx-2">
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </li>
                    <li className="list-inline-item mx-2">
                      <FontAwesomeIcon icon={faFacebook} />
                    </li>
                    <li className="list-inline-item mx-2">
                      <FontAwesomeIcon icon={faTwitter} />
                    </li>
                    <li className="list-inline-item mx-2">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </li>
                    <li className="list-inline-item mx-2">
                      <FontAwesomeIcon icon={faPinterest} />
                    </li>
                  </ul>
                  <br />
                  <br />
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Lower Footer */}
        <div className="bg-dark">
          <div className="container text-light text-center">
            <br/>
          <FontAwesomeIcon icon={faCopyright} /> 2024 |Made in india
          </div>
        </div>
      </div>
    </>
  );
}
