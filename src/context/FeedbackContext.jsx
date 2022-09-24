import { createContext, useEffect, useState } from "react"
import { v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([])
    const [feedbackAll, setFeedbackAll] = useState([])
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false
    })

    useEffect(() => {
      fetchFeedback()
      fetchFeedbackAll() 
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    useEffect(() => {
      fetchFeedbackAll()
    }, [feedback])
    
    window.onscroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setPage(page + 1)
      }
    }

    const editFeedback = item => {
      setFeedbackEdit({
        item,
        edit: true,
      })
    } 

    const deleteItem = (id) => {
        window.confirm("Are you sure to delete?") && 
          fetch(`https://feedback-app-database.herokuapp.com/feedback/${id}`, {method: "DELETE"})
          .then(response => response.json())
          .then(() => {
            setFeedback(feedback.filter(item => item.id !== id)) 
          })
      }
  

    const addFeedback = comment => {
      comment.id = uuidv4()
      comment.timestamp = Date.now()
      fetch("https://feedback-app-database.herokuapp.com/feedback", {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body:  JSON.stringify(comment)
      })
      .then(response => response.json())
      .then(data => {
        setFeedback([data, ...feedback])
      })
    }


    const updateFeedback = (id, updItem) => {
      fetch(`https://feedback-app-database.herokuapp.com/feedback/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json" 
        },
        body: JSON.stringify(updItem) 
      })
      .then(response => response.json())
      .then(data => {
        setFeedback(feedback.map(item => item.id === id ? data : item))
      })   
    }


    const fetchFeedbackAll = () => {
      fetch(`https://feedback-app-database.herokuapp.com/feedback`)
      .then(response => response.json())
      .then(data => {
        setFeedbackAll(data)
      })
    }
    


    const fetchFeedback = () => {
      fetch(`https://feedback-app-database.herokuapp.com/feedback?_sort=timestamp&_order=desc&_page=${page}&_limit=10`)
      .then(response => response.json())
      .then(data => {
        setFeedback([...feedback, ...data])
        setIsLoading(false)
      })
    }



    return (
      <FeedbackContext.Provider
      value = {{
        feedback,
        feedbackEdit,
        isLoading,
        feedbackAll,
        deleteItem,
        addFeedback,
        editFeedback,
        setFeedbackEdit,
        updateFeedback,
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext