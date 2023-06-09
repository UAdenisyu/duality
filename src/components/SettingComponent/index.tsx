import useThemeColors from 'hooks/useThemeColors';
import { FC, memo, ReactElement, useMemo } from 'react';
import {
    GestureResponderEvent,
    Pressable,
    Text,
    View,
    ViewStyle,
} from 'react-native';
import { SvgProps } from 'react-native-svg';
import useGeneralComponentStyles from 'styles/useGeneralComponentStyles';

import styles from './styles';

type ComponentProps = {
    leftItem: ReactElement<SvgProps>;
    rightItem?: ReactElement;
    titleText: string;
    onPressAction: (event: GestureResponderEvent) => void;
};

const SettingComponent: FC<ComponentProps> = ({
    leftItem,
    rightItem,
    titleText,
    onPressAction,
}) => {
    const { plainTextColor } = useThemeColors();
    const { wrapper } = useGeneralComponentStyles();

    const wrapperDynamicStyle = useMemo(
        () => !rightItem && styles.logOutBackGround,
        []
    );

    const leftItemDynamicStyle = useMemo(
        () => !rightItem && styles.logOutIcon,
        []
    );

    const rightItemWrapperDynamicStyle = useMemo(
        () => (rightItem ? styles.generalText : styles.logOutText),
        []
    );

    const rightItemTextDynamicStyle = useMemo<ViewStyle>(
        () => ({
            alignSelf: rightItem ? 'center' : 'auto',
        }),
        []
    );

    return (
        <Pressable
            style={[wrapper, styles.wrapper, wrapperDynamicStyle]}
            onPress={onPressAction}>
            <View style={[styles.leftIconWrapper, leftItemDynamicStyle]}>
                {leftItem}
            </View>
            <View style={rightItemWrapperDynamicStyle}>
                <Text
                    style={[
                        styles.text,
                        plainTextColor,
                        rightItemTextDynamicStyle,
                    ]}>
                    {titleText}
                </Text>
            </View>
            {rightItem}
        </Pressable>
    );
};

export default memo(SettingComponent);
