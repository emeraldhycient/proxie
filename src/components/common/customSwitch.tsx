import React, { useState } from 'react';
import { View, Animated, TouchableOpacity, StyleSheet } from 'react-native';

const CustomSwitch = ({
    switchWidth = 50,
    switchHeight = 30,
    switchCircleDiameter = 20,
    activeBackgroundColor = 'blue',
    inactiveBackgroundColor = '#ddd',
    activeCircleColor = 'white',
    inactiveCircleColor = 'white',
    animationDuration = 200
}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const animatedValue = new Animated.Value(0);

    const toggleSwitch = () => {
        Animated.timing(animatedValue, {
            toValue: isEnabled ? 0 : 1,
            duration: animationDuration,
            useNativeDriver: false,
        }).start();

        setIsEnabled(previousState => !previousState);
    };

    const switchTranslate = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, switchWidth - switchCircleDiameter - 5], // 5 is for padding
    });

    return (
        <TouchableOpacity activeOpacity={1} onPress={toggleSwitch}>
            <View style={[styles.switchContainer, {
                width: switchWidth,
                height: switchHeight,
                borderRadius: switchHeight / 2,
                backgroundColor: isEnabled ? activeBackgroundColor : inactiveBackgroundColor
            }]}>
                <Animated.View
                    style={[
                        styles.switch,
                        {
                            width: switchCircleDiameter,
                            height: switchCircleDiameter,
                            borderRadius: switchCircleDiameter / 2,
                            backgroundColor: isEnabled ? activeCircleColor : inactiveCircleColor,
                            transform: [{ translateX: switchTranslate }]
                        },
                    ]}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    switchContainer: {
        justifyContent: 'center',
        padding: 5,
    },
    switch: {},
});

export default CustomSwitch;
