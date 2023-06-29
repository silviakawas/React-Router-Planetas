import { Link } from "react-router-dom";
import { StyledH1, StyledLi, StyledList, StyledMenuContainer } from "./styles";


const Menu = ()=>{
    return(
        <>
            <StyledMenuContainer>
                <StyledH1>THE PLANETS</StyledH1>
                <StyledList>
                    <StyledLi>
                        <Link to='/' style={{textDecoration: 'none', color: 'white'}}>MERCURY</Link>
                    </StyledLi>
                    <StyledLi>
                        <Link to='/venus' style={{textDecoration: 'none', color: 'white'}}>VENUS</Link>
                    </StyledLi>
                    <StyledLi>
                        <Link to='/earth' style={{textDecoration: 'none', color: 'white'}}>EARTH</Link>
                    </StyledLi>
                    <StyledLi>
                        <Link to='/mars' style={{textDecoration: 'none', color: 'white'}}>MARS</Link>
                    </StyledLi>
                    <StyledLi>
                        <Link to='/jupiter' style={{textDecoration: 'none', color: 'white'}}>JUPITER</Link>
                    </StyledLi>
                    <StyledLi>
                        <Link to='/saturn' style={{textDecoration: 'none', color: 'white'}}>SATURNO</Link>
                    </StyledLi>
                    <StyledLi>
                        <Link to='/uranus' style={{textDecoration: 'none', color: 'white'}}>URANUS</Link>
                    </StyledLi>
                    <StyledLi>
                        <Link to='/neptune' style={{textDecoration: 'none', color: 'white'}}>NEPTUNE</Link>
                    </StyledLi>
                </StyledList>
            </StyledMenuContainer>
            
        </>
    );
};

export default Menu;