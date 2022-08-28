
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from "react-router-dom"
import { GlobalStyle } from './globalStyle.js'


function App() {
  return (
    <Router>
        <GlobalStyle />
      <Navbar/>
    </Router>
   
  );
}

export default App;
