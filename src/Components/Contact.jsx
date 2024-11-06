import Header from "./Header";

import styled from "styled-components";

const Contact = () => {
    return ( 
        <SectionContact>
            <Header/>
        </SectionContact>
     );
}
 
export default Contact;

const SectionContact = styled.div`
    background-color: pink;
    height: 100vh;
    
`