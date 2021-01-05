import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { SectionHeader, TypedText } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {},
  typed: {
    fontWeight: 'bold',
  },
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title={
          <>
            A place to share and discover
            <br />
            stories of
            <br />
            <TypedText
              component="span"
              variant="h2"
              color="secondary"
              className={classes.typed}
              typedProps={{
                strings: [
                  'hope',
                  'loss',
                  'sadness',
                  'joy',
                  'compassion',
                  'loneliness',
                  '... your experience',
                ],
                typeSpeed: 50,
                loop: true,
              }}
            />
          </>
        }
        subtitle="COVID Stories is a project to help students share their experiences this pandemic"
        align="center"
        titleProps={{
          variant: 'h2',
          color: 'textPrimary',
        }}
        subtitleProps={{
          color: 'textPrimary',
          variant: 'h5',
        }}
        ctaGroup={[
          <Button
            size="large"
            variant="contained"
            color="primary"
            component="a"
            target="blank"
            href="https://www.ecschools.net/1/Home"
          >
            Elizabethton High School
          </Button>,
          // <Button
          //   size="large"
          //   variant="outlined"
          //   color="primary"
          //   component="a"
          //   target="blank"
          //   href="https://thefront-styleguide.maccarianagency.com/"
          // >
          //   Documentation
          // </Button>,
        ]}
        data-aos="fade-up"
        disableGutter
      />
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
