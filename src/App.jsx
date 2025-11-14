import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Feauture from './components/Feature/Feauture'
import TechExperties from './components/Feature/TechExperties'
import WorkflowSteps from './components/How-we-work/WorkflowSteps'
import Hero2 from './components/Hero/Hero2'
import Project from './components/Project/Project'

const App = () => {
  return (
    <>
       <Navbar />
       <Hero />
       <Hero2 />
       <Feauture />
       <TechExperties />
       <Project />
       <WorkflowSteps />
    </>
  )
}

export default App