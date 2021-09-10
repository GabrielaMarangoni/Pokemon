//import { Container, Images} from './styles';
import React, { useState } from "react";
import axios from "axios";

import { Container, Images} from './styles';

const Home = () => {
    const [pokemon, setPokemon] = useState([]);
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonType, setPokemonType] = useState("");

    const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase());
    };
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
        setPokemonData(toArray);
        } catch (error) {
        console.log(error);
        }
    };
    console.log(pokemonData);

    return (
        <>          
            <Container>
                <h3>Pokemons</h3> 
                <form>
                    
                </form>
            </Container>
           
        
                   
        </>
    )
};

export default Home;