import { View, Image, ScrollView, TouchableOpacity, StyleSheet, useWindowDimensions, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../../components/common/Header'
import Colors from '../../theme/colors';
import Button from '../../components/common/button';
import CustomText from '../../components/common/CustomText';
import { TextInput, TouchableRipple } from "react-native-paper"
import CustomTextInput from '../../components/common/CustomTextInput';


const ConnectDevice = ({ navigation }: any) => {

    const { height } = useWindowDimensions()
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [stage, setstage] = useState(0)

    return (
        <ScrollView style={{ backgroundColor: Colors.bgPrimary, flex: 1 }} contentContainerStyle={{ height: height, width: '100%' }}>
            <SafeAreaView>
                <View style={[styles.headerContainer]}>
                    <View style={{ marginTop: 40 }}>
                        <CustomText style={styles.title}>connect your device</CustomText>
                    </View>
                    {/* <View style={{ width: "20%", alignItems: "flex-end", marginTop: 40 }}>
                        <Entypo name='dots-three-vertical' color={Colors.white} size={20} />
                    </View> */}
                </View>
            </SafeAreaView>
            {
                stage === 0 &&
                <View style={{ height: "100%", width: "100%", paddingHorizontal: 20 }}>
                    <CustomText style={{ marginBottom: 10, marginTop: 40, color: Colors.white }}>Device Mac Address</CustomText>
                    <CustomTextInput />
                    <CustomText style={{ marginVertical: 10, color: Colors.white }}>Password </CustomText>
                    <CustomTextInput right={
                        <TextInput.Icon
                            icon={secureTextEntry ? "eye" : "eye-off"}
                            onPress={() => {
                                setSecureTextEntry(!secureTextEntry);
                                return false;
                            }}
                            color={Colors.white}
                        />
                    } />
                    <Button title='Connect' onPress={() => { }} br={6} h={50} mt={40} color={Colors.white} bg={Colors.primary} />
                </View>
            }
            {
                stage === 1 &&
                <View style={{ height: "100%", width: "100%", paddingHorizontal: 20 }}>
                    <CustomText style={{ marginBottom: 10, marginTop: 40, color: Colors.white }}>Device Mac Address</CustomText>
                    <CustomTextInput />
                    <CustomText style={{ marginVertical: 10, color: Colors.white }}>Password </CustomText>
                    <CustomTextInput right={
                        <TextInput.Icon
                            icon={secureTextEntry ? "eye" : "eye-off"}
                            onPress={() => {
                                setSecureTextEntry(!secureTextEntry);
                                return false;
                            }}
                            color={Colors.white}
                        />
                    } />
                    <Button title='Connect' onPress={() => { }} br={6} h={50} mt={40} color={Colors.white} bg={Colors.primary} />
                </View>
            }
            {
                stage === 2 &&
                <View style={{ height: "100%", width: "100%", paddingHorizontal: 20 }}>
                    <CustomText style={{ marginBottom: 10, marginTop: 40, color: Colors.white }}>Device Mac Address</CustomText>
                    <CustomTextInput />
                    <CustomText style={{ marginVertical: 10, color: Colors.white }}>Password </CustomText>
                    <CustomTextInput right={
                        <TextInput.Icon
                            icon={secureTextEntry ? "eye" : "eye-off"}
                            onPress={() => {
                                setSecureTextEntry(!secureTextEntry);
                                return false;
                            }}
                            color={Colors.white}
                        />
                    } />
                    <Button title='Connect' onPress={() => { }} br={6} h={50} mt={40} color={Colors.white} bg={Colors.primary} />
                </View>
            }

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

export default ConnectDevice