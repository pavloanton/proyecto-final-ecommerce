import { useContext, useEffect } from 'react';
import { ItemsContext } from '../../../context/ItemsProvider';
import './categoryfilter.components.styles.css';

const CategoryFilter = () => {
  const { getItemsCategory, getItems, getCategories, categories } = useContext(
    ItemsContext
  );

  console.log(getItems);
  console.log(categories);

  const handleChange = () => {
    const categories = [];
    const checkboxesCategory = document.querySelectorAll(
      "input[type=checkbox]:checked"
    );

    for (let i = 0; i < checkboxesCategory.length; i++) {
      categories.push(checkboxesCategory[i].value);
    }
    if (categories.length > 0) {
      getItemsCategory(categories);
    } else {
      getItems();
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <form className="formFilter animate__animated animate__slideInDown animate__delay-1s">
      <h5>Bands</h5>
      {categories.map((category) => (
        <div className="form-check category" key={category.id}>
          <input
            type="checkbox"
            className="form-check-input"
            id={`#check${category.category}`}
            value={category.category}
            onChange={handleChange}
            name="category"
          />
          <label className="form-check-label" htmlFor={`#check${category.category}`}>
          {category.category}
          </label>
        </div>
      ))}
    </form>
  );
};

export default CategoryFilter;