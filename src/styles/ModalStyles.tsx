import { StyleSheet } from 'react-native';
import useThemeColors from '../hooks/useThemeColors';

export default function ModalStyles() {
    const colors = useThemeColors();
    return StyleSheet.create({
        wrapper: {
            padding: 24,
            marginHorizontal: 24,
            backgroundColor: colors.extraLight,
            color: colors.modalWindowElementsColor,
            alignSelf: 'center',
        }
    });
} 