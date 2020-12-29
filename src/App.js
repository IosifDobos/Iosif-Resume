import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Testimonials from './components/Testimonials';
// import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Resume />
      <Projects />
      <Testimonials />
      <Contact />
      {/* <Profile /> */}
      <Footer />
    </div>
  );
}

export default App;
