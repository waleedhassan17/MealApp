import { View, Text, Image, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealDetail from '../MealDetail';

function MealItem({ id, title, imageUrl, duration, complexity, affordability, onPress }) {
    const navigation = useNavigation();
   

    function selectMealItemHandler() {
         navigation.navigate('MealDetail', { mealId: id })
    }
    return(
        <View style={styles.mealItem}>
           <TouchableOpacity 
                onPress={selectMealItemHandler}
                activeOpacity={0.7}
           >
                <View style={styles.innerContainer}>
                <View>
                    <Image source={{uri: imageUrl}} style={styles.Image}/>
                    <Text style={styles.title}>
                         {title}
                    </Text>
                </View>
                <MealDetail duration={duration} complexity={complexity} affordability={affordability}/>
                </View>
            </TouchableOpacity>
        </View>
        
    );
}

export default MealItem;

const styles= StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        //overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2},
       // overflow: Platform.OS=== 'android' ? 'hidden' : 'visible',
        
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    buttonPressed: {
        opacity: 0.5,
    },
    Image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    }
})