
import { BrowserRouter as Router } from "react-router-dom"
import { GlobalStyle } from './globalStyle.js'
import Hero from "./components/Hero"
import Products from './components/Products'
import Feature from './components/Feature'
import { productData, productDataTwo } from "./components/Products/data.js";


function App() {
  return (
    <Router>
        <GlobalStyle /> 
      <Hero/>
      <Products heading="Choose your favorority"  data={productData}/>
      <Feature />
      <Products heading="Sweet Treats for You"  data={productDataTwo}/>

    </Router>
   
  );
}

export default App;
