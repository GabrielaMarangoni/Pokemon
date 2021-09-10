import styled from 'styled-components';

export const SelectPokemon = styled.input` 
background-color: #D3D3D3;
justify-content: center;
align-items: center;
width: 35vw;
height: 8vh;
margin-top: 100px;
font-size: 40px;
padding-inline-start: 25px;

@media(max-width: 1024px){
    width: 40vw;
    font-size: 28px;
}
@media(max-width: 768px){
    width: 55vw;
    font-size: 30px;
}
@media(max-width: 425px){
    width: 85vw;
    font-size: 25px;
}
`;

export const LineInputs = styled.div`
align-items: center;
display: flex;
justify-content: center;
width: 100vw;
padding-top: 70px;
user-select: none; 
`;

export const Container = styled.div`
    width: 72vw;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10vh; 
    padding: 100px 10vh 100px 10vh;
    display: grid;
    grid-template-columns: 5fr 5fr 5fr 5fr;
    gap: 100px;
    overflow-y: auto;
    background-color: white;
    border-radius: 30px;
`;

export const Container2 = styled.div`
    width: 15vw;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1vh; 
    padding: 50px 10vh 50px 5vh;
    overflow-y: auto;
    background-color: transparent;
    border-radius: 30px;
    align-items: center;
    justify-content: center;

    @media(max-width: 1024px){
    width: 27vw;
    }
    @media(max-width: 768px){
        width: 35vw;   
    }
    @media(max-width: 425px){
        width: 65vw;  
    }
`;

export const Pokemons = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    min-width: 45px;
    width: 100%;
    min-height: 45px;
    height: 100%;
    border-radius: 10px;
    background-color: #ffcccb;
    padding: 15px;
    user-select: none;
        
    h1, h2 {
        width: fit-content;
        display: flex;
        margin: 0;
        margin-right: auto;
    }
`;

export const Pokemon = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    min-width: 45px;
    width: 100%;
    min-height: 45px;
    height: 100%;
    border-radius: 10px;
    background-color: #ffcccb;
    padding: 15px;
    user-select: none;
        
    h1, h2 {
        width: fit-content;
        display: flex;
        margin: 0;
        margin-right: auto;
    }
`;

export const Images = styled.img`
    background: white;
    width: 13vw;
    height: 13vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    object-fit: cover;
    border-radius: 150px;

    @media(max-width: 1024px){
        width: 20vw;
        height: 20vw;
       
    }
    @media(max-width: 768px){
        width: 25vw;
        height: 25vw;
        
    }
    @media(max-width: 425px){
        width: 40vw;
        height: 40vw;
        
    }
`;

export const BoxText = styled.div`
    font-size: 25px;
    color: black;
    padding-left: 10px;
    font-weight: bold;
`;

export const BoxTextType = styled.div`
    font-size: 25px;
    color: black;
    padding-left: 10px;
    font-weight: bold;
    text-decoration-line: underline;
    cursor: pointer;
`;