import styled from 'styled-components';

export const Container = styled.div`
    height: fit-content;
    display: flex; 
    box-sizing: border-box;
    user-select: none; 
`
export const Images = styled.img`
    background: white;
    width: 13vw;
    height: 13vw;
    display: flex;
    align-items: center;
    margin-top: 20px;
    object-fit: cover;
    border-radius: 150px;
`;

export const Pokemon = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    align-items: center;
    min-width: 45px;
    width: 100%;
    min-height: 45px;
    height: 100%;
    border-radius: 10px;
    background-color: #ffcccb;
    padding: 15px;
    
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
    margin-top: 20vh; 
    padding: 100px 10vh 100px 10vh;
    display: grid;
    grid-template-columns: 5fr 5fr 5fr 5fr;
    gap: 100px;
    overflow-y: auto;
    background-color: white;
    border-radius: 30px;
`;