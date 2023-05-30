import { observer } from 'mobx-react-lite';
import { memo } from 'react';
import { View, Text } from 'react-native';

import InfoBlock from './InfoBlock';
import styles from './styles';
import useThemeColors from '../../hooks/useThemeColors';
import useGeneralComponentStyles from '../../styles/useGeneralComponentStyles';

type ComponentProps = {
    contentType: 'list' | 'history';
    cryptoNameTitle: string;
    dateTime: string;
    limitBuy: number | 'Canceled';
    sum: string;
    price: number;
};

const OrderItem = ({
    contentType,
    cryptoNameTitle,
    dateTime,
    limitBuy,
    sum,
    price,
}: ComponentProps) => {
    const { wrapper, title } = useGeneralComponentStyles();
    const { dividingLineColor, plainTextColor, cancelButton } =
        useThemeColors();

    return (
        <View style={wrapper}>
            <View
                style={[
                    styles.titleSection,
                    styles.section,
                    dividingLineColor,
                ]}>
                <Text style={[styles.componentTitle, plainTextColor]}>
                    {cryptoNameTitle}
                </Text>
                <Text style={title}>{dateTime}</Text>
            </View>
            <View style={[styles.section, styles.infoBlock]}>
                <InfoBlock
                    titleName="Limit/Buy"
                    value={
                        limitBuy !== 'Canceled' ? limitBuy + '%' : 'Canceled'
                    }
                />
                <InfoBlock titleName="Sum" value={sum} />
                <InfoBlock
                    titleName="Price"
                    value={price.toFixed(2).toString()}
                    alignRight
                />
            </View>
            {contentType === 'list' ? (
                <View style={[styles.btn, cancelButton]}>
                    <Text style={[styles.btnText, plainTextColor]}>Cancel</Text>
                </View>
            ) : null}
        </View>
    );
};

export default memo(observer(OrderItem));
