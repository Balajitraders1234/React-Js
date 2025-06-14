import "./App.css";
import Navigation from './components/navigation/Navigation';
import ContactHeader from "./components/contactHeader/ContactHeader";
import ContactForm from "./components/contactForm/ContactForm";


const App = () => {
  return (
    <div>
      <Navigation/>
      <main className="main_container">
        <ContactHeader/>
        <ContactForm/>
      </main>
    </div>
  )
}

export default App