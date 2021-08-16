export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const UPDATE_FILTERS = "UPDATE_FILTERS";

export const toggleFavorite = (id) => {
  return {
    type: TOGGLE_FAVORITE,
    id: id,
  };
};

export const updateFilters = (settings) => {
  return {
    type: UPDATE_FILTERS,
    settings: settings,
  };
};
