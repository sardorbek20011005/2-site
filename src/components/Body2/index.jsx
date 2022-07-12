import React from 'react';

import Services_Right_Dec from '../../assets/services-right-dec.png';
import Heading_Line_Dec from '../../assets/heading-line-dec.png';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Amazing = () => {
    return (
        <Container>
            <Box sx={{
                flexGrow: 1,
                mt: {xs:'61%',sm:"10%",md:"-25%",lg:"10%"},
                backgroundImage: `url(${Services_Right_Dec})`,
                backgroundRepeat: 'no-repeat',
                width: '84%',
                ml: '16%',
            }}>
                <Grid container spacing={2} columns={12}>
                    <Grid item xs={12}>
                        <Item sx={{ backgroundColor: 'transparent', boxShadow: 'none', textAlign: 'center' }}>
                            <Typography sx={{ ml: '-17%', fontSize: '225%', fontWeight: 700, color: 'black', mt: '8%' }}>
                                Amazing <b style={{ color: 'blue' }}>Services & Features</b> For You
                            </Typography>
                            <CardMedia sx={{ ml: '-17%', mt: '1%' }}>
                                <img src={Heading_Line_Dec} />
                            </CardMedia>
                            <Typography sx={{
                                maxWidth: { lg: '48%', md: '52.5%', sm: '77%', xs: '83%' },
                                ml: { lg: '18%', md: '15%', sm: '4%', xs: '1%' },
                                mt: { lg: '2%', md: '2%', sm: '2%', xs: '4%' },
                                fontWeight: '100',
                                color: '#DBDBDB'
                            }}>
                                If you need the greatest collection of HTML templates for your business, please visit <b style={{ color: 'blue' }}>TooCSS</b> Blog. If you need to have a contact form PHP script, go to <b style={{ color: 'blue' }}>our contact page</b> for more information.
                            </Typography>
                        </Item>
                    </Grid>
                </Grid>
            </Box >
        </Container>
    );
};

export default Amazing;