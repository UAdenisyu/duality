import { FC, memo, useMemo } from 'react';
import { View, Text, Pressable } from 'react-native';
import useGeneralComponentStyles from 'styles/useGeneralComponentStyles';

import styles from './styles';

interface ComponentProps {
    buttonTitles: string[];
}

const LocalNavBar: FC<ComponentProps> = ({ buttonTitles }) => {
    const { wrapper, titleLight } = useGeneralComponentStyles();

    const buttons = useMemo(
        () =>
            buttonTitles.map((buttonTitle) => (
                <Pressable
                    key={buttonTitle}
                    style={[styles.btn]}
                    onPress={() => {}}>
                    <Text
                        style={[titleLight, styles.btnText, styles.btnActive]}>
                        {buttonTitle}
                    </Text>
                </Pressable>
            )),
        []
    );

    return <View style={[wrapper, styles.body]}>{buttons}</View>;
};

export default memo(LocalNavBar);
