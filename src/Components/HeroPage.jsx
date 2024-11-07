import styled from "styled-components";
import bg from "../assets/Images/black.jpg"
import { FaXTwitter } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import pix from "../assets/Images/pix.png"
import { Link } from "react-router-dom";


const HeroPage = () => {
    return (
        <Hero>
            <Content>
                <Left>
                    <HeroName>Olubiyi Babajide</HeroName>
                    <Title> A <span>Frontend Developer</span></Title>
                    <Links>
                        <Link to="/" id="One">
                                        <p>Home</p>
                                        <hr />
                                    </Link>
                        
                                    <Link to="/About">
                                        <p>About</p>
                                        <hr />
                                    </Link>
                            
                                    <Link to="/Project">
                                         <p>Project</p>
                                         <hr />
                                    </Link>
                        
                                    <Link to="Portfolio">
                                        <p>Portfolio</p>
                                        <hr />
                                    </Link>
                        
                                    <Link to="/Contact">
                                        <p>Contact</p>
                                        <hr />
                                    </Link>
                    </Links>
                    <Icons>
                    <p id="one"><FaXTwitter/></p>
                    <p id="one"><CiFacebook/></p>
                    <p id="one"><FaInstagram/></p>
                    <p id="one"><CiLinkedin/></p>
                    </Icons>
                </Left>
                <Right>
                    <img src={pix} alt="" />
                </Right>
            </Content>
        </Hero>
      );
}
 
export default HeroPage;

const Hero = styled.div`
    margin: 0px;
    padding: 0px;
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around; 
    font-family: Poppins, sans-serif; 
`
const HeroName = styled.h1`
font-size: 48px;
font-weight: 700;
letter-spacing:5px;
color: white;
@media (max-width:880px){
        font-size: 40px;
    }

    @media (max-width:750px){
        font-size: 30px;
    }
    @media (max-width:650px){
        font-size: 25px;
    }

    @media (max-width:350px){
        font-size: 20px;
    }
  
`
const Content = styled.div`
    display: flex;
    max-width: 1440px;
    align-items: center;
    margin-top: 70px;
    justify-content: space-between;

    @media (max-width:600px){
        flex-wrap: wrap;
        text-align: center;
        margin-top: 100px;
        
    }
    @media (max-width:250px){
        margin-top: 10px;
    }
`
const Title = styled.div`
    font-size: 24px;
    font-weight: 500;
    color: rgb(204,204,204);
    word-spacing: 5px;
    font-family: Raleway;
    text-align: start;

    @media (max-width:880px){
        font-size: 20px;
    }

    @media (max-width:750px){
        font-size: 16px;
        text-align: center;
    }
  

    @media (max-width:350px){
        font-size: 12px;
        text-align: center;
    }

    span{
        color: red;
        font-size: 30px;
        @media (max-width:880px){
        font-size: 20px;
    }

    @media (max-width:750px){
        font-size: 16px;
    }

    @media (max-width:350px){
        font-size: 12px;
    }

    }   
`
const Left = styled.div`
    margin: 0px auto;
    text-align: center;

    @media (max-width:600px){
        margin-bottom: 50px;
    }

    @media (max-width:350px){
        /* margin: 10px auto; */
    }

`
const Icons = styled.div`
    border-radius: 10px;
    display: flex;
    width: 150px;
    justify-content: space-between;
    padding:0px 5px;
    font-size: 25px;
    margin-top: 20px;
    color: white;

    @media (max-width:880px){
        font-size: 20px;
    }

    @media (max-width:750px){
        font-size: 16px;
        width: 100px;
        margin: 0px auto;
        margin-top: 20px;
    }

    @media (max-width:350px){
        font-size: 12px;
        margin: 0px auto;
        margin-top: 20px;
    }
`
const Right = styled.image`

@media (max-width:700px){
       /* width: 250px; */
       margin: 0px auto;
    }
img{
    width: 350px;
    @media (max-width:880px){
        width:250px;
    }

    @media (max-width:750px){
    margin-bottom: -20px;
       width: 255px;
    }

    @media (max-width:350px){
       width:255px;
       margin-bottom: -15px;
       /* margin-top: -10px; */
    }
    }
`
const Links = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    hr{
        display: none;
    }
    @media (max-width:750px){
        font-size: 12px;
    }

    &:hover{
        color: red;
      
    }
a{
    color: white;
    text-decoration: none;
    margin-top: 10px;
    padding: 10px;

    #One{
        border-bottom: 2px solid red;
    }
    
}
a:hover{
    color: red;
    hr{
        display: block;
        width: 25px;
        
       }
}
`