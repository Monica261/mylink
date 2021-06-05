import React, {useState, useEffect} from 'react';
import { Modal, ActivityIndicator } from 'react-native';

import StatusBarPage from '../../components/StatusBarPage';

import {Container, Title, ListLinks, ContainerEmpty, WarningText} from './styles';
import Menu from '../../components/Menu';
import ListItem from '../../components/ListItem';
import {useIsFocused} from '@react-navigation/native';
import {getLinksSave, deleteLink} from '../../utils/storeLinks';
import ModalLink from '../../components/ModalLink';

export default function MyLinks(){

    const [links, setLinks] = useState([]);
    const [data, setData] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(true);

    const isFocused = useIsFocused();

    useEffect(()=> {

        async function getLinks(){
            const result = await getLinksSave('MyLink');
            setLinks(result);
            setLoading(false);
        }

        getLinks();
    }, [isFocused])

    function handleItem(item){
        setData(item);
        setModalVisible(true);
    }

    async function handleDelete(id){
        const result = await deleteLink(links, id);
        setLinks(result);
    }

    return (
        <Container>
            <StatusBarPage
            barStyle="light-content"
            backgroundColor="#132742"
            />

            <Menu />

            <Title>Meus links</Title>

            { loading && (
                <ContainerEmpty>
                    <ActivityIndicator color="#fff" size={25}/>
                </ContainerEmpty>
            )}

            { !loading && links.length === 0 && (
                <ContainerEmpty>
                    <WarningText>Você ainda não possui nenhum link :(</WarningText>
                </ContainerEmpty>
            )}

            <ListLinks 
            data={links}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => <ListItem data={item} selectedItem={handleItem} deleteItem={handleDelete}/>}
            contentContainerStyle={{paddingBottom: 20}}
            showVerticalScrollIndicator={false}
            />

            <Modal visible={modalVisible} transparent animationType="slide">
                <ModalLink onClose={() => setModalVisible(false)} data={data} />
            </Modal>
        </Container>
    )
}
