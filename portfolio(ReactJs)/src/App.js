import Navbar from './components/navbar/Navbar';
import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import CircleComponent from './components/circleComponent/CircleComponent';
import AboutMeSection from './components/Aboutme/AboutMe';
import Timeline from './components/Timeline/Timeline';
import DesignPortfolio from './components/designPorfolioSection/DesignPortfolio';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <CircleComponent></CircleComponent>
      <AboutMeSection></AboutMeSection>
      <Timeline></Timeline>
      <DesignPortfolio></DesignPortfolio>
    </div>
  );
}

export default App;
