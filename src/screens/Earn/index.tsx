import { ScrollView, Text, View, StyleSheet, UIManager } from "react-native";
import TotaLBalance from "../../components/TotalBalance";
import InputCryptoInfo from "../../components/InputCryptoInfo";
import TableList from "../../components/TableList";
import React from 'react';

export default function Earn() {
    return (
        <ScrollView>
            <TotaLBalance/>
            <TableList/>
            <TableList/>
            <TableList/>
            <TableList/>
            <TableList/>

        </ScrollView>
    );
}
