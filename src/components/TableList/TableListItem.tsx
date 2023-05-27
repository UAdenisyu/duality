import { View, Text, Pressable } from "react-native";
import { listItem } from './styles';
import Arrow from '../../assets/svgs/arrow.svg';
import generalComponentStyles from "../../styles/generalComponentStyles";
import useThemeColors from "../../hooks/useThemeColors";
import NumberFormat from "react-number-format";
import { useNavigation } from "@react-navigation/native";
import { memo } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { EarnTabParamList } from "../../types";

type dataProp = { 
    incomePerYear: number;
    targetPrice: number; 
    completionTime: Date, 
}

type ComponentProps = {
    backgroundColor : string,
    data : dataProp,
}

type RootStackNavigationProp = StackNavigationProp<EarnTabParamList>;

const TableListItem = ({ backgroundColor, data } : ComponentProps) => {

    const { markedText } = generalComponentStyles();
    const { markedTextColor, plainTextColor } = useThemeColors();

    const navigation = useNavigation<RootStackNavigationProp>();

    const formattedDate = data.completionTime.getFullYear() + '-' + data.completionTime.getMonth()+1 + '-' + data.completionTime.getDate();
    const formattedIncome = <NumberFormat
                                value={data.incomePerYear}
                                displayType="text"
                                thousandSeparator
                                decimalSeparator=", "
                                renderText={(value) => <Text>{value + ' %'}</Text>}/>

    return (
        <Pressable
            onPress={() => navigation.navigate('EarnInputDetails')}
            style={[listItem.container, {backgroundColor}]}>
            <Text style={[markedText, listItem.income]}>{formattedIncome}</Text>
            <Text style={[markedText, listItem.price, plainTextColor]}>{data.targetPrice}</Text>
            <View style={listItem.date}>
                <Text style={[markedText, plainTextColor]}>{formattedDate}</Text>
                <Arrow color={markedTextColor.color} style={listItem.arrow}/>
            </View>
        </Pressable>
    );
}

export default memo(TableListItem);