import React from "react";
import PropTypes from "prop-types";

const Button = ({ value, handleClick, className }) => (
  <button
    type="button"
    className={`p-2 bg-blue-500 text-white ${className}`}
    onClick={handleClick}
  >
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: "",
};

export default Button;
