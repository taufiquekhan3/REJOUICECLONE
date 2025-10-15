import { useRef, useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import './index.scss';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import TextPage from './components/TextPage/TextPage';
import Approach from './components/Approach/Approach';
import TextMarguee from './components/TextMarguee/TextMarguee';
import Wrapper from './components/Wrapper/Wrapper';
import Box from './components/Box/Box';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ExampleSwiper from './components/ExampleSwiper/ExampleSwiper';


function App() {

  return (
    <div>
      {/* <Box /> */}
      <Wrapper />
      <TextPage />
      <Approach />
      <TextMarguee />
      <ExampleSwiper />
    </div>
  );
}

export default App;
