import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'
import {motion, AnimatePresence} from 'framer-motion'


function FeedbackList({handleDelete, feedback}) {

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
                    handleDelete={handleDelete}
                    feedback={item}
                    />
                </motion.div>
            ))}
            </AnimatePresence>
    </div>



/*         <div className="feedback-list">
            <AnimatePresence>
                {feedback.map(item =>  (
                    <motion.div
                    key={item.id}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity:0}}>
                    <FeedbackItem
                    key={item.id}
                    handleDelete={handleDelete}
                    feedback={item}
                    />
                    </motion.div>
                ))}
          </AnimatePresence>
        </div> */
    
  )
}

FeedbackList.propTypes = {
    feedback : PropTypes.array.isRequired
}

export default FeedbackList