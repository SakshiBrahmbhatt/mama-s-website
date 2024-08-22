import AbProPageIndicator from "../../Components/AbProPageIndicator";
import Content from "../../Components/Content";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

export default function Video() {
  return (
    <>
      <Header></Header>
      <AbProPageIndicator Page="Images" AbsPage="Gallery"></AbProPageIndicator>
      <Content content="<br>"></Content>
      <Footer></Footer>
    </>
  );
}
