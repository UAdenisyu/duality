import { StyleSheet } from "react-native";

export default StyleSheet.create({
    body: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 6,
    },
    btn:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnActive: {
        backgroundColor: 'rgba(255, 255, 255, 0.16)',
    },
    btnText: {
        textAlign: 'center',
        alignSelf: 'stretch',
        borderRadius: 45,
        paddingHorizontal: 20,
        paddingVertical: 3,
    }
});