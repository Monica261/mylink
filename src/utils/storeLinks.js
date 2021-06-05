import AsyncStorage from '@react-native-async-storage/async-storage';

//Buscar links salvos
export async function getLinksSave(key){
    const myLinks = await AsyncStorage.getItem(key);

    let linkSaves = JSON.parse(myLinks) || [];

    return linkSaves;
}

//salvar link no storage
export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);

    //caso exista algum link com o mesmo ID ou duplicado, ignorar
    const hasLink = linksStored.some( link => link.id === newLink.id);

    if(hasLink){
        console.log('link ja existe na lista');
        return;//para a execução
    }

    linksStored.push(newLink);
    await AsyncStorage.setItem(key, JSON.stringify(linksStored));
    console.log('link salvo com sucesso');

}

//deletar link especifico
export async function deleteLink(Links, id){

    let myLinks = Links.filter((item) => {
        return (item.id !== id)
    })
    await AsyncStorage.setItem('MyLink', JSON.stringify(myLinks));

    console.log('link deletado do storage');
    return myLinks;
}