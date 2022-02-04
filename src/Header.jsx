import React from 'react';
import './Header.css';
import { Grid, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageIcon from '@mui/icons-material/Message';
import tinderImg from './assets/tinder-icon.png';

function Header() {
  return (
    <Grid
      container
      xs={12}
      sx={{ justifyContent: 'space-between', paddingTop: '1rem' }}
    >
      <Grid item>
        <IconButton>
          <AccountCircleIcon sx={{ fontSize: '35px' }} />
        </IconButton>
      </Grid>
      <Grid item sx={{ marginTop: '0.7rem' }}>
        <img src={tinderImg} height={35} width={35} />
      </Grid>
      <Grid item>
        <IconButton>
          <MessageIcon sx={{ fontSize: '35px' }} />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default Header;
