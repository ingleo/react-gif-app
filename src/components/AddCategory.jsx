import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [inputCategory, setInputCategory] = useState('');

  const handleChange = (event) => {
    setInputCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const sanitizedInput = inputCategory.trim();
    if (sanitizedInput.length <= 1) return;
    onNewCategory(sanitizedInput);
    setInputCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={inputCategory}
        onChange={handleChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
