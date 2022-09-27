import React from "react";
import Categories from "./components/Categories";
import data from "./components/data";
import Menu from "./components/Menu";

const allcategories = ["all", ...new Set(data.map((item) => item.category))];

function App() {
  const [menus, setMenus] = React.useState(data);
  const [categories] = React.useState(allcategories);

  const filterditems = (category) => {
    if (category === "all") {
      setMenus(data);
      return;
    }

    const newitems = data.filter((item) => item.category === category);

    setMenus(newitems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
      </section>
      <Categories filterditems={filterditems} categories={categories} />

      <Menu menus={menus} />
    </main>
  );
}

export default App;
