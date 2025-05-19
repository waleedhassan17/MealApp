import { useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealsList/MealList';

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params?.categoryId;

  if (!catId) {
    // Fallback UI when categoryId is not passed
    return (
      <View style={styles.container}>
        <Text>Category not found!</Text>
      </View>
    );
  }

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const category = CATEGORIES.find(category => category.id === catId);

    navigation.setOptions({
      title: category ? category.title : 'Meals',
    });
  }, [catId, navigation]);

  return <MealList items={displayedMeals} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealsOverviewScreen;
