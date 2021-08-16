import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favorites: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Put a meal into the favorite array or remove it from the array
    case TOGGLE_FAVORITE:
      const id = action.id;
      const meal = state.favorites.find((favoriteMeal) => favoriteMeal.id === id);

      if (meal) {
        return {
          ...state,
          favorites: state.favorites.filter((favoriteMeal) => favoriteMeal.id !== id),
        };
      } else {
        const favorites = [...state.favorites];
        const favoriteMeal = state.meals.find((meal) => meal.id === id);
        favorites.push(favoriteMeal);
        return { ...state, favorites: favorites };
      }

    default:
      return state;
  }
};

export default mealsReducer;
