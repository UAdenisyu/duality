import React, { memo } from 'react';
import { GestureResponderEvent, Pressable, Text, View } from 'react-native';
import { SvgProps } from 'react-native-svg';

import styles from './styles';
import useThemeColors from '../../hooks/useThemeColors';
import useGeneralComponentStyles from '../../styles/useGeneralComponentStyles';

type ComponentProps = {
    leftItem: React.ReactElement<SvgProps>;
    rightItem?: React.ReactElement;
    titleText: string;
    onPressAction: (event: GestureResponderEvent) => void;
};

const ShowMoreBtn = ({
    leftItem,
    rightItem,
    titleText,
    onPressAction,
}: ComponentProps) => {
    const { plainTextColor } = useThemeColors();
    const { wrapper } = useGeneralComponentStyles();

    return (
        <Pressable
            style={[
                wrapper,
                styles.wrapper,
                rightItem ? null : styles.logOutBackGround,
            ]}
            onPress={onPressAction}>
            <View
                style={[
                    styles.leftIconWrapper,
                    rightItem ? null : styles.logOutIcon,
                ]}>
                {leftItem}
            </View>
            <View style={rightItem ? styles.generalText : styles.logOutText}>
                <Text
                    style={[
                        styles.text,
                        plainTextColor,
                        rightItem ? null : { alignSelf: 'center' },
                    ]}>
                    {titleText}
                </Text>
            </View>
            {rightItem}
        </Pressable>
    );
};

export default memo(ShowMoreBtn);
