import { View, Text, StyleSheet } from 'react-native';
function Subtitle({ children }) {
    return(
         <View style={styles.subtitleContainer}>
                  <Text style={styles.subtitle}>{children}</Text>

            </View>

    );
}

export default Subtitle;

const styles=StyleSheet.create({
        subtitle: {
        fontSize: 18,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#e2b497',
        textAlign: 'center',
        
    },
    subtitleContainer: {
        margin: 6,
        padding: 6,
        borderBlockColor: '#e2b497',
        borderBottomWidth: 2,

    },
});