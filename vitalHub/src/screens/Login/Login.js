import { Text, View } from "react-native"
import { Container, ContentAccount } from "../../components/Container/Style"
import { Logo, LogoGoogle } from "../../components/Logo/Style"
import { Title } from "../../components/Title/Style"
import { Input } from "../../components/Input/Styled"
import { LinkAccount, LinkMedium } from "../../components/Links/Style"
import { Button, ButtonGoogle } from "../../components/Button/Style"
import { ButtonTitle, ButtonTitleGoogle } from "../../components/ButtonTitle/Style"
import { TextAccount } from "../../components/TextAdd/Style"



export const login = ({navigation}) => {
    return(
        <Container>
            <Logo source={require('../../assets/logo.png')}/>

            <Title>Entrar ou criar conta</Title>

            <Input placeholder="Usuário ou E-mail"/>
            
            <Input placeholder="Senha" 
            secureTextEntry='true'
            />

            <LinkMedium onPress={() => navigation.navigate("Recover")}>Esqueceu sua senha?</LinkMedium>

             <Button onPress={() => navigation.navigate("Profile")}>
                <ButtonTitle>ENTRAR</ButtonTitle>
            </Button>

            <ButtonGoogle onPress={() => navigation.navigate("Profile")}>
                <LogoGoogle source={require('../../assets/google.png')} />
                <ButtonTitleGoogle>ENTRAR COM GOOGLE</ButtonTitleGoogle>
            </ButtonGoogle> 

            <ContentAccount>
                <TextAccount>Não tem conta? </TextAccount>
                <LinkAccount onPress={() => navigation.navigate("Account")} >Crie uma conta agora!</LinkAccount>
            </ContentAccount>    
               
        </Container>
    )
}