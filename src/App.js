
import React from 'react'
import FeedbackList from './components/FeedbackList'
import Header from './components/Header'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import {FeedbackProvider} from "./context/FeedbackContext"




function App() {

  window.onclick = e => {
    console.log(e.target)
  }

  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header text="Feedback UI" />
          <div className='container'>
            <Routes>
              <Route path='/'
              element={
                <>
                <FeedbackForm />
                <FeedbackStats/>
                <FeedbackList/>
                </>
              }
              />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </div>
      </BrowserRouter>
    </FeedbackProvider>
  )
}

export default App