import React from 'react';
import {Text, View} from 'react-native';
import StatusBarPage from '../../components/StatusBarPage';

import {Container, Title, ListLinks} from './styles';
import Menu from '../../components/Menu';
import ListItem from '../../components/ListItem';


export default function Home(){
    return (
        <Container>
            <StatusBarPage
            barStyle="light-content"
            backgroundColor="#132742"
            />

            <Menu />

            <Title>Meus links</Title>

            <ListLinks 
            data={[{id: 1, link:'test.com'}, {id: 2, link:'google.com'}]}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => <ListItem data={item}/>}
            contentContainerStyle={{paddingBottom: 20}}
            showVerticalScrollIndicator={false}
            />
        </Container>
    )
}
