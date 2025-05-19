import { View, Text, StyleSheet } from 'react-native';

function List({ data }) {
    return (
        <View style={styles.listContiner}>
            {data.map((item, index) => (
                <View key={index} style={styles.listItem}>
                    <Text style={styles.innerText}>{item}</Text>
                </View>
            ))}
        </View>
    );
}

export default List;

const styles = StyleSheet.create({
   
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497'
    },
    innerText: {
        textAlign: 'center',
        color: '#351401'
    },
   
});
