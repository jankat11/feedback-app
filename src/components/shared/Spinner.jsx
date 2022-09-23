import spinner from '../assets/spinner.gif'


function Spinner() {
  return (
    <img src={spinner} alt="Loading..." style={{
        width: "35px", display: "block", margin: "auto"
    }}/>
  )
}

export default Spinner