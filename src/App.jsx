import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Hero2 from './components/Hero/Hero2';
import Feauture from './components/Feature/Feauture';
import TechExperties from './components/Feature/TechExperties';
import WorkflowSteps from './components/How-we-work/WorkflowSteps';
import Project from './components/Project/Project';

const App = () => {
  return (
    <BrowserRouter basename="/pushan-portfolio">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Hero2 />
            <Feauture />
            <TechExperties />
            <Project />
            <WorkflowSteps />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
