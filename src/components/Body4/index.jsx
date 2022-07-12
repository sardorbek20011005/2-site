import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CardMedia from "@mui/material/CardMedia"
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography"
import Rasm from "../../assets/heading-line-dec.png"
import Button from "@mui/material/Button"
import Rasm2 from "../../assets/about-right-dec.png"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default ()=>{
    return (
        <Box sx={{
        }}>
            <Box sx={{
                width: '100%',
                height:"120vh",
                mt:{xs:"320%",sm:"140%",md:"5%"},
                backgroundColor:"transparent"}} >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    <Item sx={{background:"transparent",boxShadow:"none"}}>
                    <Typography variant='h4'>
                        About What We Do & Who We Are
                    </Typography>
                    <img src={Rasm}/><br/><br/>
                    <Typography variant='p'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna.
                    </Typography>
                    <br/><br/><br/><br/><br/>
                    <Box sx={{ width: '100%' }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Item sx={{borderRadius:"20vh",border:"1px solid grey", mt:{xs:"1%",sm:"1%",md:"0%",lg:"0%"}}}>
                                    <Typography variant='h6'>Maintance Problems</Typography>
                                    <Typography variant='p'>Lorem Ipsum Text</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Item sx={{borderRadius:"20vh",border:"1px solid grey", mt:{xs:"1%",sm:"1%",md:"0%",lg:"0%"}}}>
                                    <Typography variant='h6'>24/7 Support & Help</Typography>
                                    <Typography variant='p'>Lorem Ipsum Text</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Item sx={{borderRadius:"20vh",border:"1px solid grey", mt:{xs:"1%",sm:"1%",md:"0%",lg:"0%"}}}>
                                    <Typography variant='h5'>Fixing Issues About</Typography>
                                    <Typography variant='p'>Lorem Ipsum Text</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Item sx={{borderRadius:"20vh",border:"1px solid grey", mt:{xs:"1%",sm:"1%",md:"0%",lg:"0%"}}}>
                                    <Typography variant='h5'>Co. Development</Typography>
                                    <Typography variant='p'>Lorem Ipsum Text</Typography>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                    <br/><br/><br/><br/>
                    <Typography variant='p'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, alias suscipit. Tenetur voluptatibus, sit explicabo libero architecto eius fugiat veniam.
                    </Typography>
                    <br/><br/><br/>
                    <Button sx={{borderRadius:"20vh"}} variant="contained">
                        Start 14-Day Free Trial 
                    </Button><br/><br/>
                    <Typography variant='p'>
                        *No Credit Card Required
                    </Typography>
                </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
            <Item sx={{background:"transparent",boxShadow:"none"}}>
                <CardMedia
                    component="img"
                    width="100%"
                    sizes='100%'
                    image={Rasm2}
                >
                </CardMedia>
            </Item>
            </Grid>
        </Grid>
        </Box>
    </Box>
    )
}

