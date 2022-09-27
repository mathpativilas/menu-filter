import React from "react";

const Categories = ({ filterditems, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((item, index) => (
        <button
          key={index}
          className="filter-btn"
          onClick={() => filterditems(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Categories;
