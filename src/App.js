import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Signup from './pages/Signup';
import SignIn from './pages/SignIn';
import Product from './pages/ProductPage'; // Import the ProductPage component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/product/:id" element={<Product />} /> {/* Add a route for the ProductPage component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
