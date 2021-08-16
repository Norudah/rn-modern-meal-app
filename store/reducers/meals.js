import { MEALS } from "../../data/dummy-data";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favorites: [],
};

const mealsReducer = (state = initialState, action) => {
  return initialState;
};

export default mealsReducer;
