import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataProvider from './context/DataProvider';
import { CodeProvider } from './context/CodeContext';
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/Signup";

function App() {
  return (
    <DataProvider>
      <CodeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </CodeProvider>
    </DataProvider>
  );
}

export default App;
