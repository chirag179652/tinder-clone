import { Grid } from '@mui/material';
import React, { useState } from 'react';
import duaImg from './assets/dua.PNG';
import brunoImg from './assets/bruno.PNG';
import selenaImg from './assets/selena.PNG';
import davidImg from './assets/degea.PNG';
import { styled } from '@mui/system';
import TinderCard from 'react-tinder-card';

const TinderCardContainer = styled(Grid)(({ theme }) => ({
  justifyContent: 'center',
}));

const TinderCards = () => {
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

  const swiped = (direction, nameToDelete) => {
    console.log(' removing', nameToDelete);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name, 'left the screen');
  };
  return (
    <Grid container xs={12} sx={{ justifyContent: 'center' }}>
      <TinderCardContainer item xs={5}>
        {people.map((person) => {
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              className="card"
              style={{
                backgroundImage: `url(${person.picuture})`,
              }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>;
        })}
      </TinderCardContainer>
    </Grid>
  );
};

export default TinderCards;
