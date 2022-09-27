import { Pressable, StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import Arrow from '../../assets/svgs/arrow.svg';

import useThemeColors from '../../hooks/useThemeColors';
import { useNavigation } from '@react-navigation/native';



interface componentProps {
    onPressAction?: () => void,
}

export default function ShowMoreBtn({onPressAction}: componentProps) {
    const { plainTextColor } = useThemeColors();
    const navigation = useNavigation();
    
    return (
        // @ts-ignore
        <Pressable style={styles.wrapper} onPress={() => navigation.navigate('Earn/input')}>
            <Text style={[styles.text, plainTextColor]}>Show more</Text>
            <Arrow color={plainTextColor.color} style={styles.arrow}/>
        </Pressable>
    );
}

