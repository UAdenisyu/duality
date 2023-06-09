import CryptocurrencyLifecycle from 'components/CryptocurrencyLifecycle';
import IncomeFromInvestments from 'components/IncomeFromInvestments';
import SetCryptocurrencyPrice from 'components/SetCryptocurrencyPrice';
import TermsOfServiceList from 'components/TermsOfServiceList';
import { FC } from 'react';
import { ScrollView } from 'react-native';

const terms = Array(5).fill(
    'You can pay with your actives, free to your sport account'
);

const EarnInputDetails: FC = () => {
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
            <SetCryptocurrencyPrice />
            <CryptocurrencyLifecycle showDetails titleLeft="Total" />
            <IncomeFromInvestments />
            <TermsOfServiceList terms={terms} />
        </ScrollView>
    );
};

export default EarnInputDetails;
