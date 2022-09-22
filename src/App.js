
import React from 'react'
import FeedbackList from './components/FeedbackList'
import Header from './components/Header'
import FeedbackData from "./data/FeedbackData"
import {useState} from 'react'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { v4 as uuidv4} from 'uuid'
import AboutLinkIcon from './components/shared/AboutLinkIcon'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import AboutPage from './pages/AboutPage'




function App() {
 
  const [feedback, setFeedback] = useState(FeedbackData)

  const handleDelete = (id) => {
      window.confirm("Are you sure to delete?") &&
      setFeedback(feedback.filter(item => item.id !== id)) 
    }

  const addFeedback = comment => {
    comment.id = uuidv4()
    setFeedback([comment, ...feedback])
  }

  window.onclick = (e) => {
    console.log(e.target)
  }


  return (
    <BrowserRouter>
      <Header text="Feedback UI" />
        <div className='container'>
          <Routes>
            <Route path='/'
            element={
              <>
              <FeedbackForm getFeedback={addFeedback} />
              <FeedbackStats review={feedback}/>
              <FeedbackList feedback={feedback} handleDelete={handleDelete}/>
              <AboutLinkIcon/>
              </>
            }
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App