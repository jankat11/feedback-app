import PropTypes from 'prop-types'

function Button({children, type, version, isDisabled}) {
  return (
    <button 
      type={type} 
      className={`btn btn-${version}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  version: PropTypes.string,
  isDisabled: PropTypes.bool,
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
}

export default Button