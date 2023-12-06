import React from 'react'
import SideMenu from './components/SideMenu';
import Home from './components/Home';
import Header from './components/Header';
import "./App.css"
import { Button, Card } from '@mui/material';
const App = () => {
  return (
    <div>
      <div className='.header'>
        <header>
          <Header />
        </header>
      </div>

      <div className='home_container'>
        <SideMenu />
        <Home />
      </div>
     <Card>
      <Button variant="contained"  style={{float:'right'}} >Next</Button>
     </Card>
    </div>
  )
}

export default App;