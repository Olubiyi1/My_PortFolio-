import Header from "./Header";
import bg from "../assets/Images/black.jpg"
import styled from "styled-components";

const Contact = () => {
    return ( 
        <SectionContact>
            <FormContent>
                <Header/>
                <ContactHeader>
                    Get in Touch
                </ContactHeader>
                <form action="">
                    <label htmlFor="">Name: <br />
                        <input type="text" name="Name" id="Name" />
                    </label> <br />
                    <label htmlFor="">E-mail: <br />
                        <input type="text" name="Name" id="Name" />
                    </label> <br />
                    <textarea name="Message" id="" placeholder="What do you have in mind?"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </FormContent>
        </SectionContact>
     );
}
 
export default Contact;

const SectionContact = styled.div`
    /* background-color: pink; */
    height: 100vh;
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    color: white;
    font-family: Poppins, sans-serif; 
    
`
const ContactHeader = styled.h1`
font-size: 30px;
    padding: 0px;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;

    @media (max-width:550px){
            font-size:20px;
            margin: 20px auto 0px;
        }
`
const FormContent = styled.div`
    /* border: 2px solid red; */

    form{
        max-width: 500px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin: 0px auto;
        /* margin-top: 100px; */
        text-align: start;
        
        button{
            border: 1px solid white;
            color: white;
            width: 100px;
            padding: 10px;
            border-radius: 5px;
            margin-top: 7px;
            background-color: transparent;

            &:hover{
                background-color: lightgray;
                color: black;
            }
        }

        @media (max-width:550px){
            
        }

       
        
        label{
            margin-bottom: 10px;
            font-size: 14px;
        }

        input{
            border-radius: 5px;
            width: 400px;
            height: 40px;
            border: 0px;
            margin-top: 5px;
            padding: 5px;

            @media (max-width:550px){
            padding: 0px;
            width: 250px;
            margin: 0px;
            height: 30px;
            
        }
        }

        #Name{
            /* margin-right: 0px; */
        }

        textarea{
            width: 400px;
            height: 100px;
            border-radius: 5px;

            @media (max-width:550px){
                height: 40px;
                width:240px;
            
        }
        }
        textarea[placeholder]{
            padding: 10px;
        }
    }
`

