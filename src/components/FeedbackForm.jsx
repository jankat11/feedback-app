import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import { useState, useContext } from 'react'
import FeedbackContext from "../context/FeedbackContext"


function FeedbackForm() {

  const [btnDisabled, setBtnDisabled] = useState(true)  
  const [text, setText] = useState("")
  const [message, setMessage] = useState("")
  const [rating, setRating] = useState(null)
  const {addFeedback} = useContext(FeedbackContext)

  const handleChange = event => {
    setText(event.target.value)
    if (event.target.value.trim().length >= 10) {
        setBtnDisabled(false)
        setMessage("")
    } else {
        setBtnDisabled(true)
        event.target.value.length === 0 ? setMessage("") :
        setMessage("Text must be at least 10 characters")
    }
  }

  const [resetKey, setResetKey] = useState(1)
  const reset = () => {
    setResetKey(Math.random())
  }
  
  const handleSubmit = event => {
    event.preventDefault()
    if (text.trim().length >= 10 && rating) {
        const newFeedback = {
            rating,
            text
        }
        addFeedback(newFeedback)
        setText("")
        setBtnDisabled(true)
        setMessage("")
    } else if (!rating)
    setMessage("Please rate before submit")
    setRating(null)
    reset()
  }

  return (
    <Card key={resetKey}>
        <h2 id="ratingInfo">How would you rate your service with us?</h2>
        <RatingSelect handleChanges={id => setRating(id)}/>
        <form onSubmit={handleSubmit}>
            <div className="input input-group">
                <input value={text} onChange={handleChange} className="input" type="text" />
                <Button isDisabled={btnDisabled} version={"primary"} type="submit">Send</Button>
            </div>
        </form>
        <div className="message">{message}</div>
    </Card>
  )
}

export default FeedbackForm