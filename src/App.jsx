import styled from "styled-components";
// import Homepage from "./Pages/Homepage";
// import Header from "./Components/Header";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Tech_Tools from "./Components/Portfolio";
import Project from "./Components/Project";
import Home from "./Components/Home"
import HeroPage from "./Components/HeroPage";
import Header from "./Components/Header"
import About from "./Components/About";


const App = () => {
   return ( 
      <BrowserRouter>
         <Main>
            {/* <Header/> */}
            {/* <HeroPage/> */}
            
            <Routes>

               <Route path="/" element={<Home/>}/>
               <Route path="/Contact" element={<Contact/>}/>
               <Route path="/About" element={<About/>}/>
               <Route path="/Portfolio" element={<Tech_Tools/>}/>
               <Route path="/Project" element={<Project/>}/>
               {/* <Route path="/About" element={<About/>}/> */}
            </Routes>
            {/* <Homepage/> */}

            {/* <h1>Hello</h1> */}
         </Main>
      </BrowserRouter>
    );
}
 
export default App;

const Main = styled.div`

   
`