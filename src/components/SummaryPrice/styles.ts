import { StyleSheet, Dimensions } from "react-native";


const PhysicalScreenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {

    },
    section: {
        flexDirection: 'row',
    },

    detailsWrapper: {
        marginTop: 16,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 8,
        width: PhysicalScreenWidth / 2 - 24 - 16 - 3
    },
    buttonText: {
        fontFamily: 'trap-semibold',
        fontSize: 14,
        lineHeight: 16,
        textAlign: 'center',
        paddingHorizontal: 10,
    },
});