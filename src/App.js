
import { BrowserRouter as Router } from "react-router-dom"
import { GlobalStyle } from './globalStyle.js'
import Hero from "./components/Hero"
import Products from './components/Products'
import { productData } from "./components/Products/data.js";

function App() {
  return (
    <Router>
        <GlobalStyle /> 
      <Hero/>
      <Products heading="Choose your favorority"  data={productData}/>
    </Router>
   
  );
}

export default App;
