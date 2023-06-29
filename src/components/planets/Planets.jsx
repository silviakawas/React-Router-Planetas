import { useState } from "react";
import data from '../../data/data.json';
import { StyledContainer, StyledDescription, StyledImgContainer, StyledPlanetImg, StyledPlanetInfo, StyledSmallImg, StyledSource, StyledSourceLink, StyledSourceWord, StyledStats, StyledStatsContainer, StyledStatsH1, StyledStatsH3, StyledTab, StyledTabH1, StyledTabNumber, StyledTabsContainer, StyledTitle } from "./styles";

const Planets = ({planetName}) =>{
    const[activeTab, setActiveTab] = useState(0);
    const changeTab = number => {
        setActiveTab(number);
    };
    if(!data[planetName]){
        return '';
    };

    return(
        <>
            <StyledContainer>
                <StyledImgContainer>
                    {activeTab === 0 && (
                        <StyledPlanetImg src={data[planetName].images.planet}/>
                    )}
                    {activeTab === 1 && (
                        <StyledPlanetImg src={data[planetName].images.internal}/>
                    )}
                    {activeTab === 2 && (
                        <>
                            <StyledPlanetImg src={data[planetName].images.planet}/>
                            <StyledSmallImg src={data[planetName].images.geology}/>
                        </>
                        
                    )}
                </StyledImgContainer> 
                
                <StyledPlanetInfo>
                    <StyledTitle>{data[planetName].name}</StyledTitle>
                    {activeTab === 0 && (
                        <>
                            <StyledDescription>{data[planetName].overview.content}</StyledDescription>
                            <StyledSource>
                                <StyledSourceWord>Source:</StyledSourceWord>
                                <StyledSourceLink href={data[planetName].overview.source}>Wikipedia</StyledSourceLink>
                            </StyledSource>
                        </>
                    )}
                    {activeTab === 1 && (
                        <>
                            <StyledDescription>{data[planetName].structure.content}</StyledDescription>
                            <StyledSource>
                                <StyledSourceWord>Source:</StyledSourceWord>
                                <StyledSourceLink href={data[planetName].structure.source}>Wikipedia</StyledSourceLink>
                            </StyledSource>
                        </>
                    )}
                    {activeTab === 2 && (
                        <>
                            <StyledDescription>{data[planetName].geology.content}</StyledDescription>
                            <StyledSource>
                                <StyledSourceWord>Source:</StyledSourceWord>
                                <StyledSourceLink href={data[planetName].geology.source}>Wikipedia</StyledSourceLink>
                            </StyledSource>
                        </>
                    )}
    
                    <StyledTabsContainer>
                        <StyledTab
                            color={data[planetName].color}
                            className={activeTab === 0 ? 'active' : ''}
                            onClick={() => changeTab(0)}
                        >
                            <StyledTabNumber>01</StyledTabNumber>
                            <StyledTabH1>OVERVIEW</StyledTabH1>
                        </StyledTab>
                        <StyledTab
                            color={data[planetName].color}
                            className={activeTab === 1 ? 'active' : ''}
                            onClick={() => changeTab(1)}
                        >
                            <StyledTabNumber>02</StyledTabNumber>
                            <StyledTabH1>INTERNAL STRUCTURE</StyledTabH1>
                        </StyledTab>
                        <StyledTab
                            color={data[planetName].color}
                            className={activeTab === 2 ? 'active' : ''}
                            onClick={() => changeTab(2)}
                        >
                            <StyledTabNumber>03</StyledTabNumber>
                            <StyledTabH1>SURFACE GEOLOGY</StyledTabH1>
                        </StyledTab>
                    </StyledTabsContainer>
                </StyledPlanetInfo>
                

            </StyledContainer>
            <StyledStatsContainer>
                    <StyledStats>
                        <StyledStatsH3>ROTATION TIME</StyledStatsH3>
                        <StyledStatsH1>{data[planetName].rotation}</StyledStatsH1>
                    </StyledStats>
                    <StyledStats>
                        <StyledStatsH3>REVOLUTION TIME</StyledStatsH3>
                        <StyledStatsH1>{data[planetName].revolution}</StyledStatsH1>
                    </StyledStats>
                    <StyledStats>
                        <StyledStatsH3>RADIUS</StyledStatsH3>
                        <StyledStatsH1>{data[planetName].radius}</StyledStatsH1>
                    </StyledStats>
                    <StyledStats>
                        <StyledStatsH3>AVERAGE TEMP.</StyledStatsH3>
                        <StyledStatsH1>{data[planetName].temperature}</StyledStatsH1>
                    </StyledStats>
                </StyledStatsContainer>
        </>
        
    );
};

export default Planets;