import { View, Image, ScrollView, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/common/Header'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../../theme/colors';
import CategoryPills from '../../components/dashboard/CategoryPills';
import StreamCard from './streamCard';
import Button from '../../components/common/button';

const Dashboard = ({ navigation }: any) => {

    const { height } = useWindowDimensions()
    
    return (
        <ScrollView style={{ backgroundColor: Colors.bgPrimary }} contentContainerStyle={{height:height}}>
            <CustomHeader/>
            <View style={{ height: "100%",width:"100%",paddingHorizontal:20,justifyContent:"center",alignItems:"center" }}>
                <Image source={require("../../../assets/images/dashboard/home.png")} style={{ width: "80%", height: 200 }} />
                <View style={{ width: "100%", marginHorizontal: "auto", height: 160, flexDirection: "column", justifyContent: "space-between", marginTop: 40 }}>
                    <Button title='Add device' onPress={() => {}} br={6} h={50} color={Colors.white} bg={Colors.primary} />  
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    righticon: {
        width: "100%",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 8
    },
    categorycontainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: "2%"
    }
})

export default Dashboard