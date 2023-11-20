import { View, Image, ScrollView, TouchableOpacity, StyleSheet, useWindowDimensions, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../../components/common/Header'
import Colors from '../../theme/colors';
import AntDesign from "react-native-vector-icons/AntDesign"
import CustomText from '../../components/common/CustomText';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomSwitch from '../../components/common/customSwitch';



const Device = ({ navigation }: any) => {
    const [checked, setChecked] = React.useState(false);


    return (
        <ScrollView style={{ backgroundColor: Colors.bgPrimary }}>
            <SafeAreaView>
                <View style={[styles.headerContainer]}>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 40 }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}><AntDesign name='arrowleft' size={22} color={Colors.white} /></TouchableOpacity>
                        <View style={{ marginLeft: 10 }}>
                            <CustomText style={styles.title}>water heater</CustomText>
                            <CustomText style={styles.greetings}>bath room</CustomText>
                        </View>
                    </View>
                    <View style={{ width: "20%", alignItems: "flex-end", marginTop: 40 }}>
                        <Entypo name='dots-three-vertical' color={Colors.white} size={20} />
                    </View>
                </View>
            </SafeAreaView>
            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                <TouchableOpacity onPress={() => setChecked(!checked)}>
                    <Image source={checked ? require("../../../assets/icon/on.png") : require("../../../assets/icon/off.png")} resizeMethod='scale' style={{ width: "100%", height: 170 }} />
                </TouchableOpacity>
                <View style={{ marginTop: 30 }}>
                    <View style={styles.favouritesContainer}>
                        <CustomText style={{color:Colors.white}}>
                            {checked ? "Remove from" : "Add to"} favourite
                        </CustomText>
                        <Image source={checked ? require("../../../assets/icon/fav.png") : require("../../../assets/icon/n-fav.png")} style={{ width: 30, height: 30 }} />
                    </View>
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
        padding:10

    }
})

export default Device