import { StyleSheet, Image, View, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Switch } from "react-native-paper"
import CustomHeader from '../../../components/common/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomText from '../../../components/common/CustomText';
import CustomTextInput from '../../../components/common/CustomTextInput';
import Colors from '../../../theme/colors';
import Button from '../../../components/common/button';
import Alert from '../../../helpers/alert';
import authService from '../../../services/auth/auth.service';

const SignUp = ({ navigation }: any) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [checked, setChecked] = React.useState(false);

  const [isloading, setisloading] = useState(false)

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignup = async () => {
    if (!fullName) {
      Alert.error("please enter full name")
      return
    }
    if (!email) {
      Alert.error("please enter email")
      return
    }
    if (!password) {
      Alert.error("please enter password ")
      return
    }
    if (!checked) {
      Alert.error("you have to accept the terms to proceed")
      return
    }

    setisloading(true)
    try {
      const resp = await authService.register({ email, name: fullName, password, re_password: password })
      console.log(resp.data)
      Alert.success("Account creation successful")
      navigation.navigate("Verification", { email})
      setisloading(false)
    } catch (error: any) {
      console.log(error)
      Alert.error(error.message)
      setisloading(false)
    }

  }

  return (
    <ScrollView style={{ backgroundColor: Colors.bgPrimary }}>
      <CustomHeader title=' ' leftIcon={<MaterialCommunityIcons name='arrow-left' size={20} color={Colors.white} />} onLeftPress={() => navigation.goBack()} />
      <View style={{ paddingHorizontal: 20 }}>
        <View>
          <CustomText style={styles.title}>Create Account </CustomText>
          <CustomText style={styles.subtitle}>To get started !</CustomText>
        </View>
        <CustomText style={{ marginBottom: 10, marginTop: 40, color: Colors.white }}>Full Name</CustomText>
        <CustomTextInput value={fullName} onChangeText={(text: string) => { setFullName(text) }} />
        <CustomText style={{ marginVertical: 10, color: Colors.white }}>Email</CustomText>
        <CustomTextInput inputMode="email" value={email} onChangeText={(text: string) => { setEmail(text) }} />
        <CustomText style={{ marginVertical: 10, color: Colors.white }}>Create Password </CustomText>
        <CustomTextInput
          value={password}
          onChangeText={(text: string) => { setPassword(text) }}
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
        <View style={{ width: "100%", marginHorizontal: "auto", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 20 }}>
          <Switch
            value={checked}
            onValueChange={() => {
              setChecked(!checked);
            }}
            color={Colors.primary}
          />
          <View style={{ width: "90%" }}>
            <CustomText style={{ fontSize: 14, fontWeight: '300', lineHeight: 24, textAlign: "center", color: Colors.white }}>By continuing, you agree to our  <CustomText style={{ marginTop: 20, fontSize: 14, fontWeight: '300', lineHeight: 24, textAlign: "center", color: Colors.primary }}>Terms of Service , Broadcaster Agreement & Privacy Policy</CustomText></CustomText>
          </View>
        </View>
        {
          isloading ?
            <Button br={6} h={50} color={Colors.white} bg={Colors.primary} >
              <ActivityIndicator color={Colors.white} size={'large'} />
            </Button>
            :
            <Button title='Get Started' onPress={handleSignup} br={6} h={50} color={Colors.white} bg={Colors.primary} />
        }
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 10 }}>
          <View style={styles.lines}></View>
          <CustomText style={styles.textunder}>or sign up with</CustomText>
          <View style={styles.lines}></View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginVertical: 10 }}>
          <Image source={require('../../../../assets/icon/facebook.png')} style={{ width: 30, height: 30, marginHorizontal: 10 }} />
          <Image source={require('../../../../assets/icon/google.png')} style={{ width: 30, height: 30, marginHorizontal: 10 }} />
        </View>
        <CustomText style={styles.textunder}>already have an account?</CustomText>
      </View>
    </ScrollView>
  )
}

export default SignUp

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
  },
  textunder: {
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 18,
    textAlign: "center",
    color: Colors.white,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  lines: {
    height: 1,
    width: 70,
    backgroundColor: Colors.white
  }
})