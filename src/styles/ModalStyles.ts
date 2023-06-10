import useThemeColors from 'hooks/useThemeColors';
import { StyleSheet } from 'react-native';

export default function ModalStyles() {
    const colors: any = useThemeColors();
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
            color: colors.plainText,
            alignSelf: 'center',
        },
        bottomModalItems: {
            padding: 16,
            backgroundColor: colors.componentBackground,
        },
    });
}
