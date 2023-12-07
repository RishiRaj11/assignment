import React from 'react'
import SideMenu from './components/SideMenu';
import Home from './components/Home';
import Header from './components/Header';
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormContainer from './components/FormContainer';
import InterviewAvailability from './components/InterviewAvailability';
import StatementOfPurpose from './components/StatementOfPurpose';
import DocumentsCollections from './components/DocumentsCollections';
const App = () => {
  return (

    <Router>
      <div className='.header'>
        <header>
          <Header />
        </header>
      </div>
      <div>
        <div className='home_container'>
          <SideMenu />
          <Routes>
              {/* <Route path="/" element={<Home />}  />            */}
              <Route path="/" element={<FormContainer />} />            
              <Route path="/documents" element={<DocumentsCollections />} />
              <Route path="/interview" element={<InterviewAvailability />} />
              <Route path="/purpose" element={<StatementOfPurpose />} />  
          </Routes>
        </div>

      </div>
    </Router>
  )
}

export default App;