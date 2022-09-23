import FeedbackContext from "../context/FeedbackContext"
import {useContext} from "react"

function FeedbackStats() {

  const {feedbackAll} = useContext(FeedbackContext)

  let average = feedbackAll.reduce((total, element) => {
    return total + parseInt(element.rating)
  }, 0) / feedbackAll.length
  
  average = average.toFixed(1).replace(/(.|,)0$/, "")

  if (!feedbackAll || feedbackAll.length === 0 )  
  return ""


  return (
    <div id="stats" className="feedback-stats">
        <h4>{feedbackAll.length} Reviews</h4> 
        <h4>Average Rating: {average}</h4> 
    </div> 
  )
}

export default FeedbackStats