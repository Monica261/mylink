import React from 'react';
import { TouchableOpacity, View, TouchableWithoutFeedback, Share } from 'react-native';

import {ModalContainer, Container, Header, LinkArea, Title, LongUrl,
    ShortLinkArea, ShortLinkUrl} from './styles';
import {Feather} from '@expo/vector-icons';
import Clipboard from 'expo-clipboard'


export default function ModalLink({onClose}){

    function copyLink(){
        Clipboard.setString('https://bit.ly.com.br');
        alert('Link copiado com sucesso');
    }

    async function handleShare(){
        try{
            const result = await Share.share({
                message:`Link: https://bit.ly.com.br`
            });

            if(result.action === Share.sharedAction){
                if(result.activityType){
                    console.log('activityType')
                }else{
                    //compartilhou
                    console.log('compartilhado com sucesso')
                }
            }else if(result.action === Share.dismissedAction){
                console.log('modal fechado')
            }

        }catch(error){
            console.log(error.message)
        }
    }

    return(
        <ModalContainer>
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={{flex:1}}></View>
            </TouchableWithoutFeedback>
            <Container>
                <Header>
                    <TouchableOpacity  onPress={onClose}>
                        <Feather name="x" color="#212743" size={30}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleShare}>
                        <Feather name="share" color="#212743" size={30}/>
                    </TouchableOpacity>
                </Header>

                <LinkArea>
                    <Title>
                        Link encurtado
                    </Title>
                    <LongUrl numberOfLines={1}>
                        https://google.com.br
                    </LongUrl>

                    <ShortLinkArea activeOpacity={1} onPress={copyLink}>
                        <ShortLinkUrl numberOfLines={1}>
                            https://bit.ly.com.br
                        </ShortLinkUrl>

                        <TouchableOpacity onPress={copyLink}>
                            <Feather name="copy" color="#fff" size={25}/>
                        </TouchableOpacity>
                    </ShortLinkArea>
                </LinkArea>
            </Container>
        </ModalContainer>
    )
}