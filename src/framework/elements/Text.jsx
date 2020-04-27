import React from 'react';
import PropTypes from 'prop-types';
// import './style.scss'

const Text = ({ text }) => (
  <div className = "isf-text">
    <p className = "isf-text__paragraph">
      { text }
    </p>
  </div>
);

Text.propTypes = {
  text: PropTypes.string
}

export default Text;