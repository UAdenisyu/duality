
import { useColorScheme, StyleSheet } from 'react-native';
import { LIGHT_COLORS, DARK_COLORS} from '../constants/Colors';

// The useColorScheme value is always either light or dark, but the built-in
// type suggests that it can be null. This will not happen in practice, so this
// makes it a bit easier to work with.

export default function useThemeColors() {
    const { plainText,
            componentBackground,
            grey,
            componentDividingLine,
            selectedItemColor,
            modalWindowElementsColor,
            extraDark,
            lightGrey
             } = useColorScheme() === 'dark' ? DARK_COLORS : LIGHT_COLORS;
    
    const coloredItem = StyleSheet.create({
        plainTextColor: {
            color: plainText,
        },
        componentBackgroundColor: {
            backgroundColor: componentBackground,
        },
        titleTextColor:{
            color: grey,
        },
        dividingLineColor: {
            borderBottomColor: componentDividingLine,
        },
        markedTextColor: {
            color: selectedItemColor,
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
        inputBorderColor: {
            borderColor: lightGrey,
        },
        markedItemBorderColor: {
            borderColor: selectedItemColor,
        },
    });
    
    return coloredItem ;
}

