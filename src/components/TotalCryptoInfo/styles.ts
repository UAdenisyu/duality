import { StyleSheet } from "react-native";

export default StyleSheet.create({
    section: {
        flexDirection: 'row',
    },
    componentTitle: {
        fontFamily: 'poppins-regular',
        fontSize: 14,
        lineHeight: 21,
    },
    tableWrapper: {
        marginTop: 12,
    },
    spaceFillingLine: {
        marginVertical: -1,
        height: 22,
        borderLeftWidth: 1.5,
        marginLeft: 7.25,
    },
    marker: {
        backgroundColor: 'transparent',
        width: 16,
        height: 16,
        borderWidth: 3,
        borderRadius: 24,
        alignSelf: 'center',
    },
    titles: {
        flex:1,
        marginLeft: 10,
        justifyContent: 'center',
        padding: 0,
        margin: 0,
    },
    titlesText:{
        fontFamily: 'poppins-regular',
        fontSize: 12,
        lineHeight: 18,
    },
    values: {
        justifyContent: 'center',
    }, 
    valuesText:{
        fontFamily: 'poppins-semibold',
        fontSize: 14,
        lineHeight: 16,
    },

    bottomSection: {
        marginTop: 8,
    },
    bottomSectionRow: {
        marginTop: 8,
        justifyContent: 'space-between',
    },
});