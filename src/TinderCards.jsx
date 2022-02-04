import { Grid } from '@mui/material';
import React, { useState } from 'react';
import duaImg from './assets/dua.PNG';
import brunoImg from './assets/bruno.PNG';
import selenaImg from './assets/selena.PNG';
import davidImg from './assets/degea.PNG';

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'David De Gea',
      picture: davidImg,
    },
    {
      name: 'Selena Gomez',
      picture: selenaImg,
    },
    {
      name: 'Bruno Fernandes',
      picture: brunoImg,
    },
    {
      name: 'Dua Lipa',
      picture: duaImg,
    },
  ]);
  return <Grid container xs={12}></Grid>;
}

export default TinderCards;
