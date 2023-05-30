import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sectionNested: {
        flexDirection: 'row',
    },
    tableWrapper: {
        marginTop: 12,
    },
    spaceFillingLine: {
        height: 22,
        borderLeftWidth: 1.5,
        marginLeft: 7.25,
        marginVertical: -3,
    },
    marker: {
        backgroundColor: 'transparent',
        width: 16,
        height: 16,
        borderWidth: 3,
        borderRadius: 24,
        alignSelf: 'center',
        marginRight: 10,
    },
    titles: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
    values: {
        flex: 1,
        paddingTop: 5,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    bottomSection: {
        marginTop: 8,
    },
    infoIcon: {
        justifyContent: 'center',
        marginLeft: 7,
    },
    titlesBottom: {
        marginTop: 8,
    },
});
