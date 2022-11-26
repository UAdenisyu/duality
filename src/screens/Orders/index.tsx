import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import LocalNavBar from "../../components/LocalNavBar";
import OrderItem from "../../components/OrderItem";
import generalComponentStyles from "../../styles/generalComponentStyles";
import styles from './styles';

const Orders = observer(() => {
    const { wrapper, titleLight } = generalComponentStyles();
    const buttonTitles=['Open orders', 'Order History'];

    const [ localScreen, setLocalScreen ] = useState(buttonTitles[0]);

    return (
        // <LocalNavBar buttonTitles={['Open orders', 'Order History']}/>
        <ScrollView>
            {/* <View style={[wrapper, styles.body]}>
                {buttonTitles.map(buttonTitle => (
                    <Pressable 
                        key={buttonTitle} 
                        style={[styles.btn]}
                        onPress={() => buttonTitle === localScreen ? null : setLocalScreen(localScreen === buttonTitles[0] ? buttonTitles[1] : buttonTitles[0])}>
                        <Text style={[titleLight, styles.btnText, buttonTitle === localScreen ? styles.btnActive : null]}>
                            {buttonTitle}
                        </Text>
                    </Pressable>
                ))}
            </View>
            <View>
                
            </View>
            {
                localScreen === buttonTitles[0] ? 
                    <View>
                        <OrderItem 
                            contentType="list"
                            cryptoNameTitle={'ETH/USDT'}
                            dateTime={'2022-07-08 10:00'}
                            limitBuy={0}
                            
                            sum={'0,00/19,71919'}
                            price={1012}/>
                        <OrderItem 
                            contentType="list"
                            cryptoNameTitle={'ETH/USDT'}
                            dateTime={'2022-07-08 10:00'}
                            limitBuy={0}
                            
                            sum={'0,00/19,71919'}
                            price={1012}/>
                    </View> : 
                    <View>
                        <OrderItem 
                            contentType="history"
                            cryptoNameTitle={'ETH/USDT'}
                            dateTime={'2022-07-08 10:00'}
                            limitBuy={'Canceled'}
                            sum={'0,00/19,71919'}
                            price={1012}/>
                        <OrderItem 
                            contentType="history"
                            cryptoNameTitle={'ETH/USDT'}
                            dateTime={'2022-07-08 10:00'}
                            limitBuy={'Canceled'}
                            sum={'0,00/19,71919'}
                            price={1012}/>
                    </View>
            }
            <View style={{height: 100}}/> */}
        </ScrollView>
    );
});

export default Orders;