import { View, Text, StyleSheet, Pressable } from "react-native";
import styles from './styles';
import TermClause from './TermClause';
import { useCounterStore, CounterStoreContext } from '../../mobx/stores/AppStore.store';
import CommonComponentStyles from '../../styles/CommonComponentStyles';

import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import useThemeColors from "../../hooks/useThemeColors";

import { observer } from 'mobx-react-lite';

const TermsOfServiceList = observer(({terms}: {terms: Array<string>}) => {

    const { wrapper } = CommonComponentStyles();
    const { selectedItemColor, plainText } = useThemeColors();

    const [isChecked, setChecked] = useState(false);

    const termList = terms.map((item, i) => <TermClause key={i.toString()} textContent={item} index={i}/>);

    const dynamicColors = StyleSheet.create({
        plainText:{
            color: plainText,
        },
        termsOfServiceListLink:{
            color: selectedItemColor,
        }
    });

    return (
        <View style={wrapper}>
            {termList}
            <View style={styles.section}>
                <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={selectedItemColor}/>
                <Text style={[styles.agreeText, { marginLeft: 8 }, dynamicColors.plainText]}>
                    I have read and I accept Duality's
                    <Pressable>
                        <Text style={[styles.agreeText, dynamicColors.termsOfServiceListLink]}>
                            Terms of Service
                        </Text>
                    </Pressable>
                </Text>

            </View>

        </View>
    );
});
export default TermsOfServiceList;