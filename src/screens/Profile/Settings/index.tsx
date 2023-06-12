import { useNavigation } from '@react-navigation/native';
import BellSvg from 'assets/svgs/settingsScreen/Bell.svg';
import EditSvg from 'assets/svgs/settingsScreen/Edit.svg';
import GlobeSvg from 'assets/svgs/settingsScreen/Globe.svg';
import ArrowIcon from 'components/ArrowIcon';
import SettingComponent from 'components/SettingComponent';
import SwithToggler from 'components/SwitchToggler';
import useThemeColors from 'hooks/useThemeColors';
import { observer } from 'mobx-react-lite';
import { FC, useMemo } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import useGeneralComponentStyles from 'styles/useGeneralComponentStyles';
import { SettingsScreenNavigationProp } from 'types/navigationStacks';

const screenHeight = Dimensions.get('window').height;

type settingTogglerId =
    | 'dark-mode'
    | 'face-id'
    | 'push-notifications'
    | 'sms-notifications'
    | 'email-notifications';
interface SettingTogglerButton {
    id: settingTogglerId;
    title: string;
    logoIcon: JSX.Element;
    rightItem: () => JSX.Element;
}

interface SettingNavigateButton {
    id: string;
    title: string;
    logoIcon: JSX.Element;
    rightItem: (color: string) => JSX.Element;
}

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

const settingsButtonsListData: SettingNavigateButton[] = [
    {
        id: 'Language',
        title: 'Language',
        logoIcon: <GlobeSvg />,
        rightItem: (color: string) => <ArrowIcon color={color} />,
    },
    {
        id: 'ChangePassword',
        title: 'Change Password',
        logoIcon: <EditSvg />,
        rightItem: (color: string) => <ArrowIcon color={color} />,
    },
];

const settingsSwitchesListData: SettingTogglerButton[] = [
    {
        id: 'dark-mode',
        title: 'Dark Mode',
        logoIcon: <BellSvg />,
        rightItem() {
            return <SwithToggler targetId={this.id} />;
        },
    },
    {
        id: 'face-id',
        title: 'Face Id',
        logoIcon: <BellSvg />,
        rightItem() {
            return <SwithToggler targetId={this.id} />;
        },
    },
    {
        id: 'push-notifications',
        title: 'Push notifications',
        logoIcon: <BellSvg />,
        rightItem() {
            return <SwithToggler targetId={this.id} />;
        },
    },
    {
        id: 'sms-notifications',
        title: 'SMS Notifications',
        logoIcon: <BellSvg />,
        rightItem() {
            return <SwithToggler targetId={this.id} />;
        },
    },
    {
        id: 'email-notifications',
        title: 'Email Notifications',
        logoIcon: <BellSvg />,
        rightItem() {
            return <SwithToggler targetId={this.id} />;
        },
    },
];

const Settings: FC = () => {
    const { plainTextColor } = useThemeColors();
    const { borderedSection } = useGeneralComponentStyles();
    const navigation = useNavigation<SettingsScreenNavigationProp>();

    const settingsButtonsList = useMemo(
        () =>
            settingsButtonsListData.map((item) => (
                <SettingComponent
                    key={item.id}
                    leftItem={item.logoIcon}
                    rightItem={item.rightItem(plainTextColor.color)}
                    titleText={item.title}
                    onPressAction={() => {
                        if (item.id === 'ChangePassword') {
                            navigation.navigate('ChangePassword');
                        } else if (item.id === 'Language') {
                            navigation.navigate('Language');
                        }
                    }}
                />
            )),
        [plainTextColor.color]
    );

    const settingsSwitchesList = useMemo(
        () =>
            settingsSwitchesListData.map((item) => (
                <SettingComponent
                    key={item.title}
                    leftItem={item.logoIcon}
                    rightItem={item.rightItem()}
                    titleText={item.title}
                />
            )),
        [plainTextColor.color]
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
