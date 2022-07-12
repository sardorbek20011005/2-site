import React from 'react';

import Footer_Bg from '../../assets/footer-bg.png';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Footer = () => {

    return (
        <Box sx={{ width: "100%", mt: '10%', ml:{xs:"2%",sm:"1%",md:"0.7%"} }}>
            <CardMedia
                sx={{
                    boxShadow: 'none',
                    backgroundImage:` url(${Footer_Bg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: 'transparent',
                }}>
                <Container>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2} columns={12}>
                            <Grid sx={{ mt: { xs: '30%', sm: '45%', md: '30%', lg: '20%' } }} item xs={12}>
                                <Item
                                    sx={{
                                        boxShadow: 'none',
                                        backgroundColor: 'transparent',
                                        color: 'white',
                                        color: { xs: 'black', sm: 'white', md: 'white', lg: 'white' },
                                        
                                    }}>
                                    <Typography sx={{ fontSize: '200%', fontWeight:'bold' }}>
                                        Join Our Mailing List To Receive The
                                    </Typography>
                                    <Typography sx={{ fontSize: '200%',fontWeight:'bold' }}>
                                        News & Latest Trends
                                    </Typography>
                                </Item>
                            </Grid>
                            <Container>
                                <Container>
                                    <Box sx={{ml:{lg:'27%',md:'20%'}}}>
                                    <Grid container spacing={2} columns={12} sx={{ display: 'flex', mt: '2%' }}>
                                        <Grid item xs={12} sm={6} md={5} lg={4}>
                                            <Item
                                                sx={{
                                                    boxShadow: 'none',
                                                    backgroundColor: 'transparent',
                                                }}>
                                                <Stack spacing={1}>
                                                    <Autocomplete
                                                        sx={{ color: 'white' }}
                                                        id="clear-on-escape"
                                                        clearOnEscape
                                                        renderInput={(params) => (
                                                            <TextField {...params} label="Email Address..." variant="standard" />
                                                        )}
                                                    />
                                                </Stack>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={5} lg={4}>
                                            <Item
                                                sx={{
                                                    boxShadow: 'none',
                                                    backgroundColor: 'transparent',
                                                }}>
                                                <Button
                                                    sx={{
                                                        border: '1px solid white',
                                                        borderRadius: '50px',
                                                        backgroundColor: 'transparent',
                                                        width: '90%'
                                                    }} variant="contained" disableElevation>
                                                    Subscribe Now
                                                </Button>
                                            </Item>
                                        </Grid>
                                    </Grid>
                                    </Box>
                                </Container>
                            </Container>
                        </Grid>
                        <Box sx={{ width: '100%' }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={12} sm={12} md={3} lg={3}>
                                    <Item
                                        sx={{
                                            boxShadow: 'none',
                                            backgroundColor: 'transparent',
                                            color: 'white',
                                            textAlign: { xs: 'center', sm: 'left', md: 'left', lg: 'left' }
                                        }}>
                                        <Typography sx={{ fontSize: '150%', fontWeight: 700, mt: '15%' }}>
                                            <b>Contact Us</b>
                                        </Typography>
                                        <Typography sx={{ fontSize: '100%', mt: { xs: '7%', sm: '3%', md: '4%', lg: '5%' } }}>
                                            Rio de Janeiro - RJ, 22795-008, Brazil
                                        </Typography>
                                        <Typography sx={{ mt: { xs: '7%', sm: '3%', md: '4%', lg: '5%' } }}>
                                            010-020-0340
                                        </Typography>
                                        <Typography sx={{ mt: { xs: '7%', sm: '3%', md: '4%', lg: '5%' } }}>
                                            info@company.co
                                        </Typography>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} sm={2} md={1.5} lg={1.5}>
                                    <Item
                                        sx={{
                                            boxShadow: 'none',
                                            backgroundColor: 'transparent',
                                            color: 'white',
                                            textAlign: { xs: 'center', sm: 'left', md: 'left', lg: 'left' }
                                        }}>
                                        <Typography sx={{ fontSize: '150%', fontWeight: 700, mt: { xs: '10%', sm: '10%', md: '35%', lg: '35%' } }}>
                                            <b>About Us</b>
                                        </Typography>
                                        <Typography sx={{ fontSize: '100%', mt: { xs: '8%', sm: '3%', md: '4%', lg: '5%' } }}>
                                            Home
                                        </Typography>
                                        <Typography sx={{ mt: { xs: '5%', sm: '3%', md: '4%', lg: '5%' } }}>
                                            Services
                                        </Typography>
                                        <Typography sx={{ mt: { xs: '5%', sm: '3%', md: '4%', lg: '5%' } }}>
                                            About
                                        </Typography>
                                        <Typography sx={{ mt: { xs: '5%', sm: '3%', md: '4%', lg: '5%' } }}>
                                            Testimonialis
                                        </Typography>
                                        <Typography sx={{ mt: { xs: '5%', sm: '3%', md: '4%', lg: '5%' } }}>
                                            Pricing
                                        </Typography>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} sm={10} md={1.5} lg={1.5}>
                                    <Item
                                        sx={{
                                            boxShadow: 'none',
                                            backgroundColor: 'transparent',
                                            color: 'white',
                                            textAlign: { xs: 'center', sm: 'left', md: 'left', lg: 'left' }
                                        }}>
                                        <Typography sx={{ fontSize: '150%', fontWeight: 700, mt: { xs: '5%', sm: '13%', md: '110%', lg: '68%' } }}>
                                        </Typography>
                                        <Typography sx={{ mt: { xs: '5%', sm: '3%', md: '4%', lg: '5%' } }}>
                                            About
                                        </Typography>
                                        <Typography sx={{ mt: { xs: '5%', sm: '3%', md: '4%', lg: '5%' } }}>
                                            Testimonialis
                                        </Typography>
                                        <Typography sx={{ mt: { xs: '5%', sm: '3%', md: '4%', lg: '5%' } }}>
                                            Pricing
                                        </Typography>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} sm={2} md={1.5} lg={1.5}>
                                    <Item
                                        sx={{
                                            boxShadow: 'none',
                                            backgroundColor: 'transparent',
                                            color: 'white',
                                            textAlign: { xs: 'center', sm: 'left', md: 'left', lg: 'left' }
                                        }}>
                                        <Typography sx={{ fontSize: '150%', fontWeight: 700, mt: { xs: '10%', sm: '10%', md: '35%', lg: '35%' } }}>
                                            <b>Useful Links</b>
                                        </Typography>
                                        <Typography sx={{ fontSize: '100%', mt: { xs: '7%', sm: '3%', md: '4%', lg: '5%' } }}>
                                            Home
                                        </Typography>
                                        <Typography sx={{ mt: { xs: '7%', sm: '3%', md: '4%', lg: '5%' } }}>
                                            Services
                                        </Typography>
                                        <Typography sx={{ mt: { xs: '7%', sm: '3%', md: '4%', lg: '5%' } }}>
                                            About
                                        </Typography>
                                        <Typography sx={{ mt: { xs: '7%', sm: '3%', md: '4%', lg: '5%' } }}>
                                            Testimonialis
                                        </Typography>
                                        <Typography sx={{ mt: { xs: '7%', sm: '3%', md: '4%', lg: '5%' } }}>
                                            Pricing
                                        </Typography>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} sm={10} md={1.5} lg={1.5}>
                                    <Item
                                        sx={{
                                            boxShadow: 'none',
                                            backgroundColor: 'transparent',
                                            color: 'white',
                                            textAlign: { xs: 'center', sm: 'left', md: 'left', lg: 'left' }
                                        }}>
                                        <Typography sx={{ fontSize: '150%', fontWeight: 700, mt: { xs: '5%', sm: '13%', md: '110%', lg: '68%' } }}>
                                        </Typography>
                                        <Typography sx={{ mt: { xs: '7%', sm: '3%', md: '4%', lg: '5%' } }}>
                                            About
                                        </Typography>
                                        <Typography sx={{ mt: { xs: '7%', sm: '3%', md: '4%', lg: '5%' } }}>
                                            Testimonialis
                                        </Typography>
                                        <Typography sx={{ mt: { xs: '7%', sm: '3%', md: '4%', lg: '5%' } }}>
                                            Pricing
                                        </Typography>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}>
                                    <Item
                                        sx={{
                                            boxShadow: 'none',
                                            backgroundColor: 'transparent',
                                            color: 'white',
                                            textAlign: { xs: 'center', sm: 'left', md: 'left', lg: 'left' }
                                        }}>
                                        <Typography sx={{ fontSize: '150%', fontWeight: 700, mt: { xs: '10%', sm: '5%', md: '13%', lg: '15%' } }}>
                                            <b>About Our Company</b>
                                        </Typography>
                                        <Typography sx={{ fontSize: '100%', mt: { xs: '7%', sm: '3%', md: '4%', lg: '5%' } }}>
                                            Lorem ipsum dolor sit amet,
                                        </Typography>
                                        <Typography sx={{ mt: { xs: '7%', sm: '3%', md: '4%', lg: '5%' } }}>
                                            consectetur adipiscing elit, sed do
                                        </Typography>
                                        <Typography sx={{ mt: { xs: '7%', sm: '3%', md: '4%', lg: '5%' } }}>
                                            eiusmod tempor incididunt ut labore et
                                        </Typography>
                                    </Item>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box>
                            <Grid sx={{ mt: { xs: '0%', sm: '5%', md: '5%', lg: '5%' },  }} item xs={12}>
                                <Item
                                    sx={{
                                        boxShadow: 'none',
                                        backgroundColor: 'transparent',
                                        color: 'white',
                                        
                                    }}>
                                    <Typography sx={{ fontSize: '100%' }}>
                                        Copyright © 2022 Chain App Dev Company. All Rights Reserved.
                                    </Typography>
                                    <Typography sx={{ fontSize: '100%' }}>
                                        Design: TemplateMo
                                    </Typography>
                                </Item>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </CardMedia>
        </Box>
    );
};

export default Footer;