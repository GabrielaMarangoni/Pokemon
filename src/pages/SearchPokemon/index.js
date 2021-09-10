import { useState } from 'react';
import HeaderPage from '../../components/Header/index';
import axios from "axios";

import { Container, Container2, BoxText, BoxTextType, Images, Pokemon, Pokemons, SelectPokemon, LineInputs} from './styles';

const Home = () => {
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
      
    const handleSubmit = (e) => {
      e.preventDefault();
      getPokemon();
    };
    const getPokemon = async () => {
      const toArray = [];
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const response = await axios.get(url);
        
      } catch (error) {
        console.log(error);
      }
    };

    return (
        <>          
            <HeaderPage/> 
            <LineInputs>
                <form onSubmit={handleSubmit}>
                    <SelectPokemon placeholder="Escreva o nome do pokemon"/>                
                </form>
            </LineInputs>         
                
            {/* <Container>
            { pokemon.map((bicho) => {
                    return(
                        <Pokemons key={bicho.id}>
                            <h1>{bicho.nome}</h1>
                            <Images src={bicho.imagem}/>
                            <BoxText>Peso: {bicho.peso}</BoxText>
                            <BoxText>Tamanho: {bicho.Tamanho}</BoxText>
                            <BoxText>Hp: {bicho.Hp}</BoxText>
                            <BoxText>Defesa: {bicho.Defesa}</BoxText>
                            <BoxText>Ataque: {bicho.Ataque}</BoxText>
                            <BoxText>Velocidade: {bicho.Velocidade}</BoxText>
                            <BoxText>Habilidade: {bicho.Habilidade}</BoxText>
                            <BoxTextType>Tipo: {bicho.Tipo}</BoxTextType>
                        </Pokemons>
                    )
                })  }
            </Container> */}

            <Container2>
                <Pokemon key= '1'>
                    <h1>Pikachu</h1>
                    <Images src='https://lh3.googleusercontent.com/proxy/mp1dBFVb6FxhDUYeKiUJMxhhpVjV5Cc4oRQTTwgQwlpXhv4qKqzNF0_gGwoKLvqOQIoMJolQcBSilE84fQYQLKo5WJjEzX7KNntRx-05D3Hk_WLwGXGBUKIYqEZVZovK'/>
                    <BoxText>Peso: 5</BoxText>
                    <BoxText>Tamanho: 100</BoxText>
                    <BoxText>Hp: 200</BoxText>
                    <BoxText>Defesa: 50</BoxText>
                    <BoxText>Ataque: 30</BoxText>
                    <BoxText>Velocidade: 25</BoxText>
                    <BoxText>Habilidade: choque</BoxText>
                    <BoxTextType>Tipo: eletrico</BoxTextType>
                </Pokemon>
            </Container2>                   
                
        </>
    )
}

export default Home;
