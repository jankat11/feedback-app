
import PropTypes from 'prop-types'
import AboutLinkIcon from './shared/AboutLinkIcon'

function Header({text, bg, color}) {

  const headerStyle = {
    backgroundColor: bg,
    color: color
  }    

  return (
    <header style={headerStyle}>
        <div className="container">
        <h2>{text}</h2>
        </div>
        <AboutLinkIcon/>
    </header>
  )
}

Header.defaultProps = {
    bg: 'rgba(0,0,0,0.4)',
    color: '#ff6a95'
}

Header.propTypes = {
    text: PropTypes.string.isRequired
}

export default Header