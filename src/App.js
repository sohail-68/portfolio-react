import Nav from './Component/Nav';
import Home from "./Component/Home"
import About from "./Component/About"
import Contact from './Component/Contact';
// import Testimonial from './Compo/Testimonial';
import "./App.css"
import Services from './Component/Services';
import Footer from './Component/Footer';
import Testimonial from './Component/Testimonial';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
      <Services/>
      <Contact/>
      <Testimonial/>
      <Footer/>

       
    </div>
  );
}

export default App;
