import { RootState } from "../store/store";
import { useSelector } from "react-redux";

export const useFavorites = () => {
  const { favorites } = useSelector((state: RootState) => state.favorites);
  console.log(favorites);

  return { favorites };
};
