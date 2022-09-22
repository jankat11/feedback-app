import {useEffect, useState} from "react"


function RatingSelect({handleChanges}) {

  const [selected, setSelected] = useState(null)

  const handleChange = event => {
    setSelected(+event.target.value)
    handleChanges(+event.target.value)
  }  

  return (
    <div >
      <ul className="rating">
        {Array(10).fill(0).map((_, i) => {
          return (<li key={`rating-${i + 1}`}>
            <input 
              id={`num${i + 1}`}
              type="radio" 
              value={i + 1} 
              name="rating"
              onChange={handleChange}
              checked={selected === i + 1}
            />
            <label className="label" htmlFor={`num${i + 1}`}>{i + 1}</label>
          </li>) 
          })
        }
      </ul>
    </div>
  )
}

export default RatingSelect