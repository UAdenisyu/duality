import { Pressable, Text } from 'react-native';
import styles from './styles';
import Arrow from '../../assets/svgs/arrow.svg';

export default function ShowMoreBtn({onPressAction}:{onPressAction?: () => void} ) {
    return (
        <Pressable style={styles.wrapper} onPress={onPressAction}>
            <Text style={styles.text}>Show more</Text>
            <Arrow color='#ffffff' style={styles.arrow}/>
        </Pressable>
    );
}

