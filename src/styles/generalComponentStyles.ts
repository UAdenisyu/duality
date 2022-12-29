import { StyleSheet } from 'react-native';
import useThemeColors from '../hooks/useThemeColors';

export default function generalComponentStyles() {

    const { componentBackgroundColor,
            titleTextColor,
            plainTextColor,
            dividingLineColor,
            markedTextColor,
            inputBorderColor } = useThemeColors();
    
    return StyleSheet.create({
        _testStyle: {
            height: 100,
            width: 100,
            backgroundColor: 'red',
        },
        wrapper: {
            marginHorizontal: 24,
            padding: 16,
            justifyContent: 'center',
            borderRadius: 24,
            flexDirection: 'column',
            marginTop: 8,
            ...componentBackgroundColor,
        },
        title: {
            fontFamily: 'poppins-regular',
            fontSize: 14,
            fontWeight: '400',
            lineHeight: 21,
            ...titleTextColor,
        },
        titleSmall: {
            fontFamily: 'poppins-regular',
            fontSize: 12,
            fontWeight: '400',
            lineHeight: 18,
            ...titleTextColor,
        },
        titleLight:{
            fontFamily: 'poppins-regular',
            fontSize: 14,
            fontWeight: '400',
            lineHeight: 21,
            ...plainTextColor,
        },
        valueBig: {
            fontFamily: 'poppins-semibold',
            fontSize: 24,
            lineHeight: 28,
            ...plainTextColor,
        },
        valueSmall: {
            fontFamily: 'poppins-regular',
            fontSize: 14,
            lineHeight: 28,
            ...plainTextColor,
        },
        infoIcon: {
            justifyContent: 'center',
            marginLeft: 8,
        },
        cryptoName:{
            marginLeft: 7,
            textAlignVertical: 'center',
            fontFamily: 'poppins-regular',
            fontSize: 14,
            ...titleTextColor,
        },
        borderedSection: {
            paddingTop: 0,
            paddingBottom: 16,
            borderBottomWidth: 1,
            ...dividingLineColor,
        },
        markedText:{
            includeFontPadding: false,
            fontFamily: 'poppins-semibold',
            fontSize: 14,
            lineHeight: 17,
            height: 13,
            ...markedTextColor,
        },
        input:{
            borderWidth: 1,
            borderRadius: 16,
            paddingVertical: 10,
            paddingHorizontal: 32,
            marginVertical: 8,
            ...inputBorderColor,
        }
    });
} 