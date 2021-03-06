import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import HeaderPage from '../../components/Header/index';


import { Container, Content, Images, Pokemon, SelectPokemon, LineInputs} from './styles';

const Home = () => {
    const history = useHistory();
    const [pokemon, setPokemon] = useState([
        {
            id: 1,
            nome: 'Pikachu',
            peso: '50',
            Tamanho: '3',
            Tipo: 'eletrico',
            Habilidade: 'choque',
            Hp: '100',
            Defesa: '30',
            Ataque: '50',
            Velocidade: '24',
            imagem: 'https://lh3.googleusercontent.com/proxy/mp1dBFVb6FxhDUYeKiUJMxhhpVjV5Cc4oRQTTwgQwlpXhv4qKqzNF0_gGwoKLvqOQIoMJolQcBSilE84fQYQLKo5WJjEzX7KNntRx-05D3Hk_WLwGXGBUKIYqEZVZovK'
        },
        {
            id: 2,
            nome: 'Pikachu',
            peso: '50',
            Tamanho: '3',
            Tipo: 'eletrico',
            Habilidade: 'choque',
            Hp: '100',
            Defesa: '30',
            Ataque: '50',
            Velocidade: '24',
            imagem: 'https://lh3.googleusercontent.com/proxy/mp1dBFVb6FxhDUYeKiUJMxhhpVjV5Cc4oRQTTwgQwlpXhv4qKqzNF0_gGwoKLvqOQIoMJolQcBSilE84fQYQLKo5WJjEzX7KNntRx-05D3Hk_WLwGXGBUKIYqEZVZovK'
        },
        {
            id: 3,
            nome: 'Pikachu',
            peso: '50',
            Tamanho: '3',
            Tipo: 'eletrico',
            Habilidade: 'choque',
            Hp: '100',
            Defesa: '30',
            Ataque: '50',
            Velocidade: '24',
            imagem: 'https://lh3.googleusercontent.com/proxy/mp1dBFVb6FxhDUYeKiUJMxhhpVjV5Cc4oRQTTwgQwlpXhv4qKqzNF0_gGwoKLvqOQIoMJolQcBSilE84fQYQLKo5WJjEzX7KNntRx-05D3Hk_WLwGXGBUKIYqEZVZovK'
        },
        {
            id: 4,
            nome: 'Pikachu',
            peso: '50',
            Tamanho: '3',
            Tipo: 'eletrico',
            Habilidade: 'choque',
            Hp: '100',
            Defesa: '30',
            Ataque: '50',
            Velocidade: '24',
            imagem: 'https://lh3.googleusercontent.com/proxy/mp1dBFVb6FxhDUYeKiUJMxhhpVjV5Cc4oRQTTwgQwlpXhv4qKqzNF0_gGwoKLvqOQIoMJolQcBSilE84fQYQLKo5WJjEzX7KNntRx-05D3Hk_WLwGXGBUKIYqEZVZovK'
        },
        {
            id: 4,
            nome: 'Pikachu',
            peso: '50',
            Tamanho: '3',
            Tipo: 'eletrico',
            Habilidade: 'choque',
            Hp: '100',
            Defesa: '30',
            Ataque: '50',
            Velocidade: '24',
            imagem: 'https://lh3.googleusercontent.com/proxy/mp1dBFVb6FxhDUYeKiUJMxhhpVjV5Cc4oRQTTwgQwlpXhv4qKqzNF0_gGwoKLvqOQIoMJolQcBSilE84fQYQLKo5WJjEzX7KNntRx-05D3Hk_WLwGXGBUKIYqEZVZovK'
        }
    ])
    return (
        <>          
        <Container>    
            <HeaderPage/>                               
            <Content>
                { pokemon.map((bicho) => {
                    return(
                        <Pokemon key={bicho.id}>
                            <h1>{bicho.nome}</h1>
                            <Images src={bicho.imagem}/>
                            <h2>Peso: {bicho.peso}</h2>
                            <h2>Tamanho: {bicho.Tamanho}</h2>
                            <h2>Tipo: {bicho.Tipo}</h2>
                            <h2>Habilidade: {bicho.Habilidade}</h2>
                            <h2>Hp: {bicho.Hp}</h2>
                            <h2>Defesa: {bicho.Defesa}</h2>
                            <h2>Ataque: {bicho.Ataque}</h2>
                            <h2>Velocidade: {bicho.Velocidade}</h2>
                        </Pokemon>
                    )
                })  }
            </Content>                
        </Container>                
        </>
    )
}

export default Home;
