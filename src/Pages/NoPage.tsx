import BtnNav from "../Components/BtnNav";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import PageIndicator from "../Components/PageIndicator";

export default function NoPage() {
  return (
    <>
      <Header></Header>
      <PageIndicator Page="No Page"></PageIndicator>
      <h2>Error 404: Not Found</h2>
      <BtnNav></BtnNav>
      <Footer></Footer>
    </>
  );
}