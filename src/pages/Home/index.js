import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPage';

import Menu from '../../components/Menu';

import { Feather} from '@expo/vector-icons';

import {ContainerLogo, Logo, ContainerContent, Title, SubTitle, ContainerInput, Input,  BoxIcon,
    ButtonLink, ButtonLinkText} from './styles';

export default function Home(){
    return (
        <LinearGradient
        colors={['#1DDBB9', '#132742']}
        style={{flex:1, justifyContent:'center'}}
        >
        
        <StatusBarPage
        barStyle="light-content"
        backgroundColor="#1DDBB9"
        />
        <Menu/>
        <ContainerLogo>
            <Logo source={require('../../assets/Logo.png')} resizeMode="contain"/>
        </ContainerLogo>

        <ContainerContent>
            <Title>MyLink</Title>
            <SubTitle>Cole o link para encurtar</SubTitle>
        </ContainerContent>

        <ContainerInput>
            <BoxIcon>
                <Feather name="link" size={22} color="#fff" />
            </BoxIcon>
            <Input
            placeholder="Cole seu link aqui..."
            placeholderTextColor="white"
            />
        </ContainerInput>

        <ButtonLink>
            <ButtonLinkText>
                Gerar link
            </ButtonLinkText>
        </ButtonLink>
        </LinearGradient>
    )
}