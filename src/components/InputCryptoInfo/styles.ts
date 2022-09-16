import { StyleSheet } from 'react-native';
import useThemeColors from "../../hooks/useThemeColors";


export default StyleSheet.create({
    section: {
        flexDirection: 'row',
        paddingTop: 16,
    },
    titleSection:{
        flexDirection: 'row',
        paddingBottom: 16,
        borderBottomWidth: 1,
    },
    title:{
        marginLeft: 16,
        textAlignVertical: 'center',
        fontFamily: 'trap-semibold',
    },
    persentsPerYearTitle: {
        lineHeight: 21,
    },
    persentsPerYearValue: {
        marginLeft: 18,
        fontFamily: 'poppins-semibold',
        fontSize: 14,
        lineHeight: 21,
    },
    arrow: {
        marginLeft: 12,
        marginTop: 6,
        transform: [{ rotate: "-45deg" }],
    }
});