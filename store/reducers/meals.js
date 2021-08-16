import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, UPDATE_FILTERS } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favorites: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
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

    case UPDATE_FILTERS:
      const settings = action.settings;
      const filteredMeals = state.meals.filter((meal) => {
        if (!meal.isLactoseFree && settings.withoutLactose) return false;
        if (!meal.isGlutenFree && settings.withoutGluten) return false;
        if (!meal.isVegetarian && settings.onlyVegetarian) return false;
        if (!meal.isVegan && settings.onlyVegan) return false;
        return meal;
      });

      return {
        ...state,
        filteredMeals,
      };

    default:
      return state;
  }
};

export default mealsReducer;
