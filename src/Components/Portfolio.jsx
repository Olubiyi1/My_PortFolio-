import Header from "./Header";
import css from "../assets/Images/Portfolio_Images/css.svg"
import html from "../assets/Images/Portfolio_Images/html.svg"
import js from "../assets/Images/Portfolio_Images/js.svg"
import ts from "../assets/Images/Portfolio_Images/ts.svg"
import styledComponent from "../assets/Images/Portfolio_Images/styled.svg"
import React from "../assets/Images/Portfolio_Images/Reacti.svg"
import Git from "../assets/Images/Portfolio_Images/git.svg"
import Vs from "../assets/Images/Portfolio_Images/vs.svg"
import styled from "styled-components";


const Portfolio = () => {
    return ( 
        <SectionPortfolio>
            <Header/>
            <PortfolioContent>
                <PortfolioHeader>
                    My Tech Tools
                </PortfolioHeader>
                <TechTools>
                    <div>
                        <img src={html} alt="" id="One"/>
                        <p>Html</p>
                    </div>
                    <div><img src={css} alt="" id="One"/>
                        <p>CSS</p>
                    </div>
                    <div><img src={js} alt="" id="One"/>
                        <p>Javascript</p>
                    </div>
                    <div><img src={ts} alt="" id="One"/>
                        <p>Typescript</p>
                    </div>
                    <div><img src={styledComponent} alt="" id="One"/>
                        <p>Styled Component</p>
                    </div>
                    <div><img src={React} alt="" id="One"/><p>React</p></div>
                    <div><img src={Git} alt="" id="One"/><p>Git</p></div>
                    <div><img src={Vs} alt="" id="One"/><p>Vs Code</p></div>
                </TechTools>
            </PortfolioContent>
        </SectionPortfolio>
     );
}
 
export default Portfolio;

const SectionPortfolio = styled.div`
    background-color: #eaeaea;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    color: white;
    font-family: Poppins, sans-serif; 
    font-family: Poppins,sans-serif;
    
    
    img{
        width: 70px;
        padding: 10px;
        transition: transform ease 0.3s;
    

        &:hover{
            transform: scale(1.5);
        }

        @media (max-width:800px){
           width: 50px;
        }
        @media (max-width:640px){
           width: 30px;
        }
        @media (max-width:500px){
           padding: 0px;
        }
       
    }
`

const PortfolioContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px auto;
    margin-top: 50px;
    align-items: center;
    flex-wrap: wrap;
`
const TechTools = styled.div`
display: flex;
justify-content: space-around;
@media (max-width:510px){
           display: grid;
           grid-template-columns: repeat(3,1fr);
        }

div{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    font-size: 12px;
    flex-wrap: wrap;

    &:hover{
        p{
            visibility: visible;
        }
    }
    
    p{
        visibility: hidden;
        text-align: center;
        margin-top: 15px;
        font-weight: 800;

}

#One{
    margin-right: 10px;
            
    }
}
`
const PortfolioHeader = styled.div`
font-size: 30px;
color: black;
font-weight: 500;

@media (max-width:500px){
           font-size: 20px;
           margin-bottom: 10px;
        }

`