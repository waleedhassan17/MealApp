import { StyleSheet, View, FlatList } from "react-native";
import MealItem from "./MealItem";
import { useNavigation } from "@react-navigation/native";

function MealList({ items }) {
  const navigation = useNavigation();

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
      onPress: () => {
        navigation.navigate('MealDetail', {
          mealId: item.id,
        });
      }
    };

    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
