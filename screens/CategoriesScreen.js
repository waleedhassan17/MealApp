// screens/CategoriesScreen.js
import { FlatList, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTitle from '../components/CategoryGridTitle';

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
      contentContainerStyle={styles.listContainer} // 🔧 Set theme background
    />
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#3f2f25', // Dark theme background
    padding: 8,
  },
});
