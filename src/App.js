import categoryList from "./categories.json";
import Directory from "./components/directory/directory.component";

let App = () => {
  const categories = categoryList;
  return (
    <>
      <Directory categories={categories} />
    </>
  );
};

export default App;
