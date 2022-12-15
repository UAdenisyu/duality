import { Pressable, Text } from 'react-native';
import styles from './styles';
import Arrow from '../../assets/svgs/arrow.svg';

import useThemeColors from '../../hooks/useThemeColors';
import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import { useDualityStore } from '../../mobx/appStoreContext';

const ShowMoreBtn = () => {
    const { plainTextColor } = useThemeColors();
    const navigation = useNavigation();

    const { totalBalance, setTotalBalance } = useDualityStore();
    
    return (
        // @ts-ignore
        <Pressable style={styles.wrapper} onPress={() => setTotalBalance(totalBalance + 1)}>
            <Text style={[styles.text, plainTextColor]}>Show more</Text>
            <Arrow color={plainTextColor.color} style={styles.arrow}/>
        </Pressable>
    );
}

export default observer(ShowMoreBtn);