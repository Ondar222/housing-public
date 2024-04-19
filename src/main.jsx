import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import Router from './app/router';
import NavBars from './components/NavBar/NavBars';
import Footer from './components/FooterDiv/Footer';
import '../src/app/styles/programs.css'
import '../src/app/styles/contacts.css'
import '../src/app/styles/housingPrograms.css'
import '../src/app/styles/navbar.css'
import '../src/app/styles/footer.css'
import '../src/app/styles/ubdates.css'
import '../src/app/styles/modalEntrance.css'
import '../src/app/styles/inn.css'
import '../src/app/styles/queue.css'
import '../src/app/styles/turn.css'
import '../src/app/styles/addInfoBlocks.css'
import '../src/app/styles/action.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBars />
    <div style={{width: "80%", margin: "0 auto"}}>

    <BrowserRouter>
      <Router>
        <App />  
      </Router>
    </BrowserRouter>
    </div>
        <Footer />
    



  </React.StrictMode>
)
