import { Text, Image, StyleSheet, ScrollView, View, Pressable } from 'react-native';
import { useContext, useCallback } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { MEALS } from '../data/dummy-data';
import MealDetail from '../components/MealDetail';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import { FavoritesContext } from '../store/context/favorites-context';

function MealDetailScreen({ route, navigation }) {
  const { ids, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const isFavorite = ids.includes(mealId);

  const toggleFavoriteHandler = useCallback(() => {
    if (isFavorite) {
      removeFavorite(mealId);
    } else {
      addFavorite(mealId);
    }
  }, [ids, mealId, removeFavorite, addFavorite]);

  useFocusEffect(
    useCallback(() => {
      navigation.setOptions({
        headerRight: ({ tintColor }) => (
          <Pressable
            onPress={toggleFavoriteHandler}
            hitSlop={8}
            style={({ pressed }) => ({
              marginRight: 16,
              padding: 8,
              opacity: pressed ? 0.6 : 1,
            })}
          >
            <Ionicons
              name={ids.includes(mealId) ? 'star' : 'star-outline'}
              size={24}
              color={tintColor}
            />
          </Pressable>
        ),
      });
    }, [navigation, ids, mealId, toggleFavoriteHandler])
  );

  if (!selectedMeal) {
    return <Text style={styles.error}>Meal not found!</Text>;
  }

  return (
    <ScrollView style={styles.screen}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetail
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuter}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: { margin: 16 },
  image: { width: '100%', height: 200, borderRadius: 8 },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: { color: 'white' },
  listOuter: { alignItems: 'center' },
  listContainer: { width: '80%' },
  error: {
    flex: 1,
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
    color: 'white',
  },
});
