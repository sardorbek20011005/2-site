import React from 'react';
import Rasm from "../../assets/slider-left-dec.png"
import Rasm1 from "../../assets/slider-left-dec.png"

import Box from '@mui/material/Box'

import Body1 from '../../components/Body1';
import Body2 from '../../components/Body2';
import Body3 from "../../components/Body3"
import Body4 from "../../components/Body4"
import Body5 from "../../components/Body5"
import Body6 from "../../components/Body6"
import Body7 from "../../components/Body7"
import Body8 from "../../components/Body8"
import Footer from "../../components/Footer"
import Navbar from '../../components/Navbar';

export default () => (
  <div style={{
    margin:"0px", padding:"0px"
  }}>
    <Box lg={6} md={12} sm={12} xs={12} sx={{backgroundImage:{md:`url(${Rasm})`,sm:'none',xs:'none'},width:'100%',height:{md:'135vh'},backgroundRepeat:'no-repeat',backgroundSize:'70%'}}>
        <Navbar/>
        <Body1 />
      </Box>
    <Body2/>
    <Body3/>
    <Body4/>
    <Body5/>
    <Body6/>
    <Body7/>
    <Body8/>
    <Footer/>
  </div>
);
