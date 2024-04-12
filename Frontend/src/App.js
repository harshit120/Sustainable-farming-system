import CropPage from './container/Crops/CropPage';
import FaqPage from './container/FaqPage';
import FertilizerPage from './container/FertilizerPage';
import GovtSchePage from './container/GovtSchePage';
import Home from './container/Home';
import Login from './container/Login';
import Navbar from './container/Navbar'
import Signup from './container/Signup';
import { Route, Routes } from "react-router-dom";
import {ToastContainer} from "react-toastify"
import AboutUsPage from "./container/AboutUsPage"
import Advice from './container/Advice/advice';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="">
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route index element={<Home />} />
        <Route path="fertilizerPage" element={<FertilizerPage />} />
        <Route path="cropPage" element={<CropPage />} />
        <Route path="govtschePage" element={<GovtSchePage />} />
        <Route path="faqPage" element={<FaqPage />} />
        <Route path="aboutusPage" element={<AboutUsPage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="advice" element={<Advice/>}/>
      </Routes>
    </div>
  );
}

export default App;
