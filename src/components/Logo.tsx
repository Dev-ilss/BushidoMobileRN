
import React, {memo} from "react";
import { Image, StyleSheet } from "react-native";

const Logo =() => {
    return(
        <Image source={require('../assets/Bushido.png')} style={styles.image} />
    );
};

const styles = StyleSheet.create({
    image :{
        width : 256,
        height : 256,
        marginBottom : 4,
    },
});

export default memo(Logo);