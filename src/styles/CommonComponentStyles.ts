import { StyleSheet } from 'react-native';
import useThemeColors from '../hooks/useThemeColors';

export default function CommonComponentStyles() {
    const colors = useThemeColors();
    
    return StyleSheet.create({
        wrapper: {
            marginHorizontal: 24,
            backgroundColor: colors.componentBackground,
            padding: 16,
            justifyContent: 'center',
            borderRadius: 24,
            flexDirection: 'column',
            marginTop: 8,
        },
        title: {
            color: colors.grey,
            fontFamily: 'poppins-regular',
            fontSize: 14,
            fontWeight: '400',
        },
        titleLight:{
            color: colors.plainText,
            fontFamily: 'poppins-regular',
            fontSize: 14,
            fontWeight: '400',
            lineHeight: 21,
        },
        valueBig: {
            color: colors.plainText,
            fontFamily: 'poppins-semibold',
            fontSize: 24,
            lineHeight: 28,
        },
        valueSmall: {
            color: colors.plainText,
            fontFamily: 'poppins-regular',
            fontSize: 14,
            lineHeight: 28,
        },
        infoIcon: {
            justifyContent: 'center',
            marginLeft: 8,
        },
        cryptoName:{
            color: colors.grey,
            marginLeft: 7,
            textAlignVertical: 'center',
            fontFamily: 'poppins-regular',
            fontSize: 14,
        },
        borderedSection: {
            paddingTop: 0,
            paddingBottom: 16,
            borderBottomColor: colors.componentDividingLine,
            borderBottomWidth: 1,
        },
        markeredText:{
            fontFamily: 'poppins-semibold',
            fontSize: 14,
            color: colors.selectedItemColor
        }
    });
} 