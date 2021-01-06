import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { HeroShaped } from 'components/organisms';

const useStyles = makeStyles(() => ({
  root: {},
  image: {
    objectFit: 'cover',
  },
  fontWeight700: {
    fontWeight: 700,
  },
}));

const AboutProject = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <HeroShaped
        leftSide={
          <div>
            <SectionHeader
              title={
                <span>
                  <span className="text-highlighted__primary">
                    Join In...
                  </span>{' '}
                  Share your Story!
                </span>
              }
              subtitle="We'd love to see your story! We've provided all the documents you need to help run your own COVID Stories unit, check the link below. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              ctaGroup={[
                <Button variant="contained" color="primary" size="large" target={"_blank"} href={"https://drive.google.com/drive/folders/1ddIkHdkORbvb11LR2rpyXmKTo6tg83bh?usp=sharing"}>
                  Download Materials
                </Button>,
              ]}
              align="left"
              titleVariant="h3"
            />
          </div>
        }
        rightSide={
          <Image
            src="/covid-stories/images/photos/about/alex-campbell.jpg"
            srcSet="/covid-stories/images/photos/about/alex-campbell.jpg 2x"
            alt="..."
            className={classes.image}
            lazyProps={{
              width: '100%',
              height: '100%',
            }}
          />
        }
      />
    </div>
  );
};

AboutProject.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default AboutProject;
