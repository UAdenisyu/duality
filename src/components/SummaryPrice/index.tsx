import InfoIcon from 'assets/svgs/infoIcon.svg';
import useThemeColors from 'hooks/useThemeColors';
import { observer } from 'mobx-react-lite';
import { FC, memo, useMemo } from 'react';
import { View, Text } from 'react-native';
import useGeneralComponentStyles from 'styles/useGeneralComponentStyles';

import ActionsBlock from './ActionsBlock';
import DetailsBlock from './DetailsBlock';
import styles from './styles';

type ComponentProps = {
    titleText?: 'Summary price' | 'Estimated cost' | 'Calculated total cost';
};

const SummaryPrice: FC<ComponentProps> = ({ titleText = 'Summary price' }) => {
    const {
        wrapper,
        title,
        infoIcon,
        borderedSection,
        valueBig,
        valueSmall,
        cryptoName,
    } = useGeneralComponentStyles();
    const { titleTextColor } = useThemeColors();

    const bottomBlock = useMemo(
        () =>
            titleText === 'Estimated cost' ? (
                <ActionsBlock />
            ) : titleText === 'Calculated total cost' ? (
                <DetailsBlock />
            ) : null,
        [titleText]
    );

    const wrapperDynamicStyle = useMemo(
        () => titleText !== 'Summary price' && borderedSection,
        [titleText]
    );

    return (
        <View style={[wrapper, styles.wrapper]}>
            <View style={wrapperDynamicStyle}>
                <Text style={title}>{titleText}</Text>
                <View style={styles.section}>
                    <Text style={valueBig}>1,04500</Text>
                    <Text style={cryptoName}>ETH</Text>
                </View>
                <View style={styles.section}>
                    <Text style={valueSmall}>21 727,23 $</Text>
                    <View style={infoIcon}>
                        <InfoIcon color={titleTextColor.color} />
                    </View>
                </View>
            </View>
            {bottomBlock}
        </View>
    );
};

export default memo(observer(SummaryPrice));
