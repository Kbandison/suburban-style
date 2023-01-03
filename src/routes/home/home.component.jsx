import categoryList from "../../categories.json";
import Directory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";

let Home = () => {
  const categories = categoryList;
  return (
    <>
      <Outlet />
      <Directory categories={categories} />
    </>
  );
};

export default Home;
