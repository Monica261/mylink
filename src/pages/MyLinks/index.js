import React from 'react';
import {Text, View} from 'react-native';
import StatusBarPage from '../../components/StatusBarPage';

export default function Home(){
    return (
        <View>
            <StatusBarPage
            barStyle="light-content"
            backgroundColor="#132742"
            />
            <Text>Tela links</Text>
        </View>
    )
}