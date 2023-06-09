import { LIGHT_COLORS, DARK_COLORS } from 'constants/Colors';
import { useColorScheme, StyleSheet } from 'react-native';

// The useColorScheme value is always either light or dark, but the built-in
// type suggests that it can be null. This will not happen in practice, so this
// makes it a bit easier to work with.

export default function useThemeColors() {
    const {
        plainText,
        componentBackground,
        grey,
        componentDividingLine,
        selectedItemColor,
        modalWindowElementsColor,
        extraDark,
        lightGrey,
        extraLight,
        cancel,
        buttonBackground,
        warning,
        candleGreen,
        candleRed,
    } = useColorScheme() === 'dark' ? DARK_COLORS : LIGHT_COLORS;

    const coloredItem = StyleSheet.create({
        plainTextColor: {
            color: plainText,
        },
        lightBorderedItem: {
            borderColor: plainText,
        },
        componentBackgroundColor: {
            backgroundColor: componentBackground,
        },
        titleTextColor: {
            color: grey,
        },
        tableColumnTitleColor: {
            color: lightGrey,
        },
        darkTextColor: {
            color: extraDark,
        },
        dividingLineColor: {
            borderBottomColor: componentDividingLine,
        },
        markedTextColor: {
            color: selectedItemColor,
        },
        markedItemBorderColor: {
            borderColor: selectedItemColor,
        },
        markedItemBackgroundColor: {
            backgroundColor: selectedItemColor,
        },
        modalTextDarkColor: {
            color: modalWindowElementsColor,
        },
        modalOkButtonDarkColor: {
            backgroundColor: modalWindowElementsColor,
        },
        modalBottomFillColor: {
            backgroundColor: extraDark,
        },
        modalLightBackgroundColor: {
            backgroundColor: extraLight,
        },
        inputBorderColor: {
            borderColor: lightGrey,
        },
        cancelText: {
            color: cancel,
        },
        cancelButton: {
            backgroundColor: buttonBackground.danger,
        },
        warningText: {
            color: warning,
        },
        inputColors: {
            borderColor: componentDividingLine,
            color: plainText,
        },
        candleRed: {
            backgroundColor: candleRed,
        },
        candleGreen: {
            backgroundColor: candleGreen,
        },
        sliderSelectedStyle: {
            backgroundColor: grey,
        },
    });

    return coloredItem;
}
