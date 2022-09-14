import { View, Text } from "react-native";
import styles from "./styles";

import { observer } from 'mobx-react-lite';
import { useCounterStore } from '../../mobx/stores/AppStore.store';

import InfoIcon from '../../assets/svgs/infoIcon.svg';

import useThemeColors from "../../hooks/useThemeColors";
import CommonComponentStyles from '../../styles/CommonComponentStyles';


const SummaryPrice = observer(() => {
    const componentStyles = CommonComponentStyles();
    const { grey } = useThemeColors();

    return (
        <View style={[componentStyles.wrapper, {marginTop: 0}]}>
            <Text style={componentStyles.title}>Summary price</Text>
            <View style={styles.section}>
                <Text style={componentStyles.valueBig}>1,04500</Text>
                <Text style={componentStyles.cryptoName}>ETH</Text>
            </View>
            <View style={styles.section}>
                <Text style={componentStyles.valueSmall}>21 727,23 $</Text>
                <View style={componentStyles.infoIcon}>
                    <InfoIcon color={grey}/>
                </View>
            </View>
        </View>
    );
});

export default SummaryPrice;
