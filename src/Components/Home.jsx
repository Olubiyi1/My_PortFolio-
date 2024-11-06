import HeroPage from "./HeroPage";
import styled from "styled-components";

const Home= () => {
    return ( 
        <SectionHome>
                <HeroPage/>
        </SectionHome>
     );
}
 
export default Home;

const SectionHome = styled.div`
height: 100vh;

    
`