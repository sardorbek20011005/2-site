import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import RR1 from '../../assets/regular-table-top.png'
import RR2 from '../../assets/pro-table-top.png'
import RR3 from '../../assets/regular-table-bottom.png'
import RR4 from '../../assets/pro-table-bottom.png'
import RR5 from '../../assets/pricing-table-01.png'


import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import { height } from '@mui/system';
import Button from '@mui/material/Button';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
}));

export default () => {
    return (

        <Box sx={{ width: {lg:"80%",md:"90%",sm:"88%"}, marginLeft: {lg:"11%",md:"6%",xs:"10%",sm:"6%"}, marginTop: "5%" }} >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item lg={4} xs={12} md={4}>
                    <Item sx={{
                        height: {lg:"100vh",md:"78vh",xs:"100vh"},
                        borderRadius: "6vh",
                        marginTop: {xs:"40%",lg:"20%",md:"16%",sm:"5%"},
                        boxShadow: '0px 0px 15px rgba(0 0 0 / 10%)'
                    }}> <Box>
                            <CardMedia
                                component="img"
                                sx={{ width: { lg: 320, xs: 280 }, marginTop: "-1.7%", marginLeft: "-1.7%", borderRadius: "4vh" }}
                                image={RR1}
                                alt="Live from space album cover"
                            />
                            <Typography variant='h2' sx={{
                                fontWeight: "bold",
                                marginTop: {lg:"-60%",md:"-70%"},
                                textAlign: "left",
                                marginLeft: "10%",
                                color: "white"
                            }}>
                                $12
                            </Typography>
                        </Box>
                        <Box sx={{
                            width:{lg:"50%",sm:"25%",md:"50%",xs:"50%"},
                            height: {lg:"54vh",xs:"64vh",md:"38vh",sm:"60vh"},
                            marginLeft: {lg:"25%",sm:"40%",md:"25%",xs:"25%"},
                            marginTop:{xs:"-60%",lg:"0%",md:"10%",sm:"-25%"}
                        }}>
                            <CardMedia
                                component="img"
                                sx={{ width: { lg: 140, xs: 135 }, marginLeft:{lg:"4%",sm:"8%",xs:"4%",md:"4%"}}}
                                image={RR5}
                                alt="Live from space album cover"
                            />
                            <Typography variant='body1' sx={{
                                width: "100%",
                                fontSize:{lg:'18px',md:"15px",sm:"18px"},
                            }}>
                                Lorem Ipsum Dolores
                                20 TB of Storage
                                Life-time Support
                                Premium Add-Ons
                                Fastest Network
                                More Options
                            </Typography>
                        </Box>
                        <Button variant="outlined" sx={{
                            width: {lg:"70%",md:"90%"},
                            height: "7vh",
                            borderRadius: "5vh",
                            marginLeft:{lg:"0%",sm:"6%",xs:"0%",md:"0%"}
                        }}>Purchase This Plan Now</Button>
                        <CardMedia
                            component="img"
                            sx={{ width: { lg: 428, xs: 280 }, marginTop: {lg:"-30%",md:"-5%",xs:"-40%"},marginLeft:{lg:"-38%"}, borderRadius: "5vh",display:{xs:"none",lg:"flex",md:"flex"} }}
                            image={RR3}
                            alt="Live from space album cover"
                        />
                    </Item>
                </Grid>
                <Grid item lg={4} xs={12} md={4}>
                    <Item sx={{
                        height: {lg:"125vh",xs:"100vh",md:"90vh"},
                        borderRadius: "6vh",
                        marginTop:{lg:"0%",xs:"0%",sm:"5%",md:"0%"},
                        boxShadow: '0px 0px 15px rgba(0 0 0 / 10%)'
                    }}>
                        <Box>
                            <CardMedia
                                component="img"
                                sx={{ width: { lg: 318, xs: 280,sm:250 }, marginTop: {lg:"-1.5%",md:"-3%",xs:"-3%",sm:"-1%"}, marginLeft: {lg:"-1.7%",md:"-1.7%",xs:"-1.7%",sm:"-1%"}, borderRadius: "4vh" }}
                                image={RR2}
                                alt="Live from space album cover"
                            />
                            <Typography variant='h2' sx={{
                                fontWeight: "bold",
                                marginTop: {lg:"-60%",md:"-80%"},
                                textAlign: "left",
                                marginLeft: "10%",
                                color: "white"
                            }}>
                                $12
                            </Typography>
                        </Box>
                        <Box sx={{
                            width:{lg:"50%",sm:"25%",md:"50%",xs:"50%"},
                            height: {lg:"54vh",xs:"64vh",md:"38vh",sm:"60vh"},
                            marginLeft: {lg:"25%",sm:"40%",md:"25%",xs:"25%"},
                            marginTop:{xs:"-60%",lg:"10%",md:"40%",sm:"-25%"}
                        }}>
                            <CardMedia
                                component="img"
                                sx={{ width: { lg: 150, xs: 135 }, marginLeft:{lg:"4%",sm:"8%",xs:"4%",md:"4%"}}}
                                image={RR5}
                                alt="Live from space album cover"
                            />
                            <Typography variant='body1' sx={{
                                width: "100%",
                                fontSize:{lg:'18px',md:"15px",sm:"18px"},
                            }}>
                                Lorem Ipsum Dolores
                                20 TB of Storage
                                Life-time Support
                                Premium Add-Ons
                                Fastest Network
                                More Options
                            </Typography>
                        </Box>
                        <Button variant="outlined" sx={{
                            width: {lg:"70%",md:"90%"},
                            height: "7vh",
                            borderRadius: "5vh",
                            marginLeft:{lg:"0%",sm:"6%",xs:"0%",md:"0%"}
                        }}>Purchase This Plan Now</Button>
                        <CardMedia
                            component="img"
                            sx={{ width: { lg: 320, xs: 280 }, marginTop: {lg:"10%",md:"0%",xs:"-30%"},marginLeft:{lg:"-2%"}, borderRadius: "5vh",display:{xs:"none",lg:"flex",md:"flex"} }}
                            image={RR4}
                            alt="Live from space album cover"
                        />
                    </Item>
                </Grid>
                <Grid item lg={4} xs={12} md={4}>
                <Item sx={{
                        height: {lg:"100vh",md:"78vh",xs:"100vh"},
                        borderRadius: "6vh",
                        marginTop: {xs:"40%",lg:"20%",md:"16%",sm:"5%"},
                        boxShadow: '0px 0px 15px rgba(0 0 0 / 10%)'
                    }}> <Box>
                            <CardMedia
                                component="img"
                                sx={{ width: { lg: 320, xs: 280 }, marginTop: "-1.7%", marginLeft: "-1.7%", borderRadius: "4vh" }}
                                image={RR1}
                                alt="Live from space album cover"
                            />
                            <Typography variant='h2' sx={{
                                fontWeight: "bold",
                                marginTop: {lg:"-60%",md:"-70%"},
                                textAlign: "left",
                                marginLeft: "10%",
                                color: "white"
                            }}>
                                $12
                            </Typography>
                        </Box>
                        <Box sx={{
                            width:{lg:"50%",sm:"25%",md:"50%",xs:"50%"},
                            height: {lg:"54vh",xs:"64vh",md:"38vh",sm:"60vh"},
                            marginLeft: {lg:"25%",sm:"40%",md:"25%",xs:"25%"},
                            marginTop:{xs:"-60%",lg:"0%",md:"10%",sm:"-25%"}
                        }}>
                            <CardMedia
                                component="img"
                                sx={{ width: { lg: 140, xs: 135 }, marginLeft:{lg:"4%",sm:"8%",xs:"4%",md:"4%"}}}
                                image={RR5}
                                alt="Live from space album cover"
                            />
                            <Typography variant='body1' sx={{
                                width: "100%",
                                fontSize:{lg:'18px',md:"15px",sm:"18px"},
                            }}>
                                Lorem Ipsum Dolores
                                20 TB of Storage
                                Life-time Support
                                Premium Add-Ons
                                Fastest Network
                                More Options
                            </Typography>
                        </Box>
                        <Button variant="outlined" sx={{
                            width: {lg:"70%",md:"90%"},
                            height: "7vh",
                            borderRadius: "5vh",
                            marginLeft:{lg:"0%",sm:"6%",xs:"0%",md:"0%"}
                        }}>Purchase This Plan Now</Button>
                        <CardMedia
                            component="img"
                            sx={{ width: { lg: 428, xs: 280 }, marginTop: {lg:"-30%",md:"-5%",xs:"-40%"},marginLeft:{lg:"-38%"}, borderRadius: "5vh",display:{xs:"none",lg:"flex",md:"flex"} }}
                            image={RR3}
                            alt="Live from space album cover"
                        />
                    </Item>
                </Grid>
            </Grid>
        </Box>

    )
}