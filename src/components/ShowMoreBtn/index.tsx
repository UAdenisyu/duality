import { Pressable, StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import Arrow from '../../assets/svgs/arrow.svg';

import useThemeColors from '../../hooks/useThemeColors';

export default function ShowMoreBtn({onPressAction}:{onPressAction?: () => void} ) {

    const { plainText } = useThemeColors();
    

    const dynamicColors = StyleSheet.create({
        plainText:{
            color: plainText,
        }
    });


    return (
        <View style={styles.wrapper}>
            <Text style={[styles.text, dynamicColors.plainText]}>Show more</Text>
            <Arrow color={plainText} style={styles.arrow}/>
        </View>
    );
}

