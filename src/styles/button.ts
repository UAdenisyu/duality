import { StyleSheet } from 'react-native';
import useThemeColors from '../hooks/useThemeColors';

export default function ButtonStyles() {
    const colors = useThemeColors();
    return StyleSheet.create({
        wrapper: {
            padding: 16,
        }
    });
} 