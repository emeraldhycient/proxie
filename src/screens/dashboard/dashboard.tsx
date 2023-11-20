import { View, Image, ScrollView, TouchableOpacity, StyleSheet, useWindowDimensions, SafeAreaView } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/common/Header'
import Colors from '../../theme/colors';
import Button from '../../components/common/button';
import CustomText from '../../components/common/CustomText';
import Entypo from 'react-native-vector-icons/Entypo';


const Dashboard = ({ navigation }: any) => {

    const { height } = useWindowDimensions()

    return (
        <ScrollView style={{ backgroundColor: Colors.bgPrimary }} contentContainerStyle={{ height: height }}>
            <SafeAreaView>
                <View style={[styles.headerContainer]}>
                    <View style={{marginTop:40}}>
                        <CustomText style={styles.greetings}>good morning</CustomText>
                        <CustomText style={styles.title}>james</CustomText>
                    </View>
                    <View style={{ width: "20%", alignItems: "flex-end", marginTop: 40 }}>
                        <Entypo name='dots-three-vertical' color={Colors.white} size={20}/>
                    </View>
                </View>
            </SafeAreaView>
            <View style={{ height: "100%", width: "100%", paddingHorizontal: 20, justifyContent: "center", alignItems: "center" }}>
                <Image source={require("../../../assets/images/dashboard/home.png")} style={{ width: "80%", height: 200 }} />
                <View style={{ width: "100%", marginHorizontal: "auto", height: 160, flexDirection: "column", justifyContent: "space-between", marginTop: 40 }}>
                    <Button title='Add device' onPress={() => navigation.navigate("connectDevice")} br={6} h={50} color={Colors.white} bg={Colors.primary} />
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        height: 80,
        backgroundColor: Colors.bgPrimary,
    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        lineHeight: 30,
        textAlign: "left",
        color: Colors.white,

    },
    greetings: {
        fontSize: 16,
        fontWeight: "normal",
        lineHeight: 19,
        textAlign: "left",
        color: Colors.white,
    }
})

export default Dashboard