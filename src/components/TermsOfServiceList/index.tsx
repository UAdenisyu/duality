import Checkbox from 'expo-checkbox';
import useThemeColors from 'hooks/useThemeColors';
import { observer } from 'mobx-react-lite';
import { FC, memo, useMemo, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import useGeneralComponentStyles from 'styles/useGeneralComponentStyles';

import TermClause from './TermClause';
import styles from './styles';

type ComponentProps = {
    terms: string[];
};

const TermsOfServiceList: FC<ComponentProps> = ({ terms }) => {
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

    const margin = useMemo(() => ({ marginLeft: 8 }), []);

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
                <Text style={[styles.agreeText, plainTextColor, margin]}>
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
