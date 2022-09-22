import PropTypes from 'prop-types'

function FeedbackStats({review}) {



  let average = review.reduce((total, element) => {
    return total + parseInt(element.rating)
  }, 0) / review.length
  
  average = average.toFixed(1).replace(/(.|,)0$/, "")

  if (!review || review.length === 0 )  
  return ""


  return (
    <div id="stats" className="feedback-stats">
        <h4>{review.length} Reviews</h4> 
        <h4>Average Rating: {average}</h4> 
    </div> 
  )
}

FeedbackStats.propTypes = {
    review : PropTypes.array.isRequired
}

export default FeedbackStats