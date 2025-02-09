import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CodeProvider } from './context/CodeContext';
import Header from "./components/Header";
import Code from "./components/Code";
import Login from "./components/Login";
import SignUp from "./components/Signup";

function App() {
  return (
    <CodeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Code />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </CodeProvider>
  );
}

export default App;
