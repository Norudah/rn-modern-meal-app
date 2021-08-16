import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import FilterNavigator from "./navigations/FilterNavigator";

import { createStore } from "redux";
import { Provider } from "react-redux";
import mealsReducer from "./store/reducers/meals";

const store = createStore(mealsReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <FilterNavigator />
      </NavigationContainer>
    </Provider>
  );
}
