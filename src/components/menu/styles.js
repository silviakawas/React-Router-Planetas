import styled from "styled-components";

const StyledMenuContainer = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 2px 0px;
    border-bottom: 1px solid white;
    margin: 0;
`;

const StyledH1 = styled.h1`
    font-size: 38px;
    font-weight: 500;
    color: white;
    padding-left: 25px;
    cursor: pointer;
`;

const StyledList = styled.ul`
    width: 820px;
    height: 25px;
    list-style: none;
    display: flex;
    margin-right: 40px;
    justify-content: center;
    align-items: center;
    gap: 35px;
`;

const StyledLi = styled.li`
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 2px;
    color: white;
    margin: 0;
    text-align: center;
    text-decoration: none;
    position: relative;
    top: 1px;
    right: 0;
    cursor: pointer;
    
`;


export {StyledMenuContainer, StyledH1, StyledList, StyledLi};