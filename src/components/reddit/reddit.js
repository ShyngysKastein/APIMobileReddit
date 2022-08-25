import React from "react";
import { View, Image,StyleSheet,Text } from "react-native";

const Reddit = ({data}) => {
    return(
        <View style={styles.container} key={data.id}>
            <Image style={styles.image} source={{uri:data.thumbnail}}/>
            <Text style={styles.text}>{data.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        width:'90%',
        padding:10,
        marginBottom:10,
        backgroundColor:'#000'
    },
    image:{
        width:40,
        height:40,
        marginRight:10
    },
    text:{
        color:'#fff',
        width:300
    }
})

export default Reddit;