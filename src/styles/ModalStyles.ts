import { StyleSheet } from 'react-native';
import useThemeColors from '../hooks/useThemeColors';

export default function ModalStyles() {
    const colors = useThemeColors();
    return StyleSheet.create({
        center: {
            padding: 24,
            marginHorizontal: 24,
            backgroundColor: colors.extraLight,
            color: colors.modalWindowElementsColor,
            alignSelf: 'center',
        },
        bottom: {
            padding: 24,
            backgroundColor: colors.extraDark,
            color: colors.commonText,
            alignSelf: 'center',
        },
        bottomModalItems: {
            padding: 16,
            backgroundColor: colors.componentBackgroud,
        }

    });
} 