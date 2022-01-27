import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './main.css';
import App from './App';
import Deposit from './Deposit';
import Navbar from './components/Navbar'
import CheckHistory from './CheckHistory';
import Withdraw from './Withdraw';
import Loan from './Loan';
import Transfer from './Transfer';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/check-history" element={<CheckHistory />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/transfer" element={<Transfer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);