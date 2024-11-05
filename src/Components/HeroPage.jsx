import styled from "styled-components";
import bg from "../assets/Images/black.jpg"
import { FaXTwitter } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import pix from "../assets/Images/pix.png"


const HeroPage = () => {
    return (
        <Hero>
            <Left>
                <HeroName>Olubiyi Babajide</HeroName>
                <Title> A <span>Frontend Developer</span></Title>
                <Details>
                   
                    <a href="gmail.com" id="Home">
                        <p>Home</p>
                    </a>
                    <a href="">
                        <p>About</p>
                    </a>
                    <a href="">
                        <p>Resume</p>
                    </a>
                    <a href="">
                        <p>Services</p>
                    </a>
                    <a href="">
                        <p>Portfolio</p>
                    </a>
                    <a href="">
                        <p>Contact</p>
                    </a>
                </Details>

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
        </Hero>
      );
}
 
export default HeroPage;

const Hero = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    /* border: 1px solid white; */
    /* margin: 0px auto; */
    font-family: Poppins, sans-serif;
`

const HeroName = styled.h1`
font-size: 48px;
font-weight: 700;
letter-spacing:5px;


`
const Title = styled.div`
    font-size: 24px;
    font-weight: 500;
    color: rgb(204,204,204);
    /* word-spacing: 10px; */
    display: inline-block;
    font-family: Raleway;

    span{
        color: red;
        font-size: 30px;

    }

    
`
const Details = styled.div`
    display: flex;
    justify-content: space-between;

    #Home{
        border-bottom: 2px solid red;
    }
    a{
        color: rgb(204,204,204);
        text-decoration: none;
       
    
    };

    a:hover{
        color: white;
        cursor: pointer;
        width: 20px;
        
}

`
const Left = styled.div`
    color: white;
    line-height: 50px;
    margin-right: 100px;
`
const Icons = styled.div`
    border-radius: 10px;
    display: flex;
    width: 30%;
    justify-content: space-between;
    padding:0px 5px;
    font-size: 25px;
    margin-top: 20px;

    #one:hover{
        color: red;
     
    }

`
const Right = styled.image`
    /* border: 1px solid green; */
    img{
        width: 400px;
        position: fixed;
        bottom: 0px;
    }
  
`

