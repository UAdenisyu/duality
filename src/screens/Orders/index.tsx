import { ScrollView, View } from "react-native";
import LocalNavBar from "../../components/LocalNavBar";
import OrderItem from "../../components/OrderItem";


export default function Earn() {
    return (
        <ScrollView>
            <LocalNavBar buttonTitles={['Open orders', 'Order History']}/>
            <OrderItem 
                contentType="history"
                cryptoNameTitle={'ETH/USDT'}
                dateTime={'2022-07-08 10:00'}
                limitBuy={'Canceled'}
                sum={'0,00/19,71919'}
                price={1012}/>
            <View style={{height: 100}}/>
        </ScrollView>
    );
}