import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Location from "./Pages/Location";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./Pages/NoPage";
import OurTeam from "./Pages/AboutPages/OurTeam";
import OurCustomer from "./Pages/AboutPages/OurCustomer";
import Projects from "./Pages/AboutPages/Projects";
import FAQs from "./Pages/AboutPages/FAQs";
import About from "./Pages/AboutPages/About";
import FrpSrtTks from "./Pages/ProductPages/FrpSrtTks";
import FrpCan from "./Pages/ProductPages/FrpCan";
import FrpPlainCorSheet from "./Pages/ProductPages/FrpPlainCorSheet";
import FrpMoldGrat from "./Pages/ProductPages/FrpMoldGrat";
import FrpMouldGrat from "./Pages/ProductPages/FrpMouldGrat";
import Product from "./Pages/ProductPages/Product";
import LatestNews from "./Pages/LatestNews";
import Gallery from "./Pages/GalleryPages/Gallery";
import Images from "./Pages/GalleryPages/Images";
import Video from "./Pages/GalleryPages/Video";
import More from "./Pages/More";
import Cart from "./Pages/Cart";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home></Home>}></Route>
            <Route path="/About" element={<About></About>}></Route>
            <Route path="/OurTeam" element={<OurTeam></OurTeam>}></Route>
            <Route
              path="/OurCustomers"
              element={<OurCustomer></OurCustomer>}
            ></Route>
            <Route
              path="/Projects"
              element={<Projects></Projects>}
            ></Route>
            <Route path="/FAQs" element={<FAQs></FAQs>}></Route>
            <Route path="/Products" element={<Product></Product>}></Route>
            <Route
              path="/FRP Storage Tanks"
              element={<FrpSrtTks></FrpSrtTks>}
            ></Route>
            <Route
              path="/FRP Canopies"
              element={<FrpCan></FrpCan>}
            ></Route>
            <Route
              path="/FRP Plain & Corrugated Sheets"
              element={<FrpPlainCorSheet></FrpPlainCorSheet>}
            ></Route>
            <Route
              path="/FRP Molded Grating"
              element={<FrpMoldGrat></FrpMoldGrat>}
            ></Route>
            <Route
              path="/FRP Moulded Grating"
              element={<FrpMouldGrat></FrpMouldGrat>}
            ></Route>
            <Route
              path="/LatestNews"
              element={<LatestNews></LatestNews>}
            ></Route>
            <Route path="/Gallery" element={<Gallery></Gallery>}></Route>
            <Route path="/Images" element={<Images></Images>}></Route>
            <Route path="/Videos" element={<Video></Video>}></Route>
            <Route path="/More" element={<More></More>}></Route>
            <Route path="/Contact" element={<Contact></Contact>}></Route>
            <Route path="/Location" element={<Location></Location>}></Route>
            <Route path="/Cart" element={<Cart></Cart>}></Route>
            <Route path="*" element={<NoPage></NoPage>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
