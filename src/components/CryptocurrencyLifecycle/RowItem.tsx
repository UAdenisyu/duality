import InfoIcon from 'assets/svgs/infoIcon.svg';
import useThemeColors from 'hooks/useThemeColors';
import { FC, memo, useMemo } from 'react';
import { Text, View } from 'react-native';
import useGeneralComponentStyles from 'styles/useGeneralComponentStyles';

import styles from './styles';

interface ComponentProps {
    titleName: string;
    value: string;
    marker?: boolean;
    titleYear?: boolean;
}

const RowItem: FC<ComponentProps> = ({
    titleName,
    value,
    marker = true,
    titleYear = false,
}) => {
    const { markedItemBorderColor, plainTextColor } = useThemeColors();
    const { markedText, titleSmall } = useGeneralComponentStyles();

    const textColor = useMemo(() => {
        return titleYear ? null : plainTextColor;
    }, [titleYear]);

    const titlesBottom = useMemo(() => {
        return marker ? null : styles.titlesBottom;
    }, [marker]);

    return (
        <View style={styles.sectionNested}>
            {marker && <View style={[markedItemBorderColor, styles.marker]} />}
            <View style={[styles.titles, titlesBottom]}>
                <Text style={[titleSmall, plainTextColor]}>{titleName}</Text>
                {titleYear && (
                    <InfoIcon
                        color={plainTextColor.color}
                        style={styles.infoIcon}
                    />
                )}
            </View>
            <View style={styles.values}>
                <Text style={[markedText, textColor]}>{value}</Text>
            </View>
        </View>
    );
};

export default memo(RowItem);
