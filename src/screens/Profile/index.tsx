import { View, StyleSheet, Dimensions } from "react-native";
import SettingComponent from "../../components/SettingComponent";

import SettingsSvg from "../../assets/svgs/settingsScreen/Settings.svg";
import WarningSvg from "../../assets/svgs/settingsScreen/Warning.svg";
import LogoutSvg from "../../assets/svgs/settingsScreen/Logout.svg";

import useThemeColors from "../../hooks/useThemeColors";

const screenHeight = Dimensions.get('window').height


const styles = StyleSheet.create({
    arrow: {
        marginLeft: 20,
        borderRightWidth: 3,
        borderTopWidth: 3,
        height: 10,
        width: 10,
        borderRadius: 2,
        transform:  [{ rotate: '45deg'}],
    },
    screenWrapper:{
        height: screenHeight-200,
    },
    logOutButtonWrapper:{
        flex: 1,
        justifyContent: 'flex-end',
    }
});


const profileButtonsList = [
    {
        title: 'Settings',
        logoIcon: <SettingsSvg/>,
        rightItem: (color: string) => <View style={[styles.arrow, { borderColor: color }]}/>
    },
    {
        title: 'Terms & Conditions',
        logoIcon: <WarningSvg/>,
        rightItem: (color: string) => <View style={[styles.arrow, { borderColor: color }]}/>
    },
    {
        title: 'Privacy Policy',
        logoIcon: <WarningSvg/>,
        rightItem: (color: string) => <View style={[styles.arrow, { borderColor: color }]}/>
    },
]


export default function Earn() {

    const { extraLight, selectedItemColor } = useThemeColors();

    const mainPageComponentList = profileButtonsList.map(item => (
        <SettingComponent key={item.title} leftItem={item.logoIcon} rightItem={item.rightItem(extraLight)} titleText={item.title} onPressAction={() => console.log('pressed')}/>
    ));

    return (
        <View>
            <View style={styles.screenWrapper}>
                {mainPageComponentList}
                <View style={styles.logOutButtonWrapper}>
                    <SettingComponent leftItem={<LogoutSvg/>} titleText={'Logout'} onPressAction={() => console.log('pressed')}/>
                </View>
            </View>
            <View style={{height: 100}}></View>
        </View>
    );
}




