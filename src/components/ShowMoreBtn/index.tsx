import { Pressable, StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import Arrow from '../../assets/svgs/arrow.svg';

import useThemeColors from '../../hooks/useThemeColors';

export default function ShowMoreBtn({onPressAction, navigation}:{onPressAction?: () => void, navigation: any} ) {

    const { plainText } = useThemeColors();
    

    const dynamicColors = StyleSheet.create({
        plainText:{
            color: plainText,
        }
    });


    return (
        <Pressable style={styles.wrapper} onPress={() => navigation?.navigate('Earn/input')}>
            <Text style={[styles.text, dynamicColors.plainText]}>Show more</Text>
            <Arrow color={plainText} style={styles.arrow}/>
        </Pressable>
    );
}

