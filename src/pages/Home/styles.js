import styled from 'styled-components';

export const Container = styled.div`
    height: fit-content;
    display: flex; 
    box-sizing: border-box;
   /* height: fit-content;
    display: flex; 
    box-sizing: border-box;
    margin-top: 10vh;
    margin-left: 10vw;
    margin-right: 10vw;
    background-color: white;
    border-radius: 20px;
    justify-content: center; */
`
export const Images = styled.img`
    background: #2F4F4F;
    width: 15vw;
    height: 15vw;
    display: flex;
    align-items: center;
    margin-top: 20px;
    object-fit: cover;
    border-radius: 10px;
    /* margin-top: 30px;
    display: flex;
    align-items: center;
    min-width: 50px;
    width: 100%;
    min-height: 50px;
    max-height: 50px;
    height: 50%;
    border-radius: 10px;
    //object-fit: cover;
    background: #2F4F4F; */
`;

export const Pokemon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 250px;
    width: 100%;
    min-height: 250px;
    height: 100%;
    border-radius: 10px;
    
    //cursor: pointer;
    
    h1, h2 {
        width: fit-content;
        display: flex;
        margin: 0;
        margin-right: auto;
    }
`;

export const Content = styled.div`
    width: 72vw;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15vh; 
    padding: 100px 10vh 100px 10vh;
    display: grid;
    grid-template-columns: 5fr 5fr 5fr 5fr;
    gap: 100px;
    overflow-y: auto;
    background-color: white;
    border-radius: 30px;
`