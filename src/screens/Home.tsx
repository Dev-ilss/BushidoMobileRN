import React, {useState,useEffect} from 'react';
import {Text,View,ScrollView} from "react-native";
import {BottomNavigation} from 'react-native-paper';
import {Login} from './index';
import {Navigation} from '../types';
import { ListItem,Avatar  } from '@react-native-elements/base';
import firestore from '@react-native-firebase/firestore';
type Props = {
  navigation: Navigation;
};
function Home({navigation} : Props){
    const [list,setList] = useState<any[]>([]);   
    const [json,setJson] = useState(''); 
    
    useEffect(()=>{
        firestore().collection('Items').get().then(querySnapshot=>{
            const items = [] as any;
                querySnapshot.docs.map(item=>{
                    var {nombre,descripcion,imagen} = item.data();
                    items.push({key:item.id,nombre,descripcion,imagen});            
                    setList(items);  
                    console.log(item.data());                            
                });                
            })
    },[]);
    return(        
            <View>
            {
            list.map(item=>{
                return(
                    <ListItem bottomDivider>
                      <Avatar source={{uri:item.imagen}}/>
                      <ListItem.Chevron/>
                      <ListItem.Content>
                            <ListItem.Title>{item.nombre}</ListItem.Title>
                            <ListItem.Subtitle>{item.descripcion}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                )
                
            })
            }   
            {list.map(i=>{
                <Text>{i.nombre}</Text>
            })}
            </View>                
    );
}
export default Home;