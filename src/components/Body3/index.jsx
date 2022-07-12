import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Service_Icon_01 from '../../assets/service-icon-01.png';
import Service_Icon_02 from '../../assets/service-icon-02.png';
import Service_Icon_03 from '../../assets/service-icon-03.png';
import Service_Icon_04 from '../../assets/service-icon-04.png';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Card_Four = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1, height: '57vh', mt:{xs:"40%",sm:"10%",md:"10%",lg:"5%"} }}>
                <Grid container spacing={2} columns={12}>
                    <Grid item xs={12} sm={12} md={3} lg={3} >
                        <Item
                            sx={{
                                boxShadow: '0px 0px 15px rgb(0 0 0 / 10%)',
                                borderTopRightRadius: '10vh',
                                borderTopLeftRadius: '1.5vh',
                                borderBottomLeftRadius: '1.5vh',
                                borderBottomRightRadius: '1.5vh',
                            }}>
                            <Card
                                sx={{
                                    maxWidth: 370,
                                    ml: { sm: '24%', md: '0', lg: '0' },
                                    boxShadow: 'none',
                                    borderTopRightRadius: '7vh',
                                }}>
                                <CardMedia
                                    component="img"
                                    height="50"
                                    image={Service_Icon_01}
                                    alt="green iguana"
                                    sx={{
                                        maxWidth: { xs: '17%', sm: '15%', md: '24%', lg: '20%' },
                                        ml: { xs: '75%', sm: '45%', md: '5%', lg: '5%' },
                                        mt: '10%',
                                    }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div"
                                        sx={{
                                            mt: '5%',
                                            textAlign: { xs: 'center', sm: 'center', md: 'left', lg: 'left' },
                                            fontWeight: 700
                                        }}>
                                        App Maintenance
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary"
                                        sx={{
                                            mt: '5%',
                                            textAlign: { xs: 'center', sm: 'center', md: 'left', lg: 'left' },
                                            fontWeight: 100,
                                            color: '#DBDBDB'
                                        }}>
                                        You are not allowed to redistribute this template ZIP file on any other website.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                <Button sx={{ ml: { xs: '38%', sm: '38%', md: '0', lg: '0' } }} size="small">
                                        Read More
                                        <ArrowForwardIcon sx={{ fontSize: 'small', mt: '-4%' }} />
                                    </Button>
                                </CardActions>
                            </Card>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Item
                            sx={{
                                boxShadow: '0px 0px 15px rgb(0 0 0 / 10%)',
                                borderTopRightRadius: '10vh',
                                borderTopLeftRadius: '1.5vh',
                                borderBottomLeftRadius: '1.5vh',
                                borderBottomRightRadius: '1.5vh'
                            }}>
                            <Card
                                sx={{
                                    maxWidth: 370,
                                    ml: { sm: '24%', md: '0', lg: '0' },
                                    boxShadow: 'none',
                                    borderTopRightRadius: '7vh'
                                }}>
                                <CardMedia
                                    component="img"
                                    height="50"
                                    image={Service_Icon_02}
                                    alt="green iguana"
                                    sx={{
                                        maxWidth: { xs: '17%', sm: '15%', md: '24%', lg: '20%' },
                                        ml: { xs: '75%', sm: '45%', md: '5%', lg: '5%' },
                                        mt: '10%'
                                    }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div"
                                        sx={{
                                            mt: '5%',
                                            textAlign: { xs: 'center', sm: 'center', md: 'left', lg: 'left' },
                                            fontWeight: 700,
                                            fontSize: '162%'
                                        }}>
                                        Rocket Speed of App
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary"
                                        sx={{
                                            mt: '5%',
                                            textAlign: { xs: 'center', sm: 'center', md: 'left', lg: 'left' },
                                            fontWeight: 100,
                                            color: '#DBDBDB'
                                        }}>
                                        You are not allowed to redistribute this template ZIP file on any other website.
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ mt: '8%' }}>
                                    <Button sx={{ ml: { xs: '38%', sm: '38%', md: '0', lg: '0' } }} size="small">
                                        Read More
                                        <ArrowForwardIcon sx={{ fontSize: 'small', mt: '-4%' }} />
                                    </Button>
                                </CardActions>
                            </Card>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Item
                            sx={{
                                boxShadow: '0px 0px 15px rgb(0 0 0 / 10%)',
                                borderTopRightRadius: '10vh',
                                borderTopLeftRadius: '1.5vh',
                                borderBottomLeftRadius: '1.5vh',
                                borderBottomRightRadius: '1.5vh'
                            }}>
                            <Card
                                sx={{
                                    maxWidth: 370,
                                    ml: { sm: '24%', md: '0', lg: '0' },
                                    boxShadow: 'none',
                                    borderTopRightRadius: '7vh'
                                }}>
                                <CardMedia
                                    component="img"
                                    height="50"
                                    image={Service_Icon_03}
                                    alt="green iguana"
                                    sx={{
                                        maxWidth: { xs: '17%', sm: '15%', md: '24%', lg: '20%' },
                                        ml: { xs: '75%', sm: '45%', md: '5%', lg: '5%' },
                                        mt: '10%'
                                    }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div"
                                        sx={{
                                            mt: '5%',
                                            textAlign: { xs: 'center', sm: 'center', md: 'left', lg: 'left' },
                                            fontWeight: 700
                                        }}>
                                        Multi Workflow Idea
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary"
                                        sx={{
                                            mt: '5%',
                                            textAlign: { xs: 'center', sm: 'center', md: 'left', lg: 'left' },
                                            fontWeight: 100,
                                            color: '#DBDBDB'
                                        }}>
                                        You are not allowed to redistribute this template ZIP file on any other website.
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ mt: '8%' }}>
                                    <Button sx={{ ml: { xs: '38%', sm: '38%', md: '0', lg: '0' } }} size="small">
                                        Read More
                                        <ArrowForwardIcon sx={{ fontSize: 'small', mt: '-4%' }} />
                                    </Button>
                                </CardActions>
                            </Card>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Item
                            sx={{
                                boxShadow: '0px 0px 15px rgb(0 0 0 / 10%)',
                                borderTopRightRadius: '10vh',
                                borderTopLeftRadius: '1.5vh',
                                borderBottomLeftRadius: '1.5vh',
                                borderBottomRightRadius: '1.5vh'
                            }}>
                            <Card
                                sx={{
                                    maxWidth: 370,
                                    ml: { sm: '24%', md: '0', lg: '0' },
                                    boxShadow: 'none',
                                    borderTopRightRadius: '7vh'
                                }}>
                                <CardMedia
                                    component="img"
                                    height="50"
                                    image={Service_Icon_04}
                                    alt="green iguana"
                                    sx={{
                                        maxWidth: { xs: '17%', sm: '15%', md: '24%', lg: '20%' },
                                        ml: { xs: '75%', sm: '45%', md: '5%', lg: '5%' },
                                        mt: '10%'
                                    }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div"
                                        sx={{
                                            mt: '5%',
                                            textAlign: { xs: 'center', sm: 'center', md: 'left', lg: 'left' },
                                            fontWeight: 700,
                                            fontSize: '170%'
                                        }}>
                                        24/7 Help & Support
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary"
                                        sx={{
                                            mt: '5%',
                                            textAlign: { xs: 'center', sm: 'center', md: 'left', lg: 'left' },
                                            fontWeight: 100,
                                            color: '#DBDBDB'
                                        }}>
                                        You are not allowed to redistribute this template ZIP file on any other website.
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ mt: '8%' }}>
                                    <Button sx={{ ml: { xs: '38%', sm: '30%', md: '0', lg: '0' } }} size="small">
                                        Read More
                                        <ArrowForwardIcon sx={{ fontSize: 'small', mt: '-4%' }} />
                                    </Button>
                                </CardActions>
                            </Card>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Card_Four;