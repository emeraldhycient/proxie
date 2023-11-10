import { StyleSheet, Image, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, TouchableRipple } from "react-native-paper"
import CustomHeader from '../../../components/common/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomText from '../../../components/common/CustomText';
import CustomTextInput from '../../../components/common/CustomTextInput';
import Colors from '../../../theme/colors';
import Button from '../../../components/common/button';
import useAuthenticationState from '../../../states/zustandStore/authentication';

const Login = ({ navigation }: any) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const setIsAuthenticated = useAuthenticationState((state: any) => state.setIsAuthenticated);


  return (
    <View style={{ flex: 1, backgroundColor: Colors.bgPrimary }}>
      <CustomHeader title=' ' leftIcon={<MaterialCommunityIcons name='arrow-left' size={20} color={Colors.white} />} onLeftPress={() => navigation.goBack()} />
      <View style={{ paddingHorizontal: 20, backgroundColor: Colors.bgPrimary }}>
        <View>
          <CustomText style={styles.title}>sign in </CustomText>
          <CustomText style={styles.subtitle}>To get started !</CustomText>
        </View>
        <CustomText style={{ marginBottom: 10,marginTop:40, color: Colors.white }}>Email Address</CustomText>
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
        <View style={{ width: "100%", marginHorizontal: "auto", height: 160, flexDirection: "column", justifyContent: "space-between", marginTop: 40 }}>
          <View>
            <TouchableRipple onPress={() => navigation.navigate("ForgotPassword")}>
              <CustomText style={{ marginVertical: 10, textAlign: "right", fontSize: 14, fontWeight: "400", color: Colors.white }}>I forgot my password? </CustomText>
            </TouchableRipple>
            <Button title='Sign in' onPress={() => setIsAuthenticated(true)} br={6} h={50} color={Colors.white} bg={Colors.primary} />
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