import Arrow from 'assets/svgs/arrow.svg';
import useThemeColors from 'hooks/useThemeColors';
import { observer } from 'mobx-react-lite';
import { FC, memo } from 'react';
import { Pressable, Text, ViewStyle } from 'react-native';

import styles from './styles';

interface ComponentProps {
    wrapperStyle: ViewStyle;
    onPress: () => void;
}

const ShowMoreBtn: FC<ComponentProps> = ({ wrapperStyle, onPress }) => {
    const { plainTextColor } = useThemeColors();

    return (
        <Pressable onPress={onPress} style={[styles.wrapper, wrapperStyle]}>
            <Text style={[styles.text, plainTextColor]}>Show more</Text>
            <Arrow color={plainTextColor.color} style={styles.arrow} />
        </Pressable>
    );
};

export default memo(observer(ShowMoreBtn));
