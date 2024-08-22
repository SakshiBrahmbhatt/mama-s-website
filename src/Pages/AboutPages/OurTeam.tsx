import AbProPageIndicator from "../../Components/AbProPageIndicator";
import BtnNav from "../../Components/BtnNav";
import Content from "../../Components/Content";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

export default function OurTeam() {
  return (
    <>
      <Header></Header>
      <AbProPageIndicator Page="Our Team" AbsPage="About"></AbProPageIndicator>
      <Content
        content="Keep watching this space for information about our awesome team."
        className=""
        style={{ padding: "50px 0px", color:"#888B90" }}
      ></Content>
      <BtnNav></BtnNav>
      <Footer></Footer>
    </>
  );
}
