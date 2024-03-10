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
import '../src/app/styles/navbar.css'
import '../src/app/styles/footer.css'


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
