import { StyleSheet } from 'react-native';
import useThemeColors from '../hooks/useThemeColors';

export default function CommonComponentStyles() {
    const colors = useThemeColors();
    return StyleSheet.create({
        wrapper: {
            color: colors.commonText,
            backgroundColor: colors.componentBackgroud,
            padding: 16,
            justifyContent: 'center',
            borderRadius: 24,
            flexDirection: 'column',
            marginTop: 8,
        }
    });
} 