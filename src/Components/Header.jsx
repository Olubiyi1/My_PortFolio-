import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <Head>
            <HeadTitle>
                Olubiyi Babajide
            </HeadTitle>
             <Link to="/">
                <p>Home</p>
            </Link>

            <Link to="/About">
                <p>About</p>
            </Link>
    
            <Link to="/Project">
                 <p>Project</p>
            </Link>

            <Link to="/Portfolio">
                <p>Portfolio</p>
            </Link>

            <Link to="/Contact">
                <p>Contact</p>
            </Link>
        </Head>
     );
}
 
export default Header;

const Head = styled.div`
background-color: lightblue;
padding:0px;
padding: 40px;
color:white;
display: flex;
justify-content: space-around;
align-items: center;
margin: 0px;
padding: 0px;
background-color: rgb(27,27,27);

@media (max-width:880px){
        font-size: 20px;
    }

    @media (max-width:750px){
        font-size: 16px;
    }

    @media (max-width:550px){
        flex-direction: column;
    }
    @media (max-width:350px){
        font-size: 12px;
    }

    a{
        font-size: 16px;
    }
h1{
    font-family: Poppins;
    letter-spacing: 5px;
}

a{
    padding: 15px 0px;
    color: white;
    text-decoration: none;

    @media (max-width:550px){

    }
}

`
const HeadTitle = styled.h1`
@media (max-width:880px){
    font-size: 20px;
}
    @media (max-width:700px){
        font-size: 20px;
    }
`