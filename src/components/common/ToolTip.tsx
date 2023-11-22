import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../../theme/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomText from './CustomText';

const ToolTip = ({ children, contentConatinerStyle }: any) => {

    const [isShowing, setIsShowing] = useState(false)

    return (
        <View style={[{ position: "relative", width: "20%", alignItems: "flex-end", marginTop: 40 }, contentConatinerStyle]}>
            <TouchableOpacity onPress={() => setIsShowing(!isShowing)}>
                <Entypo name='dots-three-vertical' color={Colors.white} size={20} />
            </TouchableOpacity>
            {isShowing &&
                <View style={{ position: "absolute", right: 0, top: 25, width: 170, borderRadius: 20, backgroundColor: "#9A9494", zIndex: 30 }}>
                    {
                        children
                    }
                </View>
            }
        </View>
    )
}

export default ToolTip

const styles = StyleSheet.create({})