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

function App() {

  return (
    <div>
      <Wrapper />
      <TextPage />
      <Approach />
      <TextMarguee />
    </div>
  );
}

export default App;
