/** @format */

import React from 'react';
import Header from '../molecules/header';
import CardFull from '../molecules/card_full_width';
import Grid from '@material-ui/core/Grid';
import CardFlex from '../molecules/card_flex';

interface Props {
  onLogout: () => void;
  onLogIn: () => void;
  authenticate: boolean;
}

export default ({ onLogout, onLogIn, authenticate }: Props) => {
  const onLogoutOrIn = () => {
    if (authenticate) {
      onLogout();
      return;
    }
    onLogIn();
  };
  return (
    <>
      <Header
        avatar="https://img.favpng.com/12/15/21/computer-icons-avatar-user-profile-recommender-system-png-favpng-HaMDUPFH1etkLCdiFjgTKHzAs.jpg"
        user="Cephas"
        onLogoutOrIn={onLogoutOrIn}
        authenticate={authenticate}
      />
      <CardFull
        title="Spring Onions"
        description="Scallions are vegetables derived from various species in the genus Allium. Scallions have a milder taste than most onions."
        source="https://www.hellofreshuganda.com/wp-content/uploads/2020/04/spring-onionn.jpg"
      />
      <Grid item container>
        <Grid item xs={6}>
          <CardFlex
            title="Carrots"
            source="https://www.hellofreshuganda.com/wp-content/uploads/2019/06/carrots.jpg"
          />
        </Grid>
        <Grid item xs={6}>
          <CardFlex
            title="Sweat Potato"
            source="https://www.hellofreshuganda.com/wp-content/uploads/2019/06/sweet-potatos.jpg"
          />
        </Grid>
      </Grid>
      <CardFull
        title="Colored Pepper"
        description="The bell pepper is the fruit of plants in the Grossum cultivar group of the species Capsicum annuum. "
        source="https://www.hellofreshuganda.com/wp-content/uploads/2019/06/coloured-peper.jpg"
      />
    </>
  );
};
