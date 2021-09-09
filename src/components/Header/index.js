import React from 'react';
import logo from '../../images/Poké_Bola.png';

import { Header, Logo } from './styles';
// O props significa propriedades que são passadas ao seu componente
const HeaderPage =() =>{

    return (
        <Header>
            <Logo src={logo}/>
            <h1>Pokébola</h1>
        </Header>
    )
}
export default HeaderPage
