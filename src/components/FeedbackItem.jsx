import Card from "./shared/Card"
import { FaTimes } from "react-icons/fa"

function FeedbackItem({feedback, handleDelete, id}) {

  return (
    <Card>
        <div onClick={() => handleDelete(feedback.id)} className="close"><FaTimes/></div>
        <div  className="num-display">{feedback.rating}</div>
        <div id={`item${id}`} className="text-display">{feedback.text}</div>
    </Card>
  )
}

export default FeedbackItem