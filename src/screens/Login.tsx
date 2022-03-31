import React,{useState} from 'react';
import {TouchableOpacity,Text,StyleSheet,View} from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import { theme } from '../core/theme';
import Button from '../components/Button';
import {Navigation} from '../types';
type Props = {
  navigation: Navigation;
};
function Login( {navigation} : Props){
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const onClickLogin = ()=>{
      navigation.navigate('Home');
  };
    return(
        <Background>
            <Logo/>
             <Header>Ingrese sus credenciales</Header>
            <TextInput
                label = "Correo"
                value = {email.value}
                onChangeText={text => setEmail({value:text,error : ''})}
                error = {!!email.error}
                errorText = {email.error}
                autoCapitalize= 'none'
                autoComplete='email'
                textContentType='emailAddress'
                keyboardType='email-address'
            />      
            <TextInput
                label="Contraseña"
                returnKeyType="done"
                value={password.value}
                onChangeText={text => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry 
            />
            
             <Button mode='contained' onPress={onClickLogin} >
                Iniciar Sesión
            </Button> 
        </Background>
    );
}
const styles = StyleSheet.create({
    forgotPassword: {
      width: '100%',
      alignItems: 'flex-end',
      marginBottom: 24,
    },
    row: {
      flexDirection: 'row',
      marginTop: 4,
    },
    label: {
      color: theme.colors.secondary,
    },
    link: {
      fontWeight: 'bold',
      color: theme.colors.primary,
    },
  });
  
export default Login;