import { Pressable, StyleSheet, Text } from 'react-native';
import styles from './styles';
import Arrow from '../../assets/svgs/arrow.svg';

import useThemeColors from '../../hooks/useThemeColors';
import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import { useDualityStore } from '../../mobx/appStoreContext';
import { StyleProp } from '../../types';


interface componentProps {
    wrapperStyle : StyleProp,
}

const ShowMoreBtn = ({wrapperStyle} : componentProps) => {
    const { plainTextColor } = useThemeColors();
    const navigation = useNavigation();
    
    return (
        // @ts-ignore
        <Pressable style={[styles.wrapper, wrapperStyle]}>
            <Text style={[styles.text, plainTextColor]}>Show more</Text>
            <Arrow color={plainTextColor.color} style={styles.arrow}/>
        </Pressable>
    );
}

export default observer(ShowMoreBtn);