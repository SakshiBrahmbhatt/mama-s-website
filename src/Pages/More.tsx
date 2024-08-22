import Content from "../Components/Content";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import PageIndicator from "../Components/PageIndicator";

export default function More() {
  return (
    <>
      <Header></Header>
      <PageIndicator Page="Manufacturing Of All Customize FRP/GRP products"></PageIndicator>
      <Content content="Manufacturer FRP products like FRP Gratings, FRP Pultruded profile and products, Customize Handmolded FRP products ( Flanchtak, Cooling tower and  body parts, Tank, Vessel, Scrubber, ect.)." className="" style={{paddingTop:"50px", paddingBottom:"50px"}}></Content>
      <Footer></Footer>
    </>
  );
}
