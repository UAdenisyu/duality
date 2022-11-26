import { View, Text } from "react-native";
import styles from "./styles";

import { observer } from 'mobx-react-lite';

import useThemeColors from "../../hooks/useThemeColors";
import generalComponentStyles from '../../styles/generalComponentStyles';
import InfoBlock from "./InfoBlock";


type Props = {
    contentType: 'list' | 'history'
    cryptoNameTitle: string,
    dateTime: string,
    limitBuy: number | 'Canceled',
    sum: string,
    price: number,
}

const OrderItem = ({contentType, cryptoNameTitle, dateTime, limitBuy, sum, price}: Props) => {

    const { wrapper, title } = generalComponentStyles();
    const { dividingLineColor, plainTextColor, cancelButton } = useThemeColors();

    return (
        <View style={wrapper}>
            <View style={[styles.titleSection, styles.section, dividingLineColor]}>
                <Text style={[styles.componentTitle,plainTextColor]}>
                    {cryptoNameTitle}
                </Text>
                <Text style={title}>
                    {dateTime}
                </Text>
            </View>
            <View style={[styles.section, styles.infoBlock]}>
                    <InfoBlock titleName='Limit/Buy' value={limitBuy !== 'Canceled' ? limitBuy + '%' : 'Canceled'}/>
                    <InfoBlock titleName='Sum' value={sum}/>
                    <InfoBlock titleName='Price' value={price.toFixed(2).toString()} alignRight={true}/>
            </View>
            {contentType === 'list' ? 
                <View style={[styles.btn, cancelButton]}>
                    <Text style={[styles.btnText, plainTextColor]}>
                        Cancel
                    </Text>
                </View> : null}
        </View>
    );
};

export default observer(OrderItem);
