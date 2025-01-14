import { View, Image, ScrollView, TouchableOpacity, StyleSheet, useWindowDimensions, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import CustomHeader from '../../components/common/Header'
import Colors from '../../theme/colors';
import Button from '../../components/common/button';
import CustomText from '../../components/common/CustomText';
import Entypo from 'react-native-vector-icons/Entypo';
import EmptyState from '../../components/dashboard/emptyState';
import FavCard from '../../components/dashboard/FavCard';
import GroupCard from '../../components/dashboard/groupCard';
import ToolTip from '../../components/common/ToolTip';
import Alert from '../../helpers/alert';
import userService from '../../services/user/user.service';
import useAuthenticationState from '../../states/zustandStore/authentication';


const Dashboard = ({ navigation }: any) => {

    const { height } = useWindowDimensions()

    const [user, setuser] = useState<any>("")

    const setUser = useAuthenticationState((state: any) => state.setUser);


    const getUser = async () => {
        try {
            const me = await userService.getMe()
            console.log(me.data)
            setuser(me.data)
            setUser(me.data)
        } catch (error: any) {
            Alert.error(error.message)
        }
    }

    useEffect(() => {
        getUser()
    }, [])


    return (
        <ScrollView style={{ backgroundColor: Colors.bgPrimary }}>
            <SafeAreaView>
                <View style={[styles.headerContainer]}>
                    <View style={{ marginTop: 40 }}>
                        <CustomText style={styles.greetings}>good morning</CustomText>
                        <CustomText style={styles.title}>{user?.name ??'Loading ...'}</CustomText>
                    </View>
                    <ToolTip >
                        <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                            <TouchableOpacity onPress={() => navigation.navigate("notifications")}>
                                <CustomText style={{ marginVertical: 5 }}>Notification</CustomText>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("profile")}>
                                <CustomText style={{ marginVertical: 5 }}>My profile</CustomText>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("connectDevice")}>
                                <CustomText style={{ marginVertical: 5 }}>Scan qr code</CustomText>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate("profile")}>
                                <CustomText style={{ marginVertical: 5 }}>sign out</CustomText>
                            </TouchableOpacity>
                        </View>
                    </ToolTip>
                </View>
            </SafeAreaView>
            <View style={{ marginTop: 40, paddingHorizontal: 20, zIndex: 1 }}>
                {
                    !user.has_devices &&
                    <EmptyState  navigation={navigation} />
                }
                {
                    user.has_devices &&
                    <View>
                        <View style={styles.favouritesContainer}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <CustomText style={{ color: Colors.white }}>frequently used devices</CustomText>
                                <Image source={require("../../../assets/icon/fav.png")} style={{ width: 20, height: 20 }} />
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", marginTop: 10 }}>
                                <TouchableOpacity onPress={() => navigation.navigate("device")} style={{ width: "47%" }}>
                                    <FavCard title='Television' subtitle='james room' />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate("device")} style={{ width: "47%" }}>
                                    <FavCard title='Television' subtitle='james room' />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate("device")} style={{ width: "47%" }}>
                                    <FavCard title='Television' subtitle='james room' />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate("device")} style={{ width: "47%" }}>
                                    <FavCard title='Television' subtitle='james room' />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.favouritesContainer}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <CustomText style={{ color: Colors.white }}>groups</CustomText>
                                <CustomText style={{ color: Colors.white }}>view all</CustomText>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", marginTop: 10 }}>
                                <GroupCard title='Television' />
                                <GroupCard title='Television' />
                                <GroupCard title='Television' />
                                <GroupCard title='Television' />
                            </View>
                        </View>
                    </View>
                }
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
    },
    favouritesContainer: {
        backgroundColor: "#424141",
        width: "100%",
        borderRadius: 10,
        padding: 20,
        marginBottom: 15,
    }
})

export default Dashboard