import React from "react";
import { Bars, Nav, NavLink, NavIcon }  from "./NavbarElement.js";

const Navbar = () => {
  return (
      <>
         <Nav>
            <NavLink to="/">Pizza</NavLink>
            <NavIcon>
                <p>Menu</p>
                <Bars/>
            </NavIcon>
         </Nav>
      </>
     
       
      

  )
  
};

export default Navbar;
