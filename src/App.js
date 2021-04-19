import './App.css';
import Footer from './Components/Footer';
import Section from './Components/Section';
import Navigation from './Components/NavbarPage'
import HowItWorks from './Components/HowItWorks';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
     
      <Navigation/>
      <HowItWorks/>
      
      <Section/>
      <Services/>      
      <Footer/>
    </div>
  );
}

export default App;
