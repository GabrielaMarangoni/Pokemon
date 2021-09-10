import { useCallback, useState } from 'react';
import HeaderPage from '../../components/Header/index';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import "../../App.css";

import { Container, Container2, BoxText, BoxTextType, Images, Pokemon, Pokemons, SelectPokemon, LineInputs} from './styles';

const Home = () => {
    const history = useHistory();
    const [pokemon, setPokemon] = useState([])
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonType, setPokemonType] = useState([]);
    const [pokemonAbility, setPokemonAbility] = useState([]);
    const [search, setSearch] = useState('');
      
   /*  const filterType = pokemonType
        .filter((type) => type.startWith(search)); */

    const handleSubmit = (e) => {
      e.preventDefault();
      getPokemon();
    };
    const getPokemon = async () => {
      const toArray = [];
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const response = await axios.get(url);
        toArray.push(response.data);
        setPokemonType(response.data.types[0].type.name);
        setPokemonAbility(response.data.abilities[0].ability.name);
        setPokemonData(toArray);
      } catch (error) {
        console.log(error);
      }
    };
    console.log(pokemonData);

    const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase());
    };

    /* const goToPokemonType = useCallback(() => {
        history.push('')
    }, [])

    const getPokemonType = useCallback(async () => {

    }) */

    return (
        <>          
            <HeaderPage/> 
            <LineInputs>
                <form onSubmit={handleSubmit}>
                    <SelectPokemon onChange={handleChange} placeholder="Escreva o nome do pokemon"/>                
                </form>
            </LineInputs>         
                
            {/* Lista pelo tipo do pokemon */}
            {/* <Container> 
            { pokemonData.map((data) => {
                    return(
                        <Pokemons>
                            <h1 className="capitalized">{data.name}</h1>                          
                            <Images src={data.sprites["front_default"]}/>
                            <BoxText>Weight: {data.weight}</BoxText>
                            <BoxText>Height: {data.height}</BoxText>
                            <BoxText>Hp: {data.stats[0].base_stat}</BoxText>
                            <BoxText>Defense: {data.stats[2].base_stat}K</BoxText>
                            <BoxText>Attack: {data.stats[1].base_stat}K</BoxText>
                            <BoxText>Speed: {data.stats[5].base_stat}</BoxText>
                            <BoxText>Abiliity: {pokemonAbility} </BoxText>
                            <BoxTextType>Type: {pokemonType}</BoxTextType>
                        </Pokemons>
                    )
                })  }
            </Container> */}

            {/* pesquisa pelo nome do pokemon */}
            {pokemonData.map((data) => {
                return (
                    <Container2> 
                        <Pokemon>  
                            <h1 className="capitalized">{data.name}</h1>                          
                            <Images src={data.sprites["front_default"]}/>
                            <BoxText>Weight: {data.weight}</BoxText>
                            <BoxText>Height: {data.height}</BoxText>
                            <BoxText>Hp: {data.stats[0].base_stat}</BoxText>
                            <BoxText>Defense: {data.stats[2].base_stat}K</BoxText>
                            <BoxText>Attack: {data.stats[1].base_stat}K</BoxText>
                            <BoxText>Speed: {data.stats[5].base_stat}</BoxText>
                            <BoxText>Abiliity: {pokemonAbility} </BoxText>
                            <BoxTextType>Type: {pokemonType}</BoxTextType>
                        </Pokemon>
                    </Container2>                       
                );
            })}
        </>
    )
}

export default Home;
