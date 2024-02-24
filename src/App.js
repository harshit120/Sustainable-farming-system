import CropPage from './container/CropPage';
import FaqPage from './container/FaqPage';
import FertilizerPage from './container/FertilizerPage';
import Footer from './container/Footer';
import GovtSchePage from './container/GovtSchePage';
import Home from './container/Home';
import Login from './container/Login';
import Navbar from './container/Navbar'
import Signup from './container/Signup';
import {Route ,Routes} from "react-router-dom";
import AboutUsPage from "./container/AboutUsPage"

function App() {
  return (
    <div className="">

    <Navbar/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="fertilizerPage" element={<FertilizerPage/>}/>
      <Route path="cropPage" element={<CropPage/>}/>
      <Route path="govtschePage" element={<GovtSchePage/>}/>
      <Route path="faqPage" element={<FaqPage/>}/>
      <Route path="aboutusPage" element={<AboutUsPage/>}/>
      <Route path="login" element={<Signup/>}/>
      <Route path="loginin" element={<Login/>}/>

    </Routes>
    {/* <Home/>
    <Fertilizer/>
    <Crop/>
    <GovtSche/>
    <Faq/>
    <Footer/> */}

    {/* <Signup/> */}
    {/* <Login/> */}

    </div>
  );
}

export default App;
