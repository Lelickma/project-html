import React from 'react';
import Sun from '../assets/sun.svg';
import Water from '../assets/water.svg';
import PropTypes from 'prop-types';

const quantityLabel = {
  1: 'peu',
  2: 'moderèment',
  3: 'beaucoup',
};

function CareScale({ careType, scaleValue }) {
  const range = [1, 2, 3];
  const scaleType =
    careType === 'light' ? (
      <img src={Sun} alt="sun" />
    ) : (
      <img src={Water} alt="sun" />
    );
  return (
    <div
      onClick={() =>
        alert(
          `Cette plante requiert ${quantityLabel[scaleValue]} ${
            careType === 'light' ? 'de lumiére' : "d'arrossage"
          }`
        )
      }
    >
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

// TypeCheking with PropTypes
CareScale.propTypes = {
  careType: PropTypes.string.isRequired,
  scaleValue: PropTypes.number.isRequired,
};

export default CareScale;
