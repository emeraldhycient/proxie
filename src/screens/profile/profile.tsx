import { View, Image, ScrollView, TouchableOpacity, StyleSheet, useWindowDimensions, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../../components/common/Header'
import Colors from '../../theme/colors';
import AntDesign from "react-native-vector-icons/AntDesign"
import CustomText from '../../components/common/CustomText';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomTextInput from '../../components/common/CustomTextInput';



const Profile = ({ navigation }: any) => {

    return (
        <ScrollView style={{ backgroundColor: Colors.bgPrimary }}>
            <SafeAreaView>
                <View style={[styles.headerContainer]}>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 40 }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}><AntDesign name='arrowleft' size={22} color={Colors.white} /></TouchableOpacity>
                        <View style={{ marginLeft: 10 }}>
                            <CustomText style={styles.title}>my profile</CustomText>

                        </View>
                    </View>
                  
                </View>
            </SafeAreaView>
            <View style={{ paddingHorizontal: 20 }}>
                <CustomText style={{ marginBottom: 10, marginTop: 40, color: Colors.white }}>account name</CustomText>
                <CustomTextInput placeholder="James Chukchi" />
                <CustomText style={{ marginBottom: 10, marginTop: 40, color: Colors.white }}>connected devices</CustomText>
                <TouchableOpacity style={styles.holder}>
                    <CustomText style={{ color: "#CFD8D878" }}>16 devices</CustomText>
                </TouchableOpacity>
                <CustomText style={{ marginBottom: 10, marginTop: 40, color: Colors.white }}>users</CustomText>
                <TouchableOpacity style={styles.holder}>
                    <CustomText style={{ color: "#CFD8D878" }}>3 users</CustomText>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.holder, { marginBottom: 10, marginTop: 40, }]}>
                    <CustomText style={{ color: Colors.white,fontWeight:"500" }}>settings</CustomText>
                </TouchableOpacity>
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
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 18,
        textAlign: "left",
        color: "#FFFFFF4A"

    },
    favouritesContainer: {
        width: "100%",
        height: 49,
        borderRadius: 10,
        backgroundColor: "#6D644A73",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10

    },
    holder: {
        backgroundColor: "transparent",
        borderColor: Colors.grey,
        borderWidth: 1,
        color: "#CFD8D878",
        marginTop: 1,
        fontSize: 12,
        height: 55,
        borderTopEndRadius: 8,
        borderBottomEndRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        justifyContent: "center",
        paddingHorizontal: 10
    }
})

export default Profile