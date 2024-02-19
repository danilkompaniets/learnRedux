import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Recipe {
  id: number;
  name: string;
}

interface FavoritesState {
  favorites: Recipe[];
}

const initialState: FavoritesState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Recipe>) => {
      const recipe = action.payload;
      const isExists = state.favorites.some((r) => r.id === recipe.id);

      if (isExists) {
        state.favorites = state.favorites.filter((r) => r.id !== recipe.id);
      } else {
        state.favorites.push(recipe);
      }
    },
  },
});

export const { reducer, actions } = favoritesSlice;

export type FavoritesActions = typeof actions;
