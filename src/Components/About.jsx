import styled from "styled-components";
import Header from "./Header";

const About = () => {
    return ( 
        <AboutSection>
            <Header/>
        </AboutSection>
     );
}
 
export default About;

const AboutSection = styled.div`
    background-color: red;
    height: 100vh;
    /* padding-top: 10px; */
`