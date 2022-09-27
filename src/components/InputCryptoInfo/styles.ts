import { StyleSheet } from 'react-native';
import useThemeColors from "../../hooks/useThemeColors";


export default StyleSheet.create({
    section: {
        flexDirection: 'row',
        paddingTop: 16,
    },
    titleSection:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    title:{
        marginLeft: 16,
        fontFamily: 'trap-semibold',
    },
    persentsPerYear: {
        marginLeft: 18,
        lineHeight: 21,
    },
    arrow: {
        marginLeft: 12,
        marginTop: 6,
        transform: [{ rotate: "-45deg" }],
    }
});