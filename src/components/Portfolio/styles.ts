import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {

    },
    section: {
        flexDirection: 'row',
    },
    hideZeroBalances: {
        marginTop: 8,
    },
    checkbox: {
        width: 15,
        height: 15,
        borderRadius: 10,
    },
    checkboxText: {
        fontSize: 12,
        lineHeight: 18,
    },
    contentSectionWrapper: {
        marginTop: 16,
        justifyContent: 'space-between',
    },
    contentSection: {
        alignItems: 'center',
        height: 24,
    },
    iconTitle: {
        marginLeft: 8,
    },
    balanceCryptoValue:{
        fontFamily: 'poppins-semibold',
        fontSize: 16,
        marginBottom: -5,
    },
    contentTitleIcon: {
        padding: 1.5,
    },
});