import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import AbProPageIndicator from "../../Components/AbProPageIndicator";
import Content from "../../Components/Content";
export default function FAQs() {
  return (
    <>
      <Header></Header>
      <AbProPageIndicator Page="FAQs" AbsPage="About"></AbProPageIndicator>
      <Content
        content="No FAQs yet."
        className="border"
        style={{ padding: "50px 30px", margin:"0px 0px 130px", color:"#888B90" }}
      ></Content>
      <Footer></Footer>
    </>
  );
}
