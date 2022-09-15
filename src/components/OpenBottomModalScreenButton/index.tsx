import React, { JSXElementConstructor, useState, ReactElement } from 'react';
import { Modal, Text, Pressable, View, ScrollView } from 'react-native';

import useThemeColors from "../../hooks/useThemeColors";


import { Ionicons } from '@expo/vector-icons';
import Arrow from '../../assets/svgs/arrow.svg';

import EthLogo from '../../assets/svgs/EthLogoSmall.svg';
import UsdtLogo from '../../assets/svgs/UsdtLogoSmall.svg';

import { observer } from 'mobx-react-lite';

import styles from './styles';
import CommonComponentStyles from '../../styles/CommonComponentStyles';

//targetContentComponent: React.ComponentType<TargetProps>

const OpenBottomModalScreenButton = observer(({
    targetContentComponent,
    titleText,
    promptText,
    confirmButtonOnPress} :
        {   targetContentComponent: ReactElement
            titleText: string, 
            promptText?: string,
            confirmButtonOnPress?: () => void }) => {   

    const { commonText, extraDark, selectedItemColor } = useThemeColors(); 
    const { wrapper, title } = CommonComponentStyles();

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
                    <View style={[styles.modalView, {backgroundColor: extraDark}]}>
                        <View style={styles.titleBlock}>
                            <Text style={[styles.modalTextContent, {color: commonText, textAlign: 'center'}]}>
                                {titleText}
                            </Text>
                            <Pressable style={styles.closeIcon}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text>
                                    <Ionicons name="close" size={24} color={commonText} />
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
                                    if (confirmButtonOnPress){
                                        confirmButtonOnPress();
                                    }
                                }}>
                                <View style={styles.cryptoLogo}>
                                    <EthLogo/>
                                </View>
                                <Text style={[styles.buttonText, {color: commonText}]}>Ethereum</Text>
                                <View style={styles.arrowIcon}>
                                    <Arrow color={selectedItemColor}/>
                                </View>
                            </Pressable>
                            <Pressable
                                style={[wrapper, styles.button, { marginTop: 8 }]}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                    if (confirmButtonOnPress){
                                        confirmButtonOnPress();
                                    }
                                }}>
                                <View style={styles.cryptoLogo}>
                                    <UsdtLogo/>
                                </View>
                                <Text style={[styles.buttonText, {color: commonText}]}>USDT</Text>
                                <View style={styles.arrowIcon}>
                                    <Arrow color={selectedItemColor}/>
                                </View>
                            </Pressable>
                            <Pressable
                                style={[wrapper, styles.button, { marginTop: 8 }]}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                    if (confirmButtonOnPress){
                                        confirmButtonOnPress();
                                    }
                                }}>
                                <View style={styles.cryptoLogo}>
                                    <UsdtLogo/>
                                </View>
                                <Text style={[styles.buttonText, {color: commonText}]}>USDT</Text>
                                <View style={styles.arrowIcon}>
                                    <Arrow color={selectedItemColor}/>
                                </View>
                            </Pressable>
                            <Pressable
                                style={[wrapper, styles.button, { marginTop: 8 }]}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                    if (confirmButtonOnPress){
                                        confirmButtonOnPress();
                                    }
                                }}>
                                <View style={styles.cryptoLogo}>
                                    <UsdtLogo/>
                                </View>
                                <Text style={[styles.buttonText, {color: commonText}]}>USDT</Text>
                                <View style={styles.arrowIcon}>
                                    <Arrow color={selectedItemColor}/>
                                </View>
                            </Pressable>
                            <Pressable
                                style={[wrapper, styles.button, { marginTop: 8 }]}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                    if (confirmButtonOnPress){
                                        confirmButtonOnPress();
                                    }
                                }}>
                                <View style={styles.cryptoLogo}>
                                    <UsdtLogo/>
                                </View>
                                <Text style={[styles.buttonText, {color: commonText}]}>USDT</Text>
                                <View style={styles.arrowIcon}>
                                    <Arrow color={selectedItemColor}/>
                                </View>
                            </Pressable>
                            <Pressable
                                style={[wrapper, styles.button, { marginTop: 8 }]}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                    if (confirmButtonOnPress){
                                        confirmButtonOnPress();
                                    }
                                }}>
                                <View style={styles.cryptoLogo}>
                                    <UsdtLogo/>
                                </View>
                                <Text style={[styles.buttonText, {color: commonText}]}>USDT</Text>
                                <View style={styles.arrowIcon}>
                                    <Arrow color={selectedItemColor}/>
                                </View>
                            </Pressable>
                            <Pressable
                                style={[wrapper, styles.button, { marginTop: 8 }]}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                    if (confirmButtonOnPress){
                                        confirmButtonOnPress();
                                    }
                                }}>
                                <View style={styles.cryptoLogo}>
                                    <UsdtLogo/>
                                </View>
                                <Text style={[styles.buttonText, {color: commonText}]}>USDT</Text>
                                <View style={styles.arrowIcon}>
                                    <Arrow color={selectedItemColor}/>
                                </View>
                            </Pressable>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
            {btnOpenModal}
        </View>
    );
});


export default OpenBottomModalScreenButton;