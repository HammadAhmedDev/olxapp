import React from 'react';
import Header from "./comp/Header";
import Nav from "./comp/Nav";
import SlideImage from "./comp/SlideSection";
import AdBox from "./comp/AdSection";
import Info from './comp/InfoSection';
import SubInfoBox from './comp/SubInfo';
import Container from "react-bootstrap/Container"
import "./App.css";
function App(){
  return(
    <Container fluid>

      <Header/>
      <Nav />
      <SlideImage />
      <AdBox/>
      <Info />
      <SubInfoBox/>
      


    </Container>

  );
}

export default App;
