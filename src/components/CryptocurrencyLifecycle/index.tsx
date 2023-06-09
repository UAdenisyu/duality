import useThemeColors from 'hooks/useThemeColors';
import { FC, memo, useMemo } from 'react';
import { View, Text } from 'react-native';
import useGeneralComponentStyles from 'styles/useGeneralComponentStyles';

import RowItem from './RowItem';
import styles from './styles';

interface ComponentProps {
    showDetails?: boolean;
    titleLeft: string;
    titleRight?: string | number | null;
}

const CryptocurrencyLifecycle: FC<ComponentProps> = ({
    titleLeft,
    titleRight = null,
    showDetails = true,
}) => {
    const { markedItemBorderColor } = useThemeColors();
    const { wrapper, borderedSection, title, titleLight } =
        useGeneralComponentStyles();

    const showDetailsClasslist = useMemo(
        () =>
            showDetails
                ? [borderedSection, styles.tableWrapper]
                : styles.tableWrapper,
        [showDetails]
    );

    return (
        <View style={wrapper}>
            <View style={styles.section}>
                <Text style={title}>{titleLeft}</Text>
                {titleRight && <Text style={titleLight}>{titleRight}</Text>}
            </View>
            <View style={showDetailsClasslist}>
                <RowItem titleName="Following date" value="2022-07-05" />
                <View
                    style={[styles.spaceFillingLine, markedItemBorderColor]}
                />
                <RowItem titleName="Settlement date" value="2022-07-08 10:00" />
                <View
                    style={[styles.spaceFillingLine, markedItemBorderColor]}
                />
                <RowItem titleName="Distribution" value="2022-07-08 16:00" />
            </View>
            {showDetails && (
                <View style={styles.bottomSection}>
                    <RowItem
                        titleName="Spot price ETH"
                        value="1104,15"
                        marker={false}
                    />
                    <RowItem
                        titleName="Target price"
                        value="1050"
                        marker={false}
                    />
                    <RowItem
                        titleName="% Year"
                        value="112,32 %"
                        marker={false}
                        titleYear
                    />
                </View>
            )}
        </View>
    );
};

export default memo(CryptocurrencyLifecycle);
