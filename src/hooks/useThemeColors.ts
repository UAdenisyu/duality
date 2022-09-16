
import { useColorScheme } from 'react-native';
import { LIGHT_COLORS, DARK_COLORS} from '../constants/Colors';

// The useColorScheme value is always either light or dark, but the built-in
// type suggests that it can be null. This will not happen in practice, so this
// makes it a bit easier to work with.

export default function useThemeColors() {
    return useColorScheme() === 'dark' ? DARK_COLORS : LIGHT_COLORS;
}

