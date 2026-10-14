
import { useState } from 'react';
import './App.css';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  const donors = [
    { name: 'Rahul Kumar', group: 'O+', city: 'Hyderabad' },
    { name: 'Priya Sharma', group: 'B+', city: 'Secunderabad' },
    { name: 'Arjun Reddy', group: 'A+', city: 'Hyderabad' }
  ];

  if (!loggedIn) {
    return (
      <main className="login-page">
        <form className="login-card" onSubmit={(e) => {
          e.preventDefault();
          setLoggedIn(true);
        }}>
          <div className="drop">♥</div>
          <h1>BloodConnect</h1>
          <p>Blood Donor Management System</p>
          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <input type="password" placeholder="Enter password" required />
          <button type="submit">Login</button>
          <small>Demo interface · No real authentication</small>
        </form>
      </main>
    );
  }

  return (
    <main className="dashboard">
      <header>
        <div>
          <h1>♥ BloodConnect</h1>
          <p>Blood Donor Management System</p>
        </div>
        <button className="logout" onClick={() => setLoggedIn(false)}>
          Logout
        </button>
      </header>

      <section className="welcome">
        <h2>Welcome to your dashboard</h2>
        <p>Find donors and help make a difference.</p>
      </section>

      <section className="stats">
        <article><span>Registered Donors</span><strong>120</strong></article>
        <article><span>Blood Groups</span><strong>8</strong></article>
        <article><span>Requests</span><strong>24</strong></article>
      </section>

      <section className="donor-section">
        <h2>Sample Donor Directory</h2>
        <div className="donor-list">
          {donors.map((donor) => (
            <article className="donor" key={donor.name}>
              <div className="blood-group">{donor.group}</div>
              <div>
                <h3>{donor.name}</h3>
                <p>{donor.city}</p>
              </div>
              <span className="available">Sample</span>
            </article>
          ))}
        </div>
      </section>
      <footer>BloodConnect · React + CSS</footer>
    </main>
  );
}
