/* eslint-disable jsx-a11y/anchor-is-valid */
// App.js
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">Landing-UI</div>
        <div className="nav-links">
          <div className="nav-row">
            <a href="#">Home Page</a>
            <a href="#">Generator</a>
            <a href="#">Pricing-Plan</a>
            <a href="#">Blog - News</a>
          </div>
          <div className="nav-row">
            <a href="#">About Us</a>
            <a href="#">Features</a>
            <a href="#">Collection-2023</a>
            <a href="#">Career</a>
          </div>
        </div>
        <button className="menu-button">Menu</button>
      </nav>
      <div className="hero-section">
        <h2 className="subheading">Revolutionize your</h2>
        <h1 className="main-heading">
          Creative Projects with the ultimate AI-powered pattern
        </h1>
        <button className="start-button">Start Generating</button>
        <h2 className="next-gen-heading">
          The next generation <span className="production-word">production</span> for designers
        </h2>
        <div className="cards-section">
  <div className="card">
    <button className="card-button">01</button>
    <p className="card-subheading">Learn from top mentors</p>
    <button className="card-action-button">Start Learning</button>
  </div>

  <div className="card">
    <button className="card-button">02</button>
    <div className="card-links">
      <a href="#">Free Edit ↗</a>
      <a href="#">Interactive ↗</a>
      <a href="#">Easy Interface ↗</a>
      <a href="#">Compare to other ↗</a>
    </div>
  </div>

  <div className="card">
    <button className="card-button">03</button>
    <p className="card-bottom-heading">+20k glass patterns generated this week on the first release</p>
  </div>
</div>
      </div>
      {/* Add your content below the hero section */}
    </div>
  );
}

export default App;
