import styled from "styled-components";

const StyledContainer = styled.div`
    width: 1200px;
    height: 800px;
    display: flex;
    flex-direction: row nowrap;
    justify-content: center;
    align-items: center;
    margin: auto;
    gap: 200px;
`;
const StyledImgContainer = styled.div`
    position: relative;
`;
const StyledPlanetImg = styled.img`
    width: 490px;
    height: 490px;
    transition: all 0.5s ease;
`;
const StyledSmallImg = styled.img`
    width: 40%;
    position: absolute;
    bottom: -100px;
    left: 50%;
    transform: translateX(-50%);
`;
const StyledPlanetInfo = styled.div`
    width: 400px;
`;
const StyledTitle = styled.h1`
    color: white;
    font-size: 80px;
    line-height: 103px;
`;
const StyledDescription = styled.p`
    color: white;
    font-size: 16px;
    line-height: 25px;
`;
const StyledSource = styled.div`
    display: flex;
    flex-direction: row nowrap;
    align-items: center;
    gap: 10px;
    color: white;
`;
const StyledSourceWord = styled.p`
    font-size: 16px;
    font-weight: 300;
    color: white;
    line-height: 25px;
`;
const StyledSourceLink = styled.a`
    font-size: 16px;
    font-weight: 300;
    color: gray;
    text-decoration: underline;

`;
const StyledTabsContainer = styled.div`
    width: 400px;
    height: 180px;
    padding-top: 30px;
`;
const StyledTab = styled.div`
    width: 400px;
    height: 48px;
    display: flex;
    flex-direction: row nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 40px;
    margin-bottom: 10px;
    border: 1px solid white;
    cursor: pointer;
    transition: all 0.5s ease;
    &.active{
        background-color: ${({color}) => color};
    }
`;
const StyledTabNumber = styled.h2`
    position: relative;
    left: 10px;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 3px;
    color: #CBCBCB;
    padding-left: 20px;
`;
const StyledTabH1 = styled.h1`
    position: relative;
    left: 20px;
    font-size: 15px;
    font-weight: 500;
    left: 3px;
    color: white;
`;
const StyledStatsContainer = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: row nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 90px;
    gap: 30px;
    padding-bottom: 40px;
`;
const StyledStats = styled.div`
    width: 255px;
    height: 128px;
    display: flex;
    flex-flow: column nowrap;
    gap: 20px;
    justify-content: center;
    border: 1px solid white;
    padding-right: 18px;
    padding-left: 18px;
`;
const StyledStatsH3 = styled.h3`
    font-size: 15px;
    font-weight: 400;
    color: lightgray;
    letter-spacing: 3px;
    position: relative;
    left: 20px;
    margin: 0;
`;
const StyledStatsH1 = styled.h1`
    font-size: 30px;
    font-weight: 500;
    color: white;
    position: relative;
    left: 20px;
    text-transform: uppercase;
    margin: 0;
`;

export {StyledContainer, StyledImgContainer, StyledPlanetImg, StyledSmallImg, StyledPlanetInfo, StyledTitle, StyledDescription, StyledSource, StyledSourceWord, StyledSourceLink, StyledTabsContainer, StyledTab, StyledTabNumber, StyledTabH1, StyledStatsContainer, StyledStats, StyledStatsH3, StyledStatsH1};