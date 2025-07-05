import React from 'react'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import News from './component/News'
import Contact from './component/Contact'
import About from './component/About'
import CardDetails from './component/CardDetails'
const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/cardDetails' element={<CardDetails />} />
        </Routes>
      </BrowserRouter>
      <Footer />

    </>

  )
}


export default App