// import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import { useMemo } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import BellSvg from '../../assets/svgs/settingsScreen/Bell.svg';
import EditSvg from '../../assets/svgs/settingsScreen/Edit.svg';
import GlobeSvg from '../../assets/svgs/settingsScreen/Globe.svg';
import ArrowIcon from '../../components/ArrowIcon';
import SettingComponent from '../../components/SettingComponent';
import SwithToggler from '../../components/SwitchToggler';
import useThemeColors from '../../hooks/useThemeColors';
import useGeneralComponentStyles from '../../styles/useGeneralComponentStyles';

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    screenWrapper: {
        height: screenHeight - 200,
    },
    lineMargins: {
        marginHorizontal: 24,
        marginTop: 8,
        marginBottom: 16,
    },
});

const settingsButtonsListData = [
    {
        title: 'Language',
        logoIcon: <GlobeSvg />,
        rightItem: (color: string) => <ArrowIcon color={color} />,
    },
    {
        title: 'Change Password',
        logoIcon: <EditSvg />,
        rightItem: (color: string) => <ArrowIcon color={color} />,
    },
];

const settingsSwitchesListData = [
    {
        title: 'Dark Mode',
        logoIcon: <BellSvg />,
        rightItem: () => <SwithToggler />,
    },
    {
        title: 'Face Id',
        logoIcon: <BellSvg />,
        rightItem: () => <SwithToggler />,
    },
    {
        title: 'Push notifications',
        logoIcon: <BellSvg />,
        rightItem: () => <SwithToggler />,
    },
    {
        title: 'SMS Notifications',
        logoIcon: <BellSvg />,
        rightItem: () => <SwithToggler />,
    },
    {
        title: 'Email Notifications',
        logoIcon: <BellSvg />,
        rightItem: () => <SwithToggler />,
    },
];

const Settings = () => {
    const { plainTextColor } = useThemeColors();
    const { borderedSection } = useGeneralComponentStyles();

    // const navigation = useNavigation();

    const settingsButtonsList = useMemo(
        () =>
            settingsButtonsListData.map((item) => (
                <SettingComponent
                    key={item.title}
                    leftItem={item.logoIcon}
                    rightItem={item.rightItem(plainTextColor.color)}
                    titleText={item.title}
                    onPressAction={() => console.log('pressed')}
                />
            )),
        []
    );

    const settingsSwitchesList = useMemo(
        () =>
            settingsSwitchesListData.map((item) => (
                <SettingComponent
                    key={item.title}
                    leftItem={item.logoIcon}
                    rightItem={item.rightItem()}
                    titleText={item.title}
                    onPressAction={() => console.log('pressed')}
                />
            )),
        []
    );

    return (
        <View style={styles.screenWrapper}>
            {settingsButtonsList}
            <View style={[borderedSection, styles.lineMargins]} />
            {settingsSwitchesList}
        </View>
    );
};

export default observer(Settings);
