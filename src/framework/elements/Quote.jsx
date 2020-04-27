import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ text, source }) => {
  return (
    <div className = "isf-quote">
      <h3 className = "isf-quote__text">{text}</h3>
      { (source && (source.length > 0)) &&
        <small className = "isf-quote__source">
            - {source}
        </small> }
    </div>
  )
}

Quote.defaultProps = {
  source: 'Derek Jarman',
  text: `Red protects itself. No colour is as territorial. It stakes a claim, is on the alert against the spectrum.`
};

Quote.propTypes = {
  source: PropTypes.string,
  text: PropTypes.string
}

export default Quote;

