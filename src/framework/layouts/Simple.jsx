import React from 'react';
import PropTypes from 'prop-types';

const Simple = ({ colorScheme, container, id, children }) => (
  <div className = {`isf-simple isf-color-scheme--${colorScheme.selectedOption}`} id={id}>
    <div className = {`isf-${container.selectedOption}`}>
      {children}
    </div>
  </div>
);

Simple.propTypes = {
  container: PropTypes.shape({
    options: PropTypes.arrayOf(PropTypes.string),
    selectedOption: PropTypes.string
  }),
  colorScheme: PropTypes.shape({
    options: PropTypes.arrayOf(PropTypes.string),
    selectedOption: PropTypes.string
  })
}

Simple.defaultProps = {
  container: {
    options: ['container', 'container-fluid'],
    selectedOption: 'container'
  },
  colorScheme: {
    options: ['light', 'dark'],
    selectedOption: 'light'
  }
}

export default Simple;
