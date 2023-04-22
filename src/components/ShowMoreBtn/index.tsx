import { Pressable, Text, ViewStyle } from 'react-native';
import styles from './styles';
import Arrow from '../../assets/svgs/arrow.svg';

import useThemeColors from '../../hooks/useThemeColors';
import { observer } from 'mobx-react-lite';


interface componentProps {
    wrapperStyle : ViewStyle,
    onPress: () => void,
}

const ShowMoreBtn = ({wrapperStyle, onPress} : componentProps) => {
    const { plainTextColor } = useThemeColors();

    return (
        <Pressable
            testID='show-more'
            onPress={onPress}
            style={[styles.wrapper, wrapperStyle]}>
            <Text style={[styles.text, plainTextColor]}>Show more</Text>
            <Arrow color={plainTextColor.color} style={styles.arrow}/>
        </Pressable>
    );
}

export default observer(ShowMoreBtn);