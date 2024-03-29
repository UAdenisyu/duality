import { useNavigation } from '@react-navigation/native';
import LogoutSvg from 'assets/svgs/settingsScreen/Logout.svg';
import SettingsSvg from 'assets/svgs/settingsScreen/Settings.svg';
import WarningSvg from 'assets/svgs/settingsScreen/Warning.svg';
import SettingComponent from 'components/SettingComponent';
import useThemeColors from 'hooks/useThemeColors';
import { observer } from 'mobx-react-lite';
import { FC, ReactElement, useMemo } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { useAuthStore } from 'stores/appStoreContext';
import { RootStackNavigationProp } from 'types/navigationStacks';

const screenHeight = Dimensions.get('window').height;

interface ButtonData {
    title: string;
    logoIcon: ReactElement<SvgProps>;
    rightItem: (color: string) => ReactElement;
    screenName?: 'Settings';
}

const profileButtonsList: ButtonData[] = [
    {
        title: 'Settings',
        logoIcon: <SettingsSvg />,
        rightItem: (color: string) => (
            <View style={[styles.arrow, { borderColor: color }]} />
        ),
        screenName: 'Settings',
    },
    {
        title: 'Terms & Conditions',
        logoIcon: <WarningSvg />,
        rightItem: (color: string) => (
            <View style={[styles.arrow, { borderColor: color }]} />
        ),
    },
    {
        title: 'Privacy Policy',
        logoIcon: <WarningSvg />,
        rightItem: (color: string) => (
            <View style={[styles.arrow, { borderColor: color }]} />
        ),
    },
];

const Profile: FC = () => {
    const { plainTextColor } = useThemeColors();

    const { setIsLoggedIn } = useAuthStore();

    const navigation = useNavigation<RootStackNavigationProp>();

    const mainPageComponentList = useMemo(
        () =>
            profileButtonsList.map((item) => (
                <SettingComponent
                    key={item.title}
                    leftItem={item.logoIcon}
                    rightItem={item.rightItem(plainTextColor.color)}
                    titleText={item.title}
                    onPressAction={() => {
                        if (item.screenName) {
                            navigation.navigate('SettingsStack', {
                                screen: 'Settings',
                            });
                        } else {
                            console.log('pressed');
                        }
                    }}
                />
            )),
        [plainTextColor.color]
    );

    const logOut = () => {
        setIsLoggedIn(false);
        navigation.reset({
            index: 0,
            routes: [{ name: 'GetStarted' }],
        });
    };

    return (
        <View>
            <View style={styles.screenWrapper}>
                {mainPageComponentList}
                <View style={styles.logOutButtonWrapper}>
                    <SettingComponent
                        leftItem={<LogoutSvg />}
                        titleText="Logout"
                        onPressAction={logOut}
                    />
                </View>
            </View>
            <View style={{ height: 100 }} />
        </View>
    );
};

const styles = StyleSheet.create({
    arrow: {
        marginLeft: 20,
        borderRightWidth: 3,
        borderTopWidth: 3,
        height: 10,
        width: 10,
        borderRadius: 2,
        transform: [{ rotate: '45deg' }],
    },
    screenWrapper: {
        height: screenHeight - 200,
    },
    logOutButtonWrapper: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 42,
    },
});

export default observer(Profile);
