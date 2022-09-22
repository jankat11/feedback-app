import Card from "./shared/Card"
import { FaTimes } from "react-icons/fa"
import FeedbackContext from "../context/FeedbackContext"
import {useContext} from "react"


function FeedbackItem({feedback, id}) {

  const {deleteItem} = useContext(FeedbackContext)

  return (
    <Card>
        <div  onClick={() => deleteItem(feedback.id)} className="close"><FaTimes/></div>
        <div  className="num-display">{feedback.rating}</div>
        <div id={`item${id}`} className="text-display">{feedback.text}</div>
    </Card>
  )
}

export default FeedbackItem