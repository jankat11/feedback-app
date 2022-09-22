import { createContext, useState } from "react"
import FeedbackData from "../data/FeedbackData"
import { v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteItem = (id) => {
        window.confirm("Are you sure to delete?") &&
        setFeedback(feedback.filter(item => item.id !== id)) 
      }
  
    const addFeedback = comment => {
      comment.id = uuidv4()
      setFeedback([comment, ...feedback])
    }

    return (
      <FeedbackContext.Provider
      value = {{
        feedback,
        deleteItem,
        addFeedback,
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext