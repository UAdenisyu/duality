import { ScrollView, Text, View, StyleSheet, UIManager } from "react-native";
import TotaLBalance from "../../components/TotalBalance";
import InputCryptoInfo from "../../components/InputCryptoInfo";
import TableList from "../../components/TableList";
import React from 'react';
import {TestBtn} from '../../components/TestBtn';

export default function Earn() {
    return (
        <ScrollView>
            <TotaLBalance/>
            <InputCryptoInfo/>
            <InputCryptoInfo/>
            <TestBtn/>
        </ScrollView>
    );
}
