import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  section: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: 0,
    },
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
  },
  cover: {
    marginLeft: theme.spacing(-2),
    marginRight: theme.spacing(-2),
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '47vw',
      maxWidth: 740,
      height: '100%',
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
    },
  },
  image: {
    width: '100%',
    height: 300,
    objectFit: 'cover',
    [theme.breakpoints.up('md')]: {
      maxWidth: '100%',
      height: '100%',
    },
  },
  content: {
    flex: '0 0 100%',
    maxWidth: '100%',
    [theme.breakpoints.up('md')]: {
      flex: '0 0 70%',
      maxWidth: '70%',
    },
  },
}));

const ContactPageCover = () => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <div className={classes.wrapper}>
          <div className={classes.cover}>
            <Image
              src="/images/photos/covers/cover-4.jpg"
              alt="Contact"
              className={classes.image}
            />
          </div>
          <div className={classes.content}>
            <SectionHeader
              title="Share your Story"
              subtitle="Tell your story and be a part of history"
              data-aos="fade-up"
              align="center"
            />
            <div className={classes.form}>
              <Grid container spacing={isMd ? 4 : 2}>
                <Grid item xs={12} data-aos="fade-up">
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    className={classes.inputTitle}
                  >
                    Full name
                  </Typography>
                  <TextField
                    placeholder="Your full name"
                    variant="outlined"
                    size="medium"
                    name="fullname"
                    fullWidth
                    type="text"
                  />
                </Grid>
                <Grid item xs={12} data-aos="fade-up">
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    className={classes.inputTitle}
                  >
                    E-mail
                  </Typography>
                  <TextField
                    placeholder="Your e-mail address"
                    variant="outlined"
                    size="medium"
                    name="email"
                    fullWidth
                    type="email"
                  />
                </Grid>
                <Grid item xs={12} data-aos="fade-up">
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    className={classes.inputTitle}
                  >
                    Your Story
                  </Typography>
                  <TextField
                    placeholder="Type or paste your story here"
                    variant="outlined"
                    name="message"
                    fullWidth
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item container justify="center" xs={12}>
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    size="large"
                    fullWidth
                  >
                    submit
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </Section>
      <Divider />
    </div>
  );
};

export default ContactPageCover;