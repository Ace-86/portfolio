import { Link as LinkRouter } from 'react-router-dom'
import React, { useState } from 'react'
import  "./styles/NavBar.css"

function NavBar() {

    const [click, setClick] = useState(true);

    return (
    <>
        <div className="NavbarContainer">
            <div className="NavBar">
                
                <LinkRouter onClick={() => setClick(false)} to='/'> Page1</LinkRouter>
                <LinkRouter onClick={() => setClick(false)} to='/page2'> Page2</LinkRouter>
                <LinkRouter onClick={() => setClick(false)} to='/page3'> Page3</LinkRouter>
                <LinkRouter onClick={() => setClick(false)} to='/page4'> Page4</LinkRouter>
  
            </div>
        </div>
    </>
  );
}

export default NavBar;
