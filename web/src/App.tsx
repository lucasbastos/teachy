import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importing the page components
import LandingPage from './pages/Landing';
import TeacherFormPage from './pages/TeacherForm';
import TeacherListPage from './pages/TeacherList';

// CSS Global Styles
import './assets/styles/global.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/study" element={<TeacherListPage />} />
        <Route path="/give-classes" element={<TeacherFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
