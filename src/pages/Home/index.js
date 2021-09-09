import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import HeaderPage from '../../components/Header/index';


import { Container, Content, Images, Pokemon} from './styles';

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
            imagem: 'https://w7.pngwing.com/pngs/778/727/png-transparent-pokemon-let-s-go-pikachu-and-let-s-go-eevee-pokemon-go-pokemon-x-and-y-pikachu.png'
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
            imagem: 'https://w7.pngwing.com/pngs/778/727/png-transparent-pokemon-let-s-go-pikachu-and-let-s-go-eevee-pokemon-go-pokemon-x-and-y-pikachu.png'
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
            imagem: 'https://w7.pngwing.com/pngs/778/727/png-transparent-pokemon-let-s-go-pikachu-and-let-s-go-eevee-pokemon-go-pokemon-x-and-y-pikachu.png'
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
            imagem: 'https://w7.pngwing.com/pngs/778/727/png-transparent-pokemon-let-s-go-pikachu-and-let-s-go-eevee-pokemon-go-pokemon-x-and-y-pikachu.png'
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
            imagem: 'https://w7.pngwing.com/pngs/778/727/png-transparent-pokemon-let-s-go-pikachu-and-let-s-go-eevee-pokemon-go-pokemon-x-and-y-pikachu.png'
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
