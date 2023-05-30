import Checkbox from 'expo-checkbox';
import { observer } from 'mobx-react-lite';
import { memo, useMemo, useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import TermClause from './TermClause';
import styles from './styles';
import useThemeColors from '../../hooks/useThemeColors';
import useGeneralComponentStyles from '../../styles/useGeneralComponentStyles';

type ComponentProps = {
    terms: string[];
};

const TermsOfServiceList = ({ terms }: ComponentProps) => {
    const { wrapper } = useGeneralComponentStyles();
    const { markedTextColor, plainTextColor } = useThemeColors();

    const [isChecked, setChecked] = useState(false);
    const termList = useMemo(
        () =>
            terms.map((item, i) => (
                <TermClause key={i.toString()} textContent={item} index={i} />
            )),
        [terms]
    );

    return (
        <View style={wrapper}>
            {termList}
            <View style={styles.section}>
                <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={markedTextColor.color}
                />
                <Text
                    style={[
                        styles.agreeText,
                        { marginLeft: 8 },
                        plainTextColor,
                    ]}>
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

export default memo(observer(TermsOfServiceList));
