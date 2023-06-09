import { useNavigation } from '@react-navigation/native';
import Arrow from 'assets/svgs/arrow.svg';
import useThemeColors from 'hooks/useThemeColors';
import { FC, memo } from 'react';
import { View, Text, Pressable } from 'react-native';
import NumberFormat from 'react-number-format';
import useGeneralComponentStyles from 'styles/useGeneralComponentStyles';
import { EarnInputScreenNavigationProp } from 'types/navigationStacks';

import { listItem } from './styles';

type DataProp = {
    incomePerYear: number;
    targetPrice: number;
    completionTime: Date;
};

type ComponentProps = {
    backgroundColor: string;
    data: DataProp;
};

const TableListItem: FC<ComponentProps> = ({ backgroundColor, data }) => {
    const { markedText } = useGeneralComponentStyles();
    const { markedTextColor, plainTextColor } = useThemeColors();

    const navigation = useNavigation<EarnInputScreenNavigationProp>();

    const formattedDate =
        data.completionTime.getFullYear() +
        '-' +
        data.completionTime.getMonth() +
        1 +
        '-' +
        data.completionTime.getDate();
    const formattedIncome = (
        <NumberFormat
            value={data.incomePerYear}
            displayType="text"
            thousandSeparator
            decimalSeparator=", "
            renderText={(value) => <Text>{value + ' %'}</Text>}
        />
    );

    const goToEarnInputDetails = () => navigation.navigate('EarnInputDetails');

    return (
        <Pressable
            onPress={goToEarnInputDetails}
            style={[listItem.container, { backgroundColor }]}>
            <Text style={[markedText, listItem.income]}>{formattedIncome}</Text>
            <Text style={[markedText, listItem.price, plainTextColor]}>
                {data.targetPrice}
            </Text>
            <View style={listItem.date}>
                <Text style={[markedText, plainTextColor]}>
                    {formattedDate}
                </Text>
                <Arrow color={markedTextColor.color} style={listItem.arrow} />
            </View>
        </Pressable>
    );
};

export default memo(TableListItem);
