import React, { useEffect } from "react";
import { StyleSheet, View,FlatList } from "react-native";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Reddit from "../../components/reddit/reddit";
import { getData } from "../../store/services/RedditSlice";
import Spinner from "../../components/UI/Spinner/Spinner";

const ShowReddit = () => {
    const dispatch = useDispatch();
    const { arrRaddit,isLoading } = useSelector(state => state, shallowEqual);

    useEffect(() => {
        dispatch(getData());
    }, [dispatch])

    return (
            isLoading ? <Spinner/> :
            <FlatList
            keyExtractor={(item) => item.data.id}
            style={styles.container}
            data={arrRaddit}
            renderItem= {(data) => {
                return <View style={styles.main}><Reddit data={data.item.data}/></View>
            }}
            />
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:60,
    },
    main:{
        alignItems:'center',
        justifyContent:'center'
    }
})

export default ShowReddit;