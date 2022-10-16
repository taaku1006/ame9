import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import Home from "./components/pages/Home";
import Page1 from "./components/pages/Page1";
import Page2 from "./components/pages/Page2";
import Navbar from "./components/pages/Navber";
import theme from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/page1" element={<Page1/>}></Route>
          <Route path="/page2" element={<Page2/>}></Route>
        </Routes>
      </Router>
    </ChakraProvider>

    
        
  );
}

export default App;
