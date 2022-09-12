import { Pressable, Text, View } from 'react-native';
import styles from './styles';
import Arrow from '../../assets/svgs/arrow.svg';

export default function ShowMoreBtn({onPressAction}:{onPressAction?: () => void} ) {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.text}>Show more</Text>
            <Arrow color='#ffffff' style={styles.arrow}/>
        </View>
    );
}

