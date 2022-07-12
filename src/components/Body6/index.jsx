import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Rasm from "../../assets/client-bg.png"
import Rasm1 from "../../assets/quote.png"
import Container from '@mui/material/Container';
import Rasm2 from "../../assets/client-image.jpg"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default  ()=> {
    return (
        <Container>
            <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Item sx={{boxShadow:"none"}}>
                        {/* 1 */}
                        <Box sx={{ width: '100%', mt:{xs:"10%"} }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={12} sm={4} md={4} lg={4} >
                                    <Item sx={{boxShadow:"none"}}>
                                       <Typography variant='h6'>
                                            David Marti Co
                                       </Typography>
                                       <Typography variant='p'>
                                            30 November 20211
                                       </Typography>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4}>
                                    <Item sx={{boxShadow:"none", display:{xs:"none",md:"flex",sm:"flex"}}}><b>Financial Apps</b></Item>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4}>
                                    <Item sx={{boxShadow:"none"}}>
                                        <Typography variant='h6'>
                                            <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>4.8  
                                        </Typography>    
                                    </Item>
                                </Grid>
                            </Grid>
                        </Box>
                        {/* 2 */}
                        <Box sx={{ width: '100%',mt:{xs:"10%"} }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={12} sm={4} md={4} lg={4}>
                                    <Item sx={{boxShadow:"none"}}>
                                       <Typography variant='h6'>
                                       Jake Harris Nyo
                                       </Typography>
                                       <Typography variant='p'>
                                       29 November 2021
                                       </Typography>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4}>
                                    <Item sx={{boxShadow:"none",display:{xs:"none",md:"flex",sm:"flex"}}} ><b>Digital Business</b></Item>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4}>
                                    <Item sx={{boxShadow:"none"}}>
                                        <Typography variant='h6'>
                                            <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>3.9  
                                        </Typography>    
                                    </Item>
                                </Grid>
                            </Grid>
                        </Box>
                        {/* 3 */}
                        <Box sx={{ width: '100%',mt:{xs:"10%"} }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={12} sm={4} md={4} lg={4}>
                                    <Item sx={{boxShadow:"none"}}>
                                       <Typography variant='h6'>
                                       May Catherina
                                       </Typography>
                                       <Typography variant='p'>
                                       27 November 2021
                                        </Typography>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4}>
                                    <Item sx={{boxShadow:"none",display:{xs:"none",md:"flex",sm:"flex"}}}><b>Business & Economics</b></Item>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4}>
                                    <Item sx={{boxShadow:"none"}}>
                                        <Typography variant='h6'>
                                            <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>3.7  
                                        </Typography>    
                                    </Item>
                                </Grid>
                            </Grid>
                        </Box>
                        {/* 4 */}
                        <Box sx={{ width: '100%',mt:{xs:"10%"} }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={12} sm={4} md={4} lg={4}>
                                    <Item sx={{boxShadow:"none"}}>
                                       <Typography variant='h6'>
                                       Random User
                                       </Typography>
                                       <Typography variant='p'>
                                       24 November 2021
                                        </Typography>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4}>
                                    <Item sx={{boxShadow:"none",display:{xs:"none",md:"flex",sm:"flex"}}}><b>New App Ecosystem</b></Item>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4}>
                                    <Item sx={{boxShadow:"none"}}>
                                        <Typography variant='h6'>
                                            <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>4.5  
                                        </Typography>    
                                    </Item>
                                </Grid>
                            </Grid>
                        </Box>
                        {/* 5 */}
                        <Box sx={{ width: '100%',mt:{xs:"10%"} }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={12} sm={4} md={4} lg={4}>
                                    <Item sx={{boxShadow:"none"}}>
                                       <Typography variant='h6'>
                                       Mark Amber Do
                                       </Typography>
                                       <Typography variant='p'>
                                       21 November 2021
                                       </Typography>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4}>
                                    <Item sx={{boxShadow:"none"}}><b>Web Development</b></Item>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4}>
                                    <Item sx={{boxShadow:"none",display:{xs:"none",md:"flex",sm:"flex"}}}>
                                        <Typography variant='h6'>
                                            <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>3.8  
                                        </Typography>    
                                    </Item>
                                </Grid>
                            </Grid>
                        </Box>
                    </Item>
                </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Item sx={{height:{xs:"70%",lg:"50%",md:'50%',sm:"70%"}, boxShadow:"none" }}>
                            <Box sx={{
                                height:{xs:"50vh",lg:"50vh",md:"40vh",sm:"60vh"},
                                width:{xs:"100%",sm:"90%"},
                                ml:{lg:'10%',sm:"5%"},
                                border:"1px solid red",
                                background:`url(${Rasm})`,
                                backgroundSize:{sm:"100%",lg:"100%",md:"100%"},
                                backgroundRepeat:"no-repeat",
                                borderRadius:"10vh"}}>
                                    <Typography variant='body1' sx={{color:"#fff",mt:{lg:"25%",xs:"20%", fontFamily:"body1",lineHeight
                                :"2"}}}>
                                    “May, Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”
                                    </Typography>
                            </Box>
                        </Item>
                        <Item sx={{boxShadow:"none"}}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={12} sm={6}>
                                    <Item sx={{
                                        display:"flex",
                                        justifyContent:{xs:"center",sm:"left",lg:"center"},
                                        boxShadow:"none"
                                    }}>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: { lg: 180, xs: 180 }, borderRadius: "20vh" }}
                                            image={Rasm2}
                                            alt="Live from space album cover"
                                        />
                                    </Item>
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <Item sx={{
                                        boxShadow:"none",
                                        textAlign:{xs:"center",sm:"left",lg:"left"},
                                        paddingTop:{sm:'20%',xs:"0%",md:"20%",lg:"20%"}
                                    }}> <Typography variant='h4' sx={{
                                        fontWeight:"bold",
                                        fontSize:{xs:"25px"}
                                    }}>David Martino</Typography>
                                    <Typography variant='body2'>
                                    CEO of David Company
                                    </Typography></Item>
                                </Grid>
                            </Grid>
                        </Item>
                    </Grid>
            </Grid>
    </Box>
        </Container>
    )
}