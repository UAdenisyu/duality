import { observer } from 'mobx-react-lite';
import { FC, memo } from 'react';
import { View, Text, Pressable } from 'react-native';

import styles from './styles';
import useGeneralComponentStyles from '../../../styles/useGeneralComponentStyles';

const BuySellButtons: FC = () => {
    const { wrapper, valueBig, titleLight } = useGeneralComponentStyles();

    return (
        <View style={[wrapper, styles.section]}>
            <Pressable style={[styles.btn, styles.btnBuy]}>
                <Text style={[titleLight, styles.btnTitle]}>BUY</Text>
                <Text style={[valueBig, styles.btnValue]}>1.20662</Text>
            </Pressable>
            <Pressable style={[styles.btn, styles.btnSell]}>
                <Text style={[titleLight, styles.btnTitle]}>SELL</Text>
                <Text style={[valueBig, styles.btnValue]}>1.20662</Text>
            </Pressable>
        </View>
    );
};

export default memo(observer(BuySellButtons));
