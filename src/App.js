import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Project from './components/Project/Project';
import Aos from 'aos';
import {useEffect} from 'react';
import ScrollToTop from './Hooks/ScrollToTop';


function App() {
  useEffect(() => {
    Aos.init({
      disable: 'mobile',
      duration:1000
    });
  }, [])
  useEffect(() => {
    const scrollToTop = ()=>{
      if(window.pageYOffset > 200)
      {
        window.scrollTo(
          {
            top: 0, 
            behavior: "smooth",
          }
        );
      }
    }

  }, [])

  const scrollToTop = ()=>{
    if(window.pageYOffset > 200)
    {
      window.scrollTo(
        {
          top: 0, 
          behavior: "smooth",
        }
      );
    }
  }


  return (
    <div className="App">
      <ScrollToTop/> 
      <Home />
      <AboutMe />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
