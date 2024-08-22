import Content from "../Components/Content";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HomeSlidder from "../Components/HomeSlider";

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
        <div style={{backgroundColor:"white"}}>
          <Content
            content='INFINITY INDUSTRIAL FIBER Infinity Industrial Fiber is a full-service turnkey solution provider in the field of corrosion resistant glass fiber reinforced plastic (FRP) Gratings, Cable Tray, tanks, canopies, sheets... Founded in ...<br><br><Link to="/About">READ MORE</Link> <Link to="/Contact">CONTACT US</Link>'
            className="text-center fs-5 ms-1"
            style={{ padding: "17px 0px 67px", color: "#888B90" }}
          ></Content>
        </div>
        <div style={{backgroundColor:"rgba(0,0,0,0.5)"}}><Content content="HI WORLD" className="text-center text-light" style={{padding:"0px 0px 50px"}}></Content></div>
        <Footer></Footer>
      </div>
    </>
  );
}
