import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AdminHome from "./components/AdminHome/AdminHome";
import UserForm from './components/UserForm/UserForm';
import UserAccounts from './components/UserAccounts/UserAccounts';

import 'bootstrap/dist/css/bootstrap.css'

import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/UserForm" element={<UserForm />} />
        <Route path="/UserAccounts" element={<UserAccounts />} />
        <Route path="/" element={<AdminHome />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
