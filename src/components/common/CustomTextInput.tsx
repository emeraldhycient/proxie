import React from 'react';
import { TextInput } from 'react-native-paper';
import Colors from '../../theme/colors';

const CustomTextInput = ({ style, ...rest }: any) => {
    const defaultStyles = {
        backgroundColor: "transparent",
        borderColor:Colors.grey,
        borderWidth: 1,
        color: Colors.white,
        marginTop: 1,
        fontSize: 12,
        borderTopEndRadius: 8,
        borderBottomEndRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        outlineStyle: 'none',
        outline: 'none'
    };

    return (
        <TextInput
            style={[defaultStyles, style]}
            {...rest}
            textColor={Colors.white}
            placeholderTextColor={"#CFD8D878"}
            underlineColor='transparent'
            theme={{
                colors: {
                    text: 'white', underlineColor: 'transparent'
                }
            }} />
    );
};

export default CustomTextInput;
