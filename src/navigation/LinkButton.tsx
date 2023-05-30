import { useLinkTo } from '@react-navigation/native';
import React from 'react';
import { Button } from 'react-native';

export default ({ to }: { to: string }) => {
    const linkTo = useLinkTo();
    return <Button title="Go to Input" onPress={() => linkTo(to)} />;
};
