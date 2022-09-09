import { TextInput, View, Text } from 'react-native';
import styles from './styles';
import { Platform } from 'react-native';


export default function SetCryptocurrencyPrice() {
    const {container,
            block,
            blockWithBorder, 
            title, 
            inputArea, 
            warning, 
            text, 
            highlightedText, 
            availableValue,
            dot
        } = styles;
    return (
        <View style={container}>
            <View style={blockWithBorder}>
                <Text style={title}>
                    Following price*
                </Text>
                <TextInput
                    style={inputArea}
                    selectionColor='#ffffff'
                    keyboardType='decimal-pad'
                    onChange={(text) => console.warn('')}
                    />
                <Text style={warning}>
                    {false ? ' ' : 'Please write the correct price*'}
                </Text>
                <Text style={[text, {marginTop: 8}]}>
                    Available
                    &#160;
                    <Text style={availableValue}>
                        {2.21}
                        &#160;
                        ETH
                    </Text>
                </Text>
            </View>
            <Text style={[text, { paddingTop: 16 }]}>
                Price limit
            </Text>
            <View style={block}>
                <Text style={[text, { color: '#767676' }]}>
                    Minimum
                </Text>
                <Text style={highlightedText}>
                    0,01
                </Text>
                <View style={dot}/>
                <Text style={[text, { color: '#767676' }]}>
                    Maximum
                </Text>
                <Text style={highlightedText}>
                    2500
                </Text>
            </View>
        </View>
    );
}