import React from 'react';
import '../styles/Categories.css';
import PropTypes from 'prop-types';

function Categories({ activeCategory, setActiveCategory, categories }) {
  function handleSelect(e) {
    setActiveCategory(e.target.value);
  }
  return (
    <div className="lmj-categories">
      <select
        className="lmj-categories-select"
        onChange={handleSelect}
        value={activeCategory}
      >
        <option value="">---</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={() => setActiveCategory('')}>Renitialiser</button>
    </div>
  );
}

// TypeChecking with prop-types
Categories.propTypes = {
  activeCategory: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  setActiveCategory: PropTypes.func.isRequired,
};

export default Categories;
