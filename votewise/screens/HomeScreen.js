import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <>
            <View style={styles.container}>
                <Text>This is the Home screen</Text>
            </View>

     </>
        )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: Center,
        alignItems: Center
    }

})
export default HomeScreen