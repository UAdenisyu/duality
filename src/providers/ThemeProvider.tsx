
import React, { useState } from 'react';
import { Appearance } from 'react-native';
import colors from '../constants/Colors';

const { LIGHT_COLORS, DARK_COLORS } = colors;
// контекст с параметрами по-умолчанию
export const ThemeContext = React.createContext({
    isDark: false,
    colors: LIGHT_COLORS,
    setColorScheme: (scheme:string) => {},
});

export const ThemeProvider = () => {
    const colorScheme = Appearance.getColorScheme();
    const [isDark, setIsDark] = useState(colorScheme === 'dark');
    const defaultTheme = {
        isDark,
        colors: isDark ? DARK_COLORS : LIGHT_COLORS,
        setColorScheme: (scheme: string) => {
            setIsDark(scheme === 'dark');
        },
    };

    return (
        <ThemeContext.Provider value={defaultTheme}>
        </ThemeContext.Provider>
    );
};