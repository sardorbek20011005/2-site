import React from 'react';
import Rasm from "../../assets/slider-dec.png"
import Box from '@mui/material/Box'

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'

import Button from '@mui/material/Button';
import AppleIcon from '@mui/icons-material/Apple';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default () => {
  return (
    <Box sx={{ width: '100 %' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={12} md={6}>
          <Item sx={{
            backgroundColor:"transparent",
            boxShadow:"none",
            mt:{lg:"40%", sm:"15%",md:"30%",xs:"20%"}
          }}>
            <Typography variant="h2"sx={{ marginLeft:{lg:"-20"},
              ml:{md:"9%"},fontWeight:{xs:"400",sm:"500",md:"500",lg:"600"},display:"flex",justifyContent:"center",alignItems:"center",textAlign:{lg:"left",md:"left",sm:"center",xs:"center"},width:{xs:"100%", sm:"100%",md:"100%",lg:"85%"}}} gutterBottom component="div">
            Get The Latest<br/>
            App From App Stores
            </Typography>
            <Typography variant="body2" sx={{ml:{md:"10%"},display:"flex",justifyContent:"center",alignItems:"center",textAlign:{lg:"left",md:"left",sm:"center",xs:"center"},width:{xs:"100%",md:"90%",lg:"85%"}}} gutterBottom component="div">
            Chain App Dev is an app landing page HTML5 template based on Bootstrap v5.1.3 CSS layout provided by TemplateMo, a great website to download free CSS templates.
            </Typography>
            <Box>
              <Button sx={{
                borderRadius:"60px",
                padding:"10px 20px",
                margin:{xs:"10px 5px",sm:"30px 20px", md:"30px 10px",lg:"50px 20px"},
              }} variant="contained" endIcon={<AppleIcon />}>
                Free Quotes
              </Button >
              <Button sx={{
                borderRadius:"60px",
                padding:"10px 20px"
              }} variant="contained" endIcon={<PlayArrowIcon />}>
                Free Quotes
              </Button>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Item sx={{
            height:"40%",
            width:{lg:"100%",sm:"100%",xs:"100%"},
            backgroundColor:"transparent",
            boxShadow:"none"
          }}>
            <CardMedia
              component="img"
              image={Rasm}
              alt="Paella dish"
              sx={{
                mt:{lg:'30%',md:"30%",sm:"10%",xs:"10%"},
                ml:{sm:"6%",md:"-2%",lg:"5%"},
                width:{lg:"90%",md:"100%",sm:"80%", xs:"100%"},
                height:{lg:"77vh",md:"60vh",sm:"100vh", xs:"40hv"}
              }}
            />
          </Item>
        </Grid>        
      </Grid>
  </Box>
  );
};
