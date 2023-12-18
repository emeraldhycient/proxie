import { View, Image, ScrollView, TouchableOpacity, StyleSheet, useWindowDimensions, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomHeader from '../../components/common/Header'
import Colors from '../../theme/colors';
import Button from '../../components/common/button';
import CustomText from '../../components/common/CustomText';
import { TextInput, TouchableRipple } from "react-native-paper"
import CustomTextInput from '../../components/common/CustomTextInput';
import { BarCodeScanner } from 'expo-barcode-scanner';
import AntDesign from "react-native-vector-icons/AntDesign"

const ConnectDevice = ({ navigation }: any) => {

    const { height } = useWindowDimensions()
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [stage, setstage] = useState(0)

    const [selectedColor, setselectedColor] = useState("")

    useEffect(() => {
        selectedColor && setstage(2)
    }, [selectedColor])

    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [scanned, setScanned] = useState(false);

    const [name, setname] = useState("")
    const [pass_key, setpass_key] = useState("")
    const [slug, setslug] = useState("")
    // const [, set] = useState("")

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }: { type: any, data: any }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    return (
        <ScrollView style={{ backgroundColor: Colors.bgPrimary, flex: 1 }} contentContainerStyle={{ width: '100%' }}>
            <CustomHeader leftIcon={<AntDesign name='arrowleft' size={22} color={Colors.white} />} onLeftPress={() => navigation.goBack()} title={stage === 0 ? "connect your device" : stage === 1 ? "select an icon for your device" : "scan qr code of device"} />
            {
                stage === 0 &&
                <View style={{ height: "100%", width: "100%", paddingHorizontal: 20 }}>
                    <CustomText style={{ marginBottom: 10, marginTop: 40, color: Colors.white }}>Device Name</CustomText>
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
                    <Button title='Proceed' onPress={() => setstage(1)} br={6} h={50} mt={40} color={Colors.white} bg={Colors.primary} />
                </View>
            }
            {
                stage === 1 &&
                <View style={{ height: "100%", width: "100%", paddingHorizontal: 20, paddingVertical: 30 }}>
                    <ScrollView horizontal style={{ height: 100 }} contentContainerStyle={{ height: 100 }}>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => <View style={styles.circle}>
                                <Image source={require("../../../assets/icon/fridge.png")} style={{ height: 30, width: 30 }} />
                            </View>)
                        }
                    </ScrollView>
                    <View style={styles.cardContainer}>
                        {
                            ["#8B5E07", "#063BA3", "#6F4141", "red", "green", "#000000", "#F9AFAB"].map((item) =>
                                <TouchableOpacity onPress={() => setselectedColor(item)}>
                                    <View style={[styles.card, { backgroundColor: item }]}></View>
                                </TouchableOpacity>
                            )
                        }
                    </View>
                    <Button title='Proceed' onPress={() => setstage(2)} br={6} h={50} mt={40} color={Colors.white} bg={Colors.primary} />
                </View>
            }
            {
                stage === 2 &&
                <View style={{ height: "100%", width: "100%", paddingHorizontal: 20 }}>
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={{ height: "60%", width: "100%" }}
                    />
                    {scanned && <Button title={'Tap to Scan Again'} color={Colors.white} mt={20} onPress={() => setScanned(false)} />}
                    <Button title='Connect' onPress={() => { }} br={6} h={50} mt={20} color={Colors.white} bg={Colors.primary} />
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
    circle: {
        width: 62,
        height: 62,
        borderRadius: 62,
        backgroundColor: "#9A9494",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10
    },
    cardContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap"
    },
    card: {
        height: 100,
        width: 100,
        borderRadius: 15,
        marginBottom: 10
    }
})

export default ConnectDevice