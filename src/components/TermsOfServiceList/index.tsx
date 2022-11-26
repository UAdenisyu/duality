import { View, Text, Pressable } from "react-native";
import styles from './styles';
import TermClause from './TermClause';
import generalComponentStyles from '../../styles/generalComponentStyles';

import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import useThemeColors from "../../hooks/useThemeColors";

import { observer } from 'mobx-react-lite';

type Props = {
    terms: Array<string>
}

const TermsOfServiceList = ({terms}: Props) => {

    const { wrapper } = generalComponentStyles();
    const { markedTextColor, plainTextColor } = useThemeColors();

    const [isChecked, setChecked] = useState(false);

    //TODO: add useMemo
    const termList = terms.map((item, i) => <TermClause key={i.toString()} textContent={item} index={i}/>);

    return (
        <View style={wrapper}>
            {termList}
            <View style={styles.section}>
                <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={markedTextColor.color}/>
                <Text style={[styles.agreeText, { marginLeft: 8 }, plainTextColor]}>
                    I have read and I accept Duality's
                    <Pressable>
                        <Text style={[styles.agreeText, markedTextColor]}>
                            Terms of Service
                        </Text>
                    </Pressable>
                </Text>

            </View>

        </View>
    );
};

export default observer(TermsOfServiceList);