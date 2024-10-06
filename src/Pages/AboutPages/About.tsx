import BtnNav from "../../Components/BtnNav";
import Content from "../../Components/Content";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageIndicator from "../../Components/PageIndicator";

export default function About() {
  return (
    <div
      style={{
        background: 'url("./welding.jpg") fixed center',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Header></Header>
      <PageIndicator Page="About"></PageIndicator>
      <div style={{ backgroundColor: "white" }}>
        <Content
          content={`
          <table style="border-collapse: collapse; width: 100%; margin: 50px 0;"><tr><td rowspan="11" style="padding-right: 20px; vertical-align: top;"><img src="./sheets.jpg" style="height: 500px; width: 600px;"></img></td></tr><tr><td><h3 style="margin-bottom: 20px;">ABOUT OUR ORGANIZATION</h3></td></tr><tr><td style="color:#888B90">INFINITY INDUSTRIAL FIBER</td></tr><tr><td style="color:#888B90">Infinity Industrial Fiber is a full-service turnkey solution provider in the field of corrosion resistant glass fiber reinforced plastic (FRP) Gratings, Cable Tray, tanks, canopies, sheets... Founded in 2017, Infinity Industrial Fiber is well positioned to meet your needs.</td></tr><tr><td style="color:#888B90">WHY INFINITY INDUSTRIAL FIBER?</td></tr><tr><td style="color:#888B90">By providing quality product and having experienced knowledge of the market, we have been able to attain a huge client base.<br>Factors responsible for our enormous success are as follows:<br>In-depth industry knowledge<br>Timely completion of orders<br>Transparent business dealings<br>Qualified and trained team of professionals<br>Market leading prices</td></tr></table>`}
          className=""
          style={{ padding: "0px 0px 30px" }}
        ></Content>
        <Content
          content={
            '<div class="text-center"><h2>Customer Testimonials</h2><hr></div>'
          }
          className=""
          style={{ padding: "0px 0px 30px" }}
        ></Content>
      </div>
      <div style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
        <Content
          content='<h2>Subscribe For Newsletter</h2><br><h5>We do not spam and your email-id would be stored securely.</h5><br><p><input type="email" placeholder="Email Address" required><br><Link to="/Contact">SUBSCRIBE US</Link></p>'
          className="text-center text-light"
          style={{ padding: "0px 0px 50px" }}
        ></Content>
      </div>
      <div style={{ backgroundColor: "white" }}>
        <Content
          content='<h2 class="text-center">Meet Our Team</h2><hr><br><p>Keep watching this space to get to know our team.</p>'
          className=""
          style={{}}
        ></Content>
        <BtnNav></BtnNav>
      </div>
      <Footer></Footer>
    </div>
  );
}
