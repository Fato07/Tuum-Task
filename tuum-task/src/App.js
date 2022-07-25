import React from 'react';
import FormContainer from './views/Form';
import { Routes, Route } from "react-router-dom";
import Success from './views/Success';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FormContainer />} />
        <Route path="success" element={<Success />} />
      </Routes>
    </div>
  );
};

export default App;