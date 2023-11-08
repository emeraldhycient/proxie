import React from 'react';
import { View, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { TCustomHeader } from '../../constants/types/types';
import CustomText from './CustomText';
import Colors from '../../theme/colors';

const CustomHeader = ({ title, leftIcon, rightIcon, onLeftPress, onRightPress, headerStyle, titleStyle }: TCustomHeader) => {
    return (
        <SafeAreaView>
            <View style={[styles.headerContainer, headerStyle]}>
                <View style={{width:"10%"}}>
                    {leftIcon && onLeftPress && (
                        <TouchableOpacity onPress={onLeftPress} style={styles.iconContainer}>
                            {leftIcon}
                        </TouchableOpacity>
                    )}
                </View>
                <View style={{ width: "70%",justifyContent:"center",alignItems:"center" }}>
                    <CustomText style={[styles.title, titleStyle]}>{title}</CustomText>
                </View>
                <View style={{ width: "20%" }}>
                    {rightIcon && onRightPress && (
                        <TouchableOpacity onPress={onRightPress} style={styles.iconContainer}>
                            {rightIcon}
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        height: 80,
        backgroundColor: Colors.bgPrimary,
    },
    iconContainer: {
        padding: 8,
    },
    title: {
        fontSize: 18,
       color: Colors.white,
        fontWeight:"400"
    },
});

export default CustomHeader;
