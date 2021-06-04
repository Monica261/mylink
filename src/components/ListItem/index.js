import React from 'react';
import {Text, View} from 'react-native';
import {Feather} from '@expo/vector-icons';

import {ContainerButton, Item} from './styles';

export default function ListItem(){
    return(
        <View>
            <ContainerButton activeOpacity={0.9} onPress={() => alert('test')}>
                <Feather name="link" color="#fff" size={24}/>
                <Item numberOfLines={1}>https://www.nasa.gov/</Item>
            </ContainerButton>
        </View>
    )
}