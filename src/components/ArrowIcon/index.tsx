import { FC, memo } from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    arrow: {
        marginLeft: 20,
        borderRightWidth: 3,
        borderTopWidth: 3,
        height: 10,
        width: 10,
        borderRadius: 2,
        transform: [{ rotate: '45deg' }],
    },
});

interface ComponentProps {
    color: string;
}

const ArrowIcon: FC<ComponentProps> = ({ color }) => (
    <View style={[styles.arrow, { borderColor: color }]} />
);

export default memo(ArrowIcon);
