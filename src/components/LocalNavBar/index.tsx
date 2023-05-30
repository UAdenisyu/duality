import { memo } from 'react';
import { View, Text, Pressable } from 'react-native';

import styles from './styles';
import useGeneralComponentStyles from '../../styles/useGeneralComponentStyles';

interface componentProps {
    buttonTitles: string[];
}

const LocalNavBar = ({ buttonTitles }: componentProps) => {
    const { wrapper, titleLight } = useGeneralComponentStyles();

    return (
        <View style={[wrapper, styles.body]}>
            {buttonTitles.map((buttonTitle) => (
                <Pressable
                    key={buttonTitle}
                    style={[styles.btn]}
                    onPress={() => {}}>
                    <Text
                        style={[titleLight, styles.btnText, styles.btnActive]}>
                        {buttonTitle}
                    </Text>
                </Pressable>
            ))}
        </View>
    );
};

export default memo(LocalNavBar);
