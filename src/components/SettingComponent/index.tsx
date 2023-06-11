import useThemeColors from 'hooks/useThemeColors';
import { FC, memo, ReactElement, useMemo } from 'react';
import { GestureResponderEvent, Pressable, Text, View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import useGeneralComponentStyles from 'styles/useGeneralComponentStyles';

import styles from './styles';

type ComponentProps = {
    leftItem: ReactElement<SvgProps>;
    rightItem?: ReactElement;
    titleText: string;
    onPressAction?: (event: GestureResponderEvent) => void;
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

    const buttonTitleWrapperDynamicStyle = useMemo(
        () => (rightItem ? styles.generalText : styles.logOutText),
        []
    );

    return (
        <Pressable
            style={[wrapper, wrapperDynamicStyle, styles.wrapper]}
            onPress={onPressAction}>
            <View style={[styles.leftIconWrapper, leftItemDynamicStyle]}>
                {leftItem}
            </View>
            <View style={buttonTitleWrapperDynamicStyle}>
                <Text style={[styles.text, plainTextColor]}>{titleText}</Text>
            </View>
            {rightItem}
        </Pressable>
    );
};

export default memo(SettingComponent);
