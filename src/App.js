import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import WatchLive from "./pages/WatchLive";
import Pastor from "./pages/Pastor";
import Beliefs from "./pages/Beliefs";
import Service from "./pages/Service";
import Give from "./pages/Give"
import Visit from "./pages/Visit";


function App() {
  return (
    <Router>
      <div className="relative">
        <Carousel/>
        <Navbar className='absolute top-0' /> 
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='/WatchLive' element={<WatchLive/>}/>
          <Route path="/pastor" element={<Pastor/>}/>
          <Route path="/beliefs" element={<Beliefs/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/give" element={<Give/>}/>
          <Route path="/visit" element={<Visit/>}/>
        </Routes>
        <Footer/>
      </div>      
    </Router>
  ); 
}

export default App;
