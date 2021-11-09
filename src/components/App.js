import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <header>
        <h1>Comercializadora "A tiro de As"</h1>
      </header>
      <nav>
        
      </nav>
      <main>
        <Routes>
          <Route path="/products/by-name">
            
          </Route>
          <Route path="/products/by-category">
            
          </Route>
          <Route path="/products/by-price">
            
          </Route>
          <Route path="/products">
            
          </Route>
          <Route path="/">
            
          </Route>
        </Routes>
      </main>
    </Router>
  );
}
