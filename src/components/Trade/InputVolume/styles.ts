import { StyleSheet } from "react-native";

export default StyleSheet.create({
    body:{
        flex: 1,
        marginHorizontal: 4,
    },
    section: {
        flexDirection: 'row',
        flex: 1,
    },
    inputWrapper: {
        marginBottom: 0,
    },
    inputText: {
        fontFamily: 'poppins-semibold',
        fontSize: 16,
        marginBottom: -5
    },
    checkboxWrapper:{
        marginTop: 16,
    },
    checkbox: {
        borderRadius: 5,
        borderWidth: 1.5,
    },
    checkboxTitle: {
        marginLeft: 8,
    },
});