import { Pressable, StyleSheet, Text, View } from 'react-native';
import styles from './styles';

import useThemeColors from '../../hooks/useThemeColors';
import generalComponentStyles from '../../styles/generalComponentStyles';
import React from 'react';

import {SvgProps} from 'react-native-svg';

type Props = {
    leftItem: React.ReactElement<SvgProps>, 
    rightItem?: React.ReactElement, 
    titleText: string,
    onPressAction: Function,
}


export default function ShowMoreBtn({leftItem, rightItem, titleText, onPressAction}: Props) {
    const { plainTextColor } = useThemeColors();
    const { wrapper } = generalComponentStyles();

    return (
        <Pressable style={[wrapper, styles.wrapper, rightItem ? null : styles.logOutBackGround]}
            onPress={onPressAction()}>
            <View style={[styles.leftIconWrapper, rightItem ? null : styles.logOutIcon]}>
                {leftItem}
            </View>
            <View style={rightItem ? styles.generalText : styles.logOutText}>
                <Text style={[styles.text, plainTextColor, rightItem ? null : {alignSelf: 'center'}]}>{titleText}</Text>
            </View>
            {rightItem}
        </Pressable>
    );
}

