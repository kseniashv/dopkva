import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from '../src/layout/Nav.jsx';
import About from '../src/pages/About.jsx';
import Calculation from '../src/pages/Calculation.jsx';
import Contacts from '../src/pages/Contacts.jsx';
import FAQ from '../src/pages/FAQ.jsx';
import Make from '../src/pages/Make.jsx';
import Portfolio from '../src/pages/Portfolio.jsx';
import Products from '../src/pages/Products.jsx';
import Services from '../src/pages/Services.jsx';


function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/About" element={<About/>}/>
                <Route path="/Calculation" element={<Calculation/>}/>
                <Route path="/Contacts" element={<Contacts/>}/> 
                <Route path="/FAQ" element={<FAQ/>}/> 
                <Route path="/Make" element={<Make/>}/> 
                <Route path="/Portfolio" element={<Portfolio/>}/>
                <Route path="/Products" element={<Products/>}/>
                <Route path="/Services" element={<Services/>}/>
            </Routes>
        </Router>
    );
}

export default App;
