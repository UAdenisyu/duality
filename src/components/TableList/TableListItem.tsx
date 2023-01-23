import { View, Text } from "react-native";
import { listItem } from './styles';
import Arrow from '../../assets/svgs/arrow.svg';
import generalComponentStyles from "../../styles/generalComponentStyles";
import useThemeColors from "../../hooks/useThemeColors";
import NumberFormat from "react-number-format";

type dataProp = { 
    incomePerYear: number;
    targetPrice: number; 
    completionTime: Date, 
}

type ComponentProps = {
    backgroundColor : string,
    data : dataProp,
}

export default function TableListItem({ backgroundColor, data } : ComponentProps) {

    const { markedText } = generalComponentStyles();
    const { markedTextColor, plainTextColor } = useThemeColors();

    const formattedDate = data.completionTime.getFullYear() + '-' + data.completionTime.getMonth()+1 + '-' + data.completionTime.getDate();
    const formattedIncome = <NumberFormat
                                value={data.incomePerYear}
                                displayType="text"
                                thousandSeparator
                                decimalSeparator=", "
                                renderText={(value) => <Text>{value + ' %'}</Text>}/>


    return (
        <View style={[listItem.container, {backgroundColor}]}>
            <Text style={[markedText, listItem.income]}>{formattedIncome}</Text>
            <Text style={[markedText, listItem.price, plainTextColor]}>{data.targetPrice}</Text>
            <View style={listItem.date}>
                <Text style={[markedText, plainTextColor]}>{formattedDate}</Text>
                <Arrow color={markedTextColor.color} style={listItem.arrow}/>
            </View>
        </View>
    );
}