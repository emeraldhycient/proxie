import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Switch } from 'react-native-paper'
import CustomText from '../common/CustomText';

const GroupCard = ({ title }: { title: string }) => {
    const [checked, setChecked] = React.useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.circle}>
                <Image source={require("../../../assets/icon/fridge.png")} style={{ height: 30, width: 30 }} />
            </View>
            <CustomText style={styles.title}>{title}</CustomText>
        </View>
    )
}

export default GroupCard

const styles = StyleSheet.create({
    container: {
        width: "49%",
        height: 130,
        border: 1,
        backgroundColor: "#6F4141",
        borderRadius: 10,
        marginBottom: 5,
        justifyContent: "center",
        alignItems:"center",
        paddingHorizontal: 10,
    },
    circle: {
        width: 48,
        height: 48,
        borderRadius: 62,
        backgroundColor: "#9A9494",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10
    },
    title: {
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 21,
        textAlign: "left",
        color:"#CFD8D8"
    },
})