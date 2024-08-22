import BtnNav from "../Components/BtnNav";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import PageIndicator from "../Components/PageIndicator";

export default function LatestNews() {
  return (
    <>
      <Header></Header>
      <PageIndicator Page="Latest News"></PageIndicator>
      <BtnNav></BtnNav>
      <Footer></Footer>
    </>
  );
}
