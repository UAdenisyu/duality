import { FC, memo } from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
    verticalLinesWrapper: {
        position: 'absolute',
        overflow: 'hidden',
        zIndex: -1,
        height: '100%',
        width: '100%',
        flexDirection: 'row',
    },
    verticalLine: {
        borderLeftWidth: 1,
        borderLeftColor: 'rgba(217, 217, 217, 0.06)',
        height: '100%',
        width: 0,
        marginHorizontal: '6.25%',
    },
    firstVerticalLine: {
        marginLeft: '11%',
    },
    horizontalLineWrapper: {
        position: 'absolute',
        overflow: 'hidden',
        zIndex: -1,
        height: '100%',
        width: '100%',
        flexDirection: 'column',
    },
    horizontalLine: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(217, 217, 217, 0.06)',
        height: 0,
        width: '100%',
        marginTop: '12.5%',
    },
    firstHorizontalLine: {
        marginTop: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        borderBottomColor: 'rgba(217, 217, 217, 0.27)',
        height: '12.5%',
    },
});

interface ComponentProps {}

const ChartBackground: FC<ComponentProps> = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.verticalLinesWrapper}>
                <View style={[styles.verticalLine, styles.firstVerticalLine]} />
                <View style={styles.verticalLine} />
                <View style={styles.verticalLine} />
                <View style={styles.verticalLine} />
                <View style={styles.verticalLine} />
                <View style={styles.verticalLine} />
                <View style={styles.verticalLine} />
            </View>
            <View style={styles.horizontalLineWrapper}>
                <View
                    style={[styles.horizontalLine, styles.firstHorizontalLine]}
                />
                <View style={styles.horizontalLine} />
                <View style={styles.horizontalLine} />
                <View style={styles.horizontalLine} />
                <View style={styles.horizontalLine} />
                <View style={styles.horizontalLine} />
                <View style={styles.horizontalLine} />
            </View>
        </View>
    );
};

export default memo(ChartBackground);
