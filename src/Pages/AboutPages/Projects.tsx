import AbProPageIndicator from "../../Components/AbProPageIndicator";
import BtnNav from "../../Components/BtnNav";
import Content from "../../Components/Content";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

export default function Projects() {
  return (
    <>
      <Header></Header>
      <AbProPageIndicator Page="Projects" AbsPage="About"></AbProPageIndicator>
      <Content
        content="No Projects added yet. Keep watching this space for latest projects by INFINITY INDUSTRIAL FIBER."
        className=""
        style={{ padding: "50px 0px", color:"#888B90"}}
      ></Content>
      <BtnNav></BtnNav>
      <Footer></Footer>
    </>
  );
}
