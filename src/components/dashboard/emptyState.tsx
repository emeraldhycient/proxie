import React from 'react'
import { Image, View } from 'react-native'
import Button from '../common/button'
import Colors from '../../theme/colors'

function EmptyState({navigation}:any) {
  return (
      <View style={{ height: "100%", width: "100%", paddingHorizontal: 20, justifyContent: "center", alignItems: "center" }}>
          <Image source={require("../../../assets/images/dashboard/home.png")} style={{ width: "80%", height: 200 }} />
          <View style={{ width: "100%", marginHorizontal: "auto", height: 160, flexDirection: "column", justifyContent: "space-between", marginTop: 40 }}>
              <Button title='Add device' onPress={() => {
                  navigation.navigate("connectDevice")
              }} br={6} h={50} color={Colors.white} bg={Colors.primary} />
          </View>
      </View>
  )
}

export default EmptyState