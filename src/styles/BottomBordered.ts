import { StyleSheet } from 'react-native';
import useThemeColors from '../hooks/useThemeColors';

export default function BottomBordered() {
    const colors = useThemeColors();
    return StyleSheet.create({
        bordered: {
            paddingTop: 0,
            paddingBottom: 16,
            borderBottomColor: colors.componentDividingLine,
            borderBottomWidth: 1,
        }
    });
} 