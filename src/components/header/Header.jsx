import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import { LoadScript } from '@react-google-maps/api';
import useStyle from './styles';

const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = useStyle();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor Danish
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
           
          </Typography>
          <LoadScript googleMapsApiKey="71eb60fb84msha8b947542ee3cc6p196b19jsn43a5b2f1b9e1" 
          libraries={['places']}
          onLoad={onLoad}>
          </LoadScript>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
