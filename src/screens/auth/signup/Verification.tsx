import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CustomHeader from '../../../components/common/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../../theme/colors';
import CustomText from '../../../components/common/CustomText';
import Button from '../../../components/common/button';
import { useRef, useState } from 'react';
import OTPInput from 'react-native-otp';
import Alert from '../../../helpers/alert';
import authService from '../../../services/auth/auth.service';
import { ActivityIndicator } from 'react-native';
import CustomTextInput from '../../../components/common/CustomTextInput';

const Verification = ({ navigation, route }: any) => {
    const params = route.params
    const [value, setValue] = useState("");
    const [email, setEmail] = useState(params?.email)
    const [isloading, setisloading] = useState(false)


    const handleverify = async () => {
        if (!value) {
            Alert.error("please enter otp code sent to your email")
            return
        }
        if (!email) {
            Alert.error("please enter email")
            return
        }

        setisloading(true)
        try {
            const resp = await authService.verifyUser({ email, token: value })
            console.log(resp.data)
            Alert.success("Account verification successful")
            navigation.navigate("Login", { email })
            setisloading(false)
        } catch (error: any) {
            console.log(error)
            Alert.error(error.message)
            setisloading(false)
        }

    }
    const [resendLimit, setresendLimit] = useState(0)

    const handleOtpResend = async () => {

        if (resendLimit === 3) {
            Alert.error("You have exceeded your retry limit")
            return
        }
        try {
            const resp = await authService.reSendOtp({ email })
            console.log(resp.data)
            Alert.success("Otp Resent Successful")
            setisloading(false)
            setresendLimit(resendLimit + 1)
        } catch (error: any) {
            console.log(error)
            Alert.error(error.message)
            setisloading(false)
        }
    }

    return (
        <>
            <CustomHeader title='Verify Email Address' leftIcon={<MaterialCommunityIcons name='arrow-left' size={20} color={Colors.white} />} onLeftPress={() => navigation.goBack()} />
            <View style={styles.container}>
                <View style={{ width: "100%", marginHorizontal: "auto", height: 115, flexDirection: "column", justifyContent: "space-between" }}>
                    {/* <OTPInput
                        value={value}
                        onChange={(text: string) => {
                            setValue(text)
                        }}
                        tintColor="#FB6C6A"
                        offTintColor="#BBBCBE"
                        otpLength={6}
                        cellStyle={{ borderRadius: 12, height: 50, width: 50, borderColor: Colors.grey, borderWidth: 0.6,color:"white" }}
                    /> */}
                    <CustomTextInput placeholder="OTP" inputMode="number" value={value} onChangeText={(text: string) => { setValue(text) }} />

                    <TouchableOpacity onPress={handleOtpResend}>
                        <CustomText style={{ fontSize: 14, color: Colors.grey, textAlign: 'left', marginVertical: 20, marginLeft: 10 }}>Resend Code</CustomText>
                    </TouchableOpacity>
                    {
                        isloading ?
                            <Button br={6} h={50} color={Colors.white} bg={Colors.primary} >
                                <ActivityIndicator color={Colors.white} size={'large'} />
                            </Button>
                            : <Button title='Confirm' onPress={handleverify} br={12} h={50} color={Colors.white} bg={Colors.primary} />
                    }
                </View>
            </View>
        </>
    )
}

export default Verification

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        backgroundColor: Colors.bgPrimary,
        paddingHorizontal: 20
    },
})