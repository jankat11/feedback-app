import FeedbackItem from "./FeedbackItem"
import {motion, AnimatePresence} from 'framer-motion'
import FeedbackContext from "../context/FeedbackContext"
import {useContext} from "react"
import Spinner from "./shared/Spinner"

function FeedbackList() {

    const {feedback, feedbackAll, isLoading} = useContext(FeedbackContext)

    if (!isLoading && (!feedback || feedback.length === 0)) 
    return <h2>No feedback yet!</h2>

    return isLoading ? <Spinner /> : (
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
            {feedback.length < feedbackAll.length && <Spinner/>} 
    </div>
    )
}

export default FeedbackList