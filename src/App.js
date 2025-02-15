import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './styles.css';

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="pink-background centered-content">
      <h1>Will you be my valentine? ❤️</h1>
      <div className="button-group">
        <button className="btn yes" onClick={() => navigate('/yes')}>Yes</button>
        <button className="btn no" onClick={() => alert('Aww, maybe next time! 💔')}>No</button>
      </div>
      <details className="reasons">
        <summary>💖 REASONS why I want you to be my valentine 💖</summary>
        <ul>
          <li>You make me smile every day 😊</li>
          <li>Your laugh is my favorite sound ❤️</li>
          <li>You’re the sweetest person I know 🍯</li>
          <li>You always support me 🌟</li>
          <li>I can’t imagine this day without you 💐</li>
        </ul>
      </details>
    </div>
  );
}

function YesPage() {
  const navigate = useNavigate();
  return (
    <div className="black-background centered-content">
      <h1>Great! Thank you for accepting my invitation! 💖</h1>
      <p>Meet me at <strong>8:00 pm sharp</strong> for a Valentine treat!(click below for a vday surprise 👀) </p>
      <button className="btn surprise" onClick={() => navigate('/surprise')}>CLICK ME!!!</button>
    </div>
  );
}

function SurprisePage() {
  return (
    <div className="pink-background centered-content">
      <h1>Your Valentine Surprise! 🎉</h1>
      <div className="image-gallery">
        <img src="/images/valentine1.jpg" alt="Surprise 1" />
        <img src="/images/valentine2.jpg" alt="Surprise 2" />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/yes" element={<YesPage />} />
        <Route path="/surprise" element={<SurprisePage />} />
      </Routes>
    </Router>
  );
}
