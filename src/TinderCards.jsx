import { Grid } from '@mui/material';
import React, { useState } from 'react';
import duaImg from './assets/dua.PNG';
import brunoImg from './assets/bruno.PNG';
import selenaImg from './assets/selena.PNG';
import davidImg from './assets/degea.PNG';
import { styled } from '@mui/system';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

const TinderCardContainer = styled(Grid)(({ theme }) => ({
  justifyContent: 'center',
  display: 'flex',
  marginTop: '10vh',
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
      name: 'Bruno Miguel Borges Fernandes',
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
    <Grid
      container
      xs={12}
      sx={{ justifyContent: 'center', marginTop: '2rem' }}
    >
      <TinderCardContainer item xs={5}>
        {people.map((person) => {
          //console.log(person.name);
          return (
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
                  backgroundImage: `url(${person.picture})`,
                }}
              >
                <h3
                  style={{
                    color: 'silver',
                    position: 'absolute',
                    margin: '10px',
                    bottom: '0',
                  }}
                >
                  {person.name}
                </h3>
              </div>
            </TinderCard>
          );
        })}
      </TinderCardContainer>
    </Grid>
  );
};

export default TinderCards;
