import { useState } from 'react';

import { AddCategory, GifGrid } from './components';

export const GifApp = () => {
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (newCategory) => {
    const categoriesUpper = categories.map((item) => item.toUpperCase());
    if (categoriesUpper.includes(newCategory.toUpperCase())) return;
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <h1>GifApp</h1>

      <AddCategory
        onNewCategory={(value) => handleAddCategory(value)}
        // setCategories={setCategories}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
