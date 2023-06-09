import { useNavigation } from '@react-navigation/native';
import { memo, FC } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { RootScreenNavigationProp } from 'types/navigationStacks';

const styles = StyleSheet.create({
    goBackBtn: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    headerBackArrow: {
        borderColor: 'white',
        marginLeft: 20,
        borderLeftWidth: 3,
        borderBottomWidth: 3,
        height: 10,
        width: 10,
        borderRadius: 2,
        transform: [{ rotate: '45deg' }],
    },
});

const HeaderBackButton: FC = () => {
    const navigation = useNavigation<RootScreenNavigationProp>();

    const goBack = () => navigation.goBack();

    return (
        <Pressable style={styles.goBackBtn} onPress={goBack}>
            <View style={styles.headerBackArrow} />
        </Pressable>
    );
};

export default memo(HeaderBackButton);
