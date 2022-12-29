import React, { useState, ReactElement } from 'react';
import { Modal, Text, Pressable, View, ScrollView, StyleSheet } from 'react-native';

import useThemeColors from "../../hooks/useThemeColors";


import { Ionicons } from '@expo/vector-icons';
import Arrow from '../../assets/svgs/arrow.svg';

import EthLogo from '../../assets/svgs/EthLogoSmall.svg';
import UsdtLogo from '../../assets/svgs/UsdtLogoSmall.svg';

import { observer } from 'mobx-react-lite';

import styles from './styles';
import generalComponentStyles from '../../styles/generalComponentStyles';

interface componentProps {
    targetContentComponent: ReactElement
    titleText: string, 
    promptText?: string,
    confirmButtonOnPressAction?: () => void,
}

const OpenBottomModalScreenButton = ({
    targetContentComponent,
    titleText,
    promptText,
    confirmButtonOnPressAction}:
        componentProps) => { 

    const { wrapper, title } = generalComponentStyles();
    const { modalBottomFillColor, plainTextColor } = useThemeColors();
    const [ modalVisible, setModalVisible ] = useState(false);
    
    const btnOpenModal = <Pressable onPress={() => setModalVisible(true)}>
                            {targetContentComponent}
                        </Pressable>
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => console.warn('closed')}
                statusBarTranslucent={true}>
                <View style={[styles.centeredView, styles.modalViewWrapper]}>
                    <View style={[styles.modalView, modalBottomFillColor]}>
                        <View style={styles.titleBlock}>
                            <Text style={[styles.modalTitle, plainTextColor]}>
                                {titleText}
                            </Text>
                            <Pressable style={styles.closeIcon}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text>
                                    <Ionicons name="close" size={24} color={plainTextColor.color} />
                                </Text>
                            </Pressable>
                            <Text style={[title, styles.titlePrompt]}>
                                {promptText}
                            </Text>
                        </View>
                        <ScrollView>
                            <Pressable
                                style={[wrapper, styles.button]}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                    confirmButtonOnPressAction ? confirmButtonOnPressAction() : null;
                                }}>
                                <View style={styles.cryptoLogo}>
                                    <EthLogo/>
                                </View>
                                <Text style={[styles.buttonText, plainTextColor]}>Ethereum</Text>
                                <View style={styles.arrowIcon}>
                                    <Arrow color={plainTextColor.color}/>
                                </View>
                            </Pressable>
                            <Pressable
                                style={[wrapper, styles.button, { marginTop: 8 }]}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                    confirmButtonOnPressAction ? confirmButtonOnPressAction() : null;
                                }}>
                                <View style={styles.cryptoLogo}>
                                    <UsdtLogo/>
                                </View>
                                <Text style={[styles.buttonText, plainTextColor]}>USDT</Text>
                                <View style={styles.arrowIcon}>
                                    <Arrow color={plainTextColor.color}/>
                                </View>
                            </Pressable>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
            {btnOpenModal}
        </View>
    );
}


export default observer(OpenBottomModalScreenButton);