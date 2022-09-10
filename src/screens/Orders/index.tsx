import TermsOfServiceList from "../../components/TermsOfServiceList";
import TotaLBalance from "../../components/TotalBalance";

const termsOfServiceList: Array<string> = [
    'You can pay with your actives, free to your sport account',
    'You can pay with your actives, free to your sport account',
    'You can pay with your actives, free to your sport account',
    'You can pay with your actives, free to your sport account',
    'You can pay with your actives, free to your sport account',
]


export default function Earn() {
    return (
        <TermsOfServiceList terms={termsOfServiceList}/>
    );
}