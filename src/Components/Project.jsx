import Header from "./Header";


import styled from "styled-components";

const Project = () => {
    return ( 
        <SectionProject>
            <Header/>
        </SectionProject>
     );
}
 
export default Project;

const SectionProject = styled.div`
    background-color: yellow;
    height: 100vh;
`