import { StyleSheet, Dimensions } from "react-native";


const PhysicalScreenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleSection: {
        borderBottomWidth: 1,
    },
    componentTitle: {
        fontFamily: 'poppins-medium',
        fontSize: 16,
    },
    infoBlock: {
        marginTop: 8,
    },
    btn:{
        marginTop: 19,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
    },
    btnText: {
        paddingVertical: 15,
        fontFamily: 'trap-semibold',
        fontSize: 16,
    }
});