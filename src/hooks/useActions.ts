import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions, FavoritesActions } from "../store/favorites/favorites.slice";

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    return bindActionCreators(actions, dispatch) as FavoritesActions;
  }, [dispatch]);
};
