import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Switch } from 'react-native-paper'
import CustomText from '../common/CustomText';

const FavCard = ({title,subtitle}:{title:string,subtitle:string}) => {
    const [checked, setChecked] = React.useState(false);

    return (
        <View style={styles.container}>
            <View style={{ justifyContent: "space-between", paddingVertical: 7 }}>
                <CustomText style={styles.title}>{title}</CustomText>
                <CustomText style={styles.subtitle}>{subtitle}</CustomText>
            </View>
            <Switch value={checked} trackColor={{ true: '#000000', false: '#000000' }} onValueChange={setChecked} />
        </View>
    )
}

export default FavCard

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 62,
        border: 1,
        backgroundColor: "#B4ADAD",
        borderRadius: 10,
        marginBottom: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 21,
        textAlign: "left"
    },
    subtitle: {
        fontSize: 10,
        fontWeight: "400",
        lineHeight: 15,
        textAlign: "left"

    }
})