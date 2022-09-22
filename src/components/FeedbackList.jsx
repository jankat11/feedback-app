import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'
import {motion, AnimatePresence} from 'framer-motion'
import FeedbackContext from "../context/FeedbackContext"
import {useContext} from "react"

function FeedbackList() {

    const {feedback} = useContext(FeedbackContext)

    if (!feedback || feedback.length === 0) 
    return <h2>No feedback yet!</h2>

    return (

        <div className="feedback-list">
            <AnimatePresence>
            {feedback.map((item, i) =>  (
                <motion.div
                    key={item.id}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity:0}}>
    
                    <FeedbackItem
                    id = {i + 1}
                    key={item.id}
                    feedback={item}
                    />
                </motion.div>
            ))}
            </AnimatePresence>
    </div>
  )
}

export default FeedbackList