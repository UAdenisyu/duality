import { View, Text } from "react-native";
import styles from './styles';
import TermClause from './TermClause';
import { useCounterStore, CounterStoreContext } from '../../mobx/stores/AppStore.store';
import CommonComponentStyles from '../../styles/CommonComponentStyles';

import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import useThemeColors from "../../hooks/useThemeColors";


export default function TermsOfServiceList({terms}: {terms: Array<string>}) {
    const termList = terms.map((item, i) => <TermClause key={i.toString()} textContent={item} index={i}/>);
    const componentStyles = CommonComponentStyles();
    const { selectedItemColor } = useThemeColors();
    const [isChecked, setChecked] = useState(false);

    return (
        <View style={componentStyles.wrapper}>
            {termList}
            <View style={styles.section}>
                <Checkbox
                    style={[styles.checkbox, {borderColor: selectedItemColor}]}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={selectedItemColor}/>
                <Text style={styles.agreeText}>
                    I have read and I accept Duality's Terms of Service
                </Text>
            </View>

        </View>
    );
}