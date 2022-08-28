
import './App.css';
import Navbar from './components/Navbar';
import Hero from "./components/Hero"
import { BrowserRouter as Router } from "react-router-dom"
import { GlobalStyle } from './globalStyle.js'


function App() {
  return (
    <Router>
        <GlobalStyle /> 
      <Hero/>
    </Router>
   
  );
}

export default App;
