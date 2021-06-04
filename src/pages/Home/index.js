import React, {useState} from 'react';
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Modal } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPage';

import Menu from '../../components/Menu';
import ModalLink from '../../components/ModalLink';

import { Feather } from '@expo/vector-icons';

import {
    ContainerLogo, Logo, ContainerContent, Title, SubTitle, ContainerInput, Input, BoxIcon,
    ButtonLink, ButtonLinkText
} from './styles';

import api from '../../services/api';

export default function Home() {

    const [input, setInput] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    async function handleClick(){
        try{
            const response = await api.post('/shorten', 
            {
                long_url: input
            })

            console.log(response.data);//axios devolve a resposta aqui dentro

        }catch{
            alert('ops... algo deu errado');
            Keyboard.dismiss();
            setInput('');
        }

        
        setModalVisible(true);

    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <LinearGradient
                colors={['#1DDBB9', '#132742']}
                style={{ flex: 1, justifyContent: 'center' }}
            >

                <StatusBarPage
                    barStyle="light-content"
                    backgroundColor="#1DDBB9"
                />
                <Menu />

                <KeyboardAvoidingView 
                    behavior={ Platform.OS === 'android' ? 'padding' : 'position'}
                    enabled
                >

                    <ContainerLogo>
                        <Logo source={require('../../assets/Logo.png')} resizeMode="contain" />
                    </ContainerLogo>

                    <ContainerContent>
                        <Title>MyLink</Title>
                        <SubTitle>Cole o link para encurtar</SubTitle>

                        <ContainerInput>
                            <BoxIcon>
                                <Feather name="link" size={22} color="#fff" />
                            </BoxIcon>
                            <Input
                                placeholder="Cole seu link aqui..."
                                placeholderTextColor="white"
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="url"
                                value={input}
                                onChangeText={ (text) => setInput(text)}
                            />
                        </ContainerInput>

                        <ButtonLink onPress={ handleClick }>
                            <ButtonLinkText>
                                Gerar link
                            </ButtonLinkText>
                        </ButtonLink>

                    </ContainerContent>

                </KeyboardAvoidingView>

                <Modal visible={modalVisible} transparent animationType="slide">
                    <ModalLink onClose={() => setModalVisible(false)}/>
                </Modal>

            </LinearGradient>

        </TouchableWithoutFeedback>
    )
}
