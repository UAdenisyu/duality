import { observer } from 'mobx-react-lite';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

import styles from './styles';
import OrderItem from '../../components/OrderItem';
import useGeneralComponentStyles from '../../styles/useGeneralComponentStyles';

const Orders = observer(() => {
    const { wrapper, titleLight } = useGeneralComponentStyles();
    const buttonTitles = ['Open orders', 'Order History'];

    const [localScreen, setLocalScreen] = useState(buttonTitles[0]);

    const buttons = useMemo(
        () =>
            buttonTitles.map((buttonTitle) => (
                <Pressable
                    key={buttonTitle}
                    style={[
                        styles.btn,
                        buttonTitle === localScreen ? styles.btnActive : null,
                    ]}
                    onPress={() =>
                        buttonTitle === localScreen
                            ? null
                            : setLocalScreen(
                                  localScreen === buttonTitles[0]
                                      ? buttonTitles[1]
                                      : buttonTitles[0]
                              )
                    }>
                    <Text style={[titleLight, styles.btnText]}>
                        {buttonTitle}
                    </Text>
                </Pressable>
            )),
        [localScreen]
    );

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
            <View style={[wrapper, styles.body]}>{buttons}</View>
            <View />
            {localScreen === buttonTitles[0] ? (
                <View>
                    <OrderItem
                        contentType="list"
                        cryptoNameTitle="ETH/USDT"
                        dateTime="2022-07-08 10:00"
                        limitBuy={0}
                        sum="0,00/19,71919"
                        price={1012}
                    />
                    <OrderItem
                        contentType="list"
                        cryptoNameTitle="ETH/USDT"
                        dateTime="2022-07-08 10:00"
                        limitBuy={0}
                        sum="0,00/19,71919"
                        price={1012}
                    />
                </View>
            ) : (
                <View>
                    <OrderItem
                        contentType="history"
                        cryptoNameTitle="ETH/USDT"
                        dateTime="2022-07-08 10:00"
                        limitBuy="Canceled"
                        sum="0,00/19,71919"
                        price={1012}
                    />
                    <OrderItem
                        contentType="history"
                        cryptoNameTitle="ETH/USDT"
                        dateTime="2022-07-08 10:00"
                        limitBuy="Canceled"
                        sum="0,00/19,71919"
                        price={1012}
                    />
                </View>
            )}
        </ScrollView>
    );
});

export default Orders;
