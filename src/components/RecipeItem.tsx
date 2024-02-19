import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useActions } from "../hooks/useActions";
import { useFavorites } from "../hooks/useFavorites";

interface RecipeItemProps {
  recipe: {
    id: number;
    name: string;
  };
}

const RecipeItem: FC<RecipeItemProps> = ({ recipe }) => {
  const { addToFavorites } = useActions();
  const { favorites } = useFavorites();
  const isExists = favorites.some((r) => r.id === recipe.id);

  return (
    <>
      <div>
        <h2>{recipe.name}</h2>
        <button onClick={() => addToFavorites(recipe)}>
          {isExists ? "Remove from favorites" : "Add to favorites"}
        </button>
      </div>
    </>
  );
};

export default RecipeItem;
