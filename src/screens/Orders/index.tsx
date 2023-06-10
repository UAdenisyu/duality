import OrderItem from 'components/OrderItem';
import { observer } from 'mobx-react-lite';
import { FC, useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import useGeneralComponentStyles from 'styles/useGeneralComponentStyles';

import styles from './styles';

const Orders: FC = () => {
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

    const subScreen = useMemo(
        () =>
            localScreen === buttonTitles[0] ? (
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
            ),
        [localScreen]
    );

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
            <View style={[wrapper, styles.body]}>{buttons}</View>
            {subScreen}
            <View />
        </ScrollView>
    );
};

export default observer(Orders);
