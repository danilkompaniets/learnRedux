import Header from "./components/Header";
import RecipeItem from "./components/RecipeItem";
import { useFavorites } from "./hooks/useFavorites";
import "./styles/index.css";

const App = () => {
  return (
    <>
      <Header />
      <div>
        <RecipeItem
          recipe={{
            id: 1,
            name: "Lasagna",
          }}
        />
        <RecipeItem
          recipe={{
            id: 2,
            name: "Ovs",
          }}
        />
        <RecipeItem
          recipe={{
            id: 3,
            name: "Pasta",
          }}
        />
        <RecipeItem
          recipe={{
            id: 4,
            name: "Pasta Cheese",
          }}
        />
      </div>
    </>
  );
};

export default App;
