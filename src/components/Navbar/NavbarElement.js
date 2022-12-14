import styled from "styled-components"
import { NavLink as Link } from "react-router-dom"
import { FaPizzaSlice } from "react-icons/fa"

export const Nav = styled.div`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: bold;
`

export const NavLink = styled(Link)` 
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;

@media screen and (max-width: 400px) {
    position: absolote;
    top: 10px;
    left: 25px;
}`;

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;

    p{
        transform: translate(-175%, 100%);
        font-weight: bold;
    }
`;

export const Bars = styled(FaPizzaSlice)`
    font-size: 2rem;
    transform: translate(-100%, 50%);
    top: 50px;

`   
