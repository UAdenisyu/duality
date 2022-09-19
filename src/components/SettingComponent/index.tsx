import { Pressable, StyleSheet, Text, View } from 'react-native';
import styles from './styles';

import useThemeColors from '../../hooks/useThemeColors';
import CommonComponentStyles from '../../styles/CommonComponentStyles';
import React from 'react';

import {SvgProps} from 'react-native-svg';


export default function ShowMoreBtn({leftItem, rightItem, titleText, onPressAction}: {leftItem: React.ReactElement<SvgProps>, rightItem?: React.ReactElement, titleText: string, onPressAction: Function}) {
    const { plainText, extraLight, selectedItemColor } = useThemeColors();
    const { wrapper } = CommonComponentStyles();

    const dynamicColors = StyleSheet.create({
        plainText:{
            color: plainText,
        },
    });

    return (
        <Pressable style={[wrapper, styles.wrapper, rightItem ? null : styles.logOutBackGround]}
            onPress={onPressAction()}>
            <View style={[styles.leftIconWrapper, rightItem ? null : styles.logOutIcon]}>
                {leftItem}
            </View>
            <View style={rightItem ? styles.generalText : styles.logOutText}>
                <Text style={[styles.text, dynamicColors.plainText, rightItem ? null : {alignSelf: 'center'}]}>{titleText}</Text>
            </View>
            {rightItem}
        </Pressable>
    );
}

