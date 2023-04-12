import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Project from './components/Project/Project';


function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
