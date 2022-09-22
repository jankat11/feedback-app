import Card from "./shared/Card"
import { FaTimes, FaEdit } from "react-icons/fa"
import FeedbackContext from "../context/FeedbackContext"
import {useContext} from "react"


function FeedbackItem({feedback, id}) {

  const {deleteItem, editFeedback} = useContext(FeedbackContext)

  const scrollUp = item => {
    editFeedback(item)
    const element = document.querySelector("#ratingInfo")
    element.scrollIntoView()
  }

  return (
    <Card>
        <div onClick={() => scrollUp(feedback)} className="edit"><FaEdit /></div>
        <div  onClick={() => deleteItem(feedback.id)} className="close"><FaTimes/></div>
        <div  className="num-display">{feedback.rating}</div>
        <div id={`item${id}`} className="text-display">{feedback.text}</div>
    </Card>
  )
}

export default FeedbackItem