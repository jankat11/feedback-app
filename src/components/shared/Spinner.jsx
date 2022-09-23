import spinner from '../assets/spinner.gif'


function Spinner() {
  return (
    <img src={spinner} alt="Loading..." style={{
        width: "50px", display: "block", margin: "auto"
    }}/>
  )
}

export default Spinner