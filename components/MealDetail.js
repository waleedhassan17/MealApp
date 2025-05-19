import { View, Text, StyleSheet } from 'react-native';

function MealDetail({ duration, complexity, affordability, containerStyle, textStyle }) {
  return (
    <View style={[styles.detailContainer, containerStyle]}>
      <Text style={[styles.detailText, textStyle]}>Duration: {duration} mins</Text>
      <Text style={[styles.detailText, textStyle]}>Complexity: {complexity}</Text>
      <Text style={[styles.detailText, textStyle]}>Affordability: {affordability}</Text>
    </View>
  );
}

export default MealDetail;

const styles = StyleSheet.create({
  detailContainer: {
    marginVertical: 8,
    padding: 10,
    backgroundColor: '#444',
    borderRadius: 8,
  },
  detailText: {
    color: 'white',
    fontSize: 14,
    marginBottom: 4,
  },
});
