import Header from "./Header";

import styled from "styled-components";

const Portfolio = () => {
    return ( 
        <SectionPortfolio>
            <Header/>
        </SectionPortfolio>
     );
}
 
export default Portfolio;

const SectionPortfolio = styled.div`
    background-color: green;
    height: 100vh;
`