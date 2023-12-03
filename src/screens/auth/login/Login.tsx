import { StyleSheet, Image, View, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { TextInput, TouchableRipple } from "react-native-paper"
import CustomHeader from '../../../components/common/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomText from '../../../components/common/CustomText';
import CustomTextInput from '../../../components/common/CustomTextInput';
import Colors from '../../../theme/colors';
import Button from '../../../components/common/button';
import useAuthenticationState from '../../../states/zustandStore/authentication';
import Alert from '../../../helpers/alert';
import authService from '../../../services/auth/auth.service';

const Login = ({ navigation, route }: any) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const setIsAuthenticated = useAuthenticationState((state: any) => state.setIsAuthenticated);

  const params = route.params
  const [password, setpassword] = useState("");
  const [email, setEmail] = useState(params?.email)
  const [isloading, setisloading] = useState(false)


  const handleLogin = async () => {
    if (!password) {
      Alert.error("please enter password")
      return
    }
    if (!email) {
      Alert.error("please enter email")
      return
    }

    setisloading(true)
    try {
      const resp = await authService.login({ email, password })
      console.log(resp.data)
      Alert.success("ogin successful")
      setIsAuthenticated(true)
      setisloading(false)
    } catch (error: any) {
      console.log(error)
      Alert.error(error.message)
      setisloading(false)
    }

  }


  return (
    <View style={{ flex: 1, backgroundColor: Colors.bgPrimary }}>
      <CustomHeader title=' ' leftIcon={<MaterialCommunityIcons name='arrow-left' size={20} color={Colors.white} />} onLeftPress={() => navigation.goBack()} />
      <View style={{ paddingHorizontal: 20, backgroundColor: Colors.bgPrimary }}>
        <View>
          <CustomText style={styles.title}>sign in </CustomText>
          <CustomText style={styles.subtitle}>To get started !</CustomText>
        </View>
        <CustomText style={{ marginBottom: 10, marginTop: 40, color: Colors.white }}>Email Address</CustomText>
        <CustomTextInput inputMode="email" value={email} onChangeText={(text: string) => { setEmail(text) }} />
        <CustomText style={{ marginVertical: 10, color: Colors.white }}>Password </CustomText>
        <CustomTextInput
          value={password}
          onChangeText={(text: string) => { setpassword(text) }}
          right={
            <TextInput.Icon
              icon={secureTextEntry ? "eye" : "eye-off"}
              onPress={() => {
                setSecureTextEntry(!secureTextEntry);
                return false;
              }}
              color={Colors.white}
            />
          } />
        <View style={{ width: "100%", marginHorizontal: "auto", height: 160, flexDirection: "column", justifyContent: "space-between", marginTop: 40 }}>
          <View>
            <TouchableRipple onPress={() => navigation.navigate("ForgotPassword")}>
              <CustomText style={{ marginVertical: 10, textAlign: "right", fontSize: 14, fontWeight: "400", color: Colors.white }}>I forgot my password? </CustomText>
            </TouchableRipple>
            {
              isloading ?
                <Button br={6} h={50} color={Colors.white} bg={Colors.primary} >
                  <ActivityIndicator color={Colors.white} size={'large'} />
                </Button>
                :
                <Button title='Sign in' onPress={handleLogin} br={6} h={50} color={Colors.white} bg={Colors.primary} />
            }
          </View>
          {/* <Button bg='white' onPress={() => navigation.navigate("Login")} style={{ backgroundColor: "white", borderColor: Colors.primary, borderWidth: 0.5, width: "100%", borderRadius: 6, height: 50, justifyContent: "center", alignItems: "center", alignSelf: "center" }} >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <CustomText style={{ fontSize: 14, fontWeight: '300', lineHeight: 24, textAlign: "center", color: Colors.primary }}>Sign in using fingerprint</CustomText>
              <MaterialCommunityIcons name='fingerprint' size={20} style={{ marginLeft: 10 }} color={Colors.primary} />
            </View>
          </Button> */}

        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 28,
    textAlign: "center",
    color: Colors.white,
    marginBottom: 10
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 23,
    textAlign: "center",
    color: Colors.white

  }
})