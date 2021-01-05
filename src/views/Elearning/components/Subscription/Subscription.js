import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Button } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { CardBase } from 'components/organisms';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Subscription = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <CardBase withShadow data-aos="fade-up">
        <SectionHeader
          title="Subscribe To Our Newsletter"
          subtitle="Don't lose a chance to be among the firsts to know about our upcoming news and updates."
          fadeUp
        />
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} sm={9}>
            <TextField
              size="small"
              fullWidth
              label="Email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button fullWidth variant="contained" color="primary" size="large">
              subscribe
            </Button>
          </Grid>
        </Grid>
      </CardBase>
    </div>
  );
};

Subscription.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Subscription;