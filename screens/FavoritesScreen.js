import MealList from "../components/MealsList/MealList";
import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids?.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>
          You have no favorite Meals yet.
        </Text>
      </View>
    );
  }

  return <MealList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#121212", // dark background for better contrast
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#f5f5f5", // light text color
    backgroundColor: "#333", // subtle dark background for the text container
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    textAlign: "center",
    elevation: 3, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
});
