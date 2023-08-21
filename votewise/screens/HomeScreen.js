import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {AllImages} from '../../votewise/imagesFile/GlobalImage.js'

function HomeScreen() {
    return (
        <>
            <View>
                <Text>This is the Home screen</Text>
                <Image styles={styles.image} source = {'AllImages.homeImages.flag_chair.jpeg'} />
            </View>

     </>
        )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems: "center"
    },
    image:{
        width: 80,
        height: 80,
        resizeMode: 'cover'
    }
})

export default HomeScreen;