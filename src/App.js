import './App.css';
import Navbar from './components/Navbar/Navbar';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      
      <section className="hero">
        <h1>Welcome to Hyperion</h1>
        <p>Innovating for tomorrow, delivering excellence today</p>
        <button className="cta-button">Learn More</button>
      </section>

      <Section>
    
      </Section>
      <Footer />
    </div>
  );
}

export default App;
