import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.confirmed)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              CONFIRMED
            </Typography>
            <Typography className="my-3" variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration="5"
                separator=","
              />
            </Typography>
            <Typography variant="body2">
              Number of active cases as of
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              RECOVERED
            </Typography>
            <Typography className="my-3" variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration="5"
                separator=","
              />
            </Typography>
            <Typography variant="body2">
              Number of recovered cases as of
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              DEATHS
            </Typography>
            <Typography className="my-3" variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration="5"
                separator=","
              />
            </Typography>
            <Typography variant="body2">Number of deaths as of</Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
