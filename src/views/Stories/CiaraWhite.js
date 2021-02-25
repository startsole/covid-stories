import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {colors, Grid, GridList, GridListTile, IconButton, Typography, useMediaQuery} from '@material-ui/core';
import Section from "../../components/organisms/Section";
import SidebarArticles from "../BlogArticle/components/SidebarArticles";
import SidebarNewsletter from "../BlogArticle/components/SidebarNewsletter/SidebarNewsletter";
import Hero from "../BlogArticle/components/Hero";
import {Image} from "../../components/atoms";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  sidebarNewsletter: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
    },
  },
  footerNewsletterSection: {
    background: theme.palette.primary.main,
  },
  section: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4),
    },
  },
  image: {
    objectFit: 'cover',
    borderRadius: theme.spacing(1),
  },
  socialIcon: {
    borderRadius: 0,
    marginRight: theme.spacing(2),
    color: theme.palette.text.primary,
    background: colors.grey[200],
    '&:last-child': {
      marginRight: 0,
    },
  },
}));

const content = {
  title: 'Ciara White',
  subtitle:
    'Growing Up in the Age of Covid-19',
  author: {
    photo: {
      src: '/covid-stories/images/photos/people/veronica-adams.jpg',
      srcSet: '/covid-stories/images/photos/people/veronica-adams@2x.jpg 2x',
    },
    name: 'Elijah',
    date: 'December 12, 2020',
  },
  cover: {
    src: '/covid-stories/images/photos/blog/ciara/ciara4.png',
    srcSet: '/covid-stories/images/photos/blog/ciara/ciara4.png 2x',
  }
};

const sidebarArticles = [
  {
    cover: {
      src: '/covid-stories/images/photos/blog/ms-carlene/carlene-4.jpg',
      srcSet: '/covid-stories/images/photos/blog/ms-carlene/carlene-4.jpg 2x',
    },
    title: "Ms. Carlene",
    author: {
      photo: {
        src: '/covid-stories/images/photos/blog/ms-carlene/carlene-4.jpg',
        srcSet: '/covid-stories/images/photos/blog/ms-carlene/carlene-4.jpg 2x',
      },
      name: 'Kody',
    },
    date: '12 Dec',
    tags: ['COVID', 'elderly', 'sample', 'dummy', 'etc', 'something'],
    url: '#ms-carlene'
  },
  {
    cover: {
      src: '/covid-stories/images/photos/blog/florence-fetzer/florence-3.png',
      srcSet: '/covid-stories/images/photos/blog/florence-fetzer/florence-3.png 2x',
    },
    title: 'Florence Fetzer',
    author: {
      photo: {
        src: '/covid-stories/images/photos/people/veronica-adams.jpg',
        srcSet: '/covid-stories/images/photos/people/veronica-adams@2x.jpg 2x',
      },
      name: 'Morgan',
    },
    date: '12 Dec',
    url: '#florence-fetzer',
    tags: ['nike', 'sport', 'shop', 'training'],
  },
  {
    cover: {
      src: '/covid-stories/images/photos/blog/daniel-lewis/daniel-lewis-2.png',
      srcSet: '/covid-stories/images/photos/blog/daniel-lewis/daniel-lewis-2.png 2x',
    },
    title: 'Danny Lewis',
    author: {
      photo: {
        src: '/covid-stories/images/photos/people/akachi-luccini.jpg',
        srcSet: '/covid-stories/images/photos/people/akachi-luccini@2x.jpg 2x',
      },
      name: 'Kaitlyn',
    },
    date: '12 Dec',
    url: '#danny-lewis',
    tags: ['adidas', 'sport', 'shop', 'training'],
  }
];

const StoryCiaraWhite = () => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={classes.root}>
      <Hero
        cover={content.cover}
        title={content.title}
        subtitle={content.subtitle}
        author={content.author}
      />
      <Section>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>

            <div className={classes.section}>
              <Typography component="p" variant="h6" color="textPrimary" gutterBottom={true}>
                Age 19 is when you break free from your parents’ rules. You go to college and you hang out with friends all night, oversleep for class, cram for tests, maybe even fail a class. You are supposed to go on Spring Break and do really irresponsible things that you can tell your kids not to do one day down the road. Ciara White, shattered all expectations when she went to work at Johnson City Pediatrics in Johnson City, TN last year. At 19, she is the youngest employee at the practice but handles all they throw at her in stride. White is an East Tennessee State University psychology & criminal justice major who is different from her peers; she doesn’t go out and party or spend nights hanging out with friends into early morning hours. She works nearly full-time hours in a premiere pediatricians’ office where she is a patient service representative. White is the voice that parents hear when they call worried about their own kids. What they don’t know is that she was just recently considered a child herself and COVID-19 forced to grow up and face harsh and terrifying realities far too quickly. Instead, she soothes parents’ worries and helps them navigate their children’s health concerns in this current pandemic environment.
              </Typography>
            </div>
            <div className={classes.section}>
              <Image
                src={'/covid-stories/images/photos/blog/ciara/ciara1.png'}
                srcSet={'/covid-stories/images/photos/blog/ciara/ciara1.png 2x'}
                className={classes.image}
                lazyProps={{width: '100%', height: '100%'}}
              />
              <Typography component="p" variant="caption" color="textPrimary" gutterBottom={true}>
                Johnson City, TN
              </Typography>
            </div>
            <div className={classes.section}>
              <Typography component="p" variant="h6" color="textPrimary" gutterBottom={true}>
                According to White, Johnson City Pediatrics (JCP) is a 6 doctor practice that is part of State of Franklin Healthcare Associates, a 16 clinic healthcare system serving Carter, Washington, Sullivan, and Greene counties in rural northeast TN. She started with JCP in September of 2019. She quickly picked up on policies and procedures in the clinic. White’s job includes answering incoming calls, checking in/out patients, patient triage, scheduling, scanning and indexing into the medical records system, and filtering prescription requests. Soon after getting a grasp of her job, COVID-19 hit the Tri-Cities and her clinic was locked down and many employees were furloughed. White says, “Many things have changed since the beginning of the Covid-19 pandemic. Most people at the office were laid off until the beginning of August and some did not even return then. My office laid off 10 people. All we had left was 2 people working up front, one in referrals, four nurses, and of course six doctors. So, we had a huge cut of employees very fast.”
              </Typography>
            </div>
            <div className={classes.section}>
              <Typography component="p" variant="h6" color="textPrimary" gutterBottom={true}>
                COVID was scary enough but to be an essential healthcare worker added a lot of extra stress. White notes that protocols changed often and that it was chaos with the changing recommendations from the Center for Disease Control. She adds that the current practices were as follows: “We no longer have patients/parents in our waiting rooms and our doors are locked due to social distancing. Well visits are scheduled in the morning and afternoon appointments are for sick visits. We used to see all children in office, aside from emergencies, but if they or anyone in the house has had symptoms or contact with a COVID positive person, they are either sent to hospital or given a telehealth appointment.”
              </Typography>
            </div>
            <div className={classes.section}>
              <Typography component="p" variant="h6" color="textPrimary" gutterBottom={true}>
                Parents get a pre-appointment call where they answer about symptoms of members of household, if there has been any contact with COVID cases, if anyone in house has a pending test, and the most frustrating part is reminding them they do not allow admittance into office and to call upon arrival to check in. “Many do not answer the pre-visit calls, so they get angry and beat on the locked doors yelling at us from outside leading to a lot of angry parents.”
              </Typography>
            </div>
            <div className={classes.section}>
              <Typography component="p" variant="h6" color="textPrimary" gutterBottom={true}>
                “Parents are all over the spectrum during this pandemic. They range from terrified to enraged and everything in between” she says. There is a mix of refusal to come in even for well visits and parents who have very sick, likely COVID positive children demanding to come in. Ciara indicates that JCP does COVID testing but usually they do telehealth and they have testing in the drive-through tent set up in the parking lot. There have been much COVID exposures in the office as doctors also make rounds on hospital patients and newborns; staff members have also seen exposure through patients, at home, or even a parent that tested positive. When exposed, quarantines leave them off work anywhere from 10-24 days depending on circumstances.
              </Typography>
            </div>
            <div className={classes.section}>
              <GridList
                cellHeight={isMd ? 360 : 260}
                cols={2}
                spacing={isMd ? 24 : 8}
              >

                <GridListTile key={1} cols={isMd ? 1 : 2}>
                  <div>
                    <Image
                      src={'/covid-stories/images/photos/blog/ciara/ciara3.png'}
                      srcSet={'/covid-stories/images/photos/blog/ciara/ciara3.png 2x'}
                      className={classes.image}
                      lazyProps={{width: '100%', height: '100%'}}
                    />
                    <Typography component="p" variant="caption" color="textPrimary" gutterBottom={true}>
                      East Tennessee State University
                    </Typography>
                  </div>
                </GridListTile>
                <GridListTile key={2} cols={isMd ? 1 : 2}>
                  <Image
                    src={'/covid-stories/images/photos/blog/ciara/ciara2.png'}
                    srcSet={'/covid-stories/images/photos/blog/ciara/ciara2.png 2x'}
                    className={classes.image}
                    lazyProps={{width: '100%', height: '100%'}}
                  />
                  <Typography component="p" variant="caption" color="textPrimary" gutterBottom={true}>
                    Outside of Johnson City Pediatrics
                  </Typography>
                </GridListTile>
              </GridList>
            </div>
            <div className={classes.section}>
              <Typography component="p" variant="h6" color="textPrimary" gutterBottom={true}>
                As many offices saw, White describes the personal protective equipment shortage in early spring. She notes her mask was caked with makeup and smelled like old coffee mixed with Funyuns. Masks, gloves, gowns, and cleaners weren’t available from the suppliers. Now, they are all able to wear clean masks, fresh gloves, use hand sanitizer freely, and now they even have face shields, goggles, and N95 masks. JCP has set a priority to be prepared should the need come again so they can keep their staff and patients safe at all times.
              </Typography>
            </div>

            {/*quote*/}
            <Box mt={6} mb={6}>
              <div className={classes.section}>
                <Typography component="p" variant="h4" color="primary" align="center" gutterBottom={true}>
                  "Being a young adult in healthcare during a pandemic made me grow up really fast. While my friends are out going to the beach for fall break, I am still taking my shoes off on the back porch and placing my clothes directly into the washer before I go inside the house. Furthermore, it has shown me so much about the psychology that surrounds pandemic and the isolation involved. I appreciate that JCP has allowed me to learn and grow here."
                </Typography>
              </div>
            </Box>

            <div className={classes.section}>
              <Typography component="p" variant="h6" color="textPrimary" gutterBottom={true}>
                Pediatrics is a controversial topic when it comes to COVID. Can children spread the disease, and are they even going to feel sick? When discussing pediatrics compared to adult COVID, she says, “To be honest, children are kind of gross. Children want to touch everything; they cannot keep their hands to themselves. It is just very hard for children to understand what is happening. COVID protocols are hard for everyone but they are so much harder for children.” She surprisingly adds that what she sees is that children are far more compliant with masks than adults as a whole.
              </Typography>
            </div>
            <div className={classes.section}>
              <Typography component="p" variant="h6" color="textPrimary" gutterBottom={true}>
                This is an emotional, scary, and incredibly uncertain time for the entire world. White says, “Being a young adult in healthcare during a pandemic made me grow up really fast. While my friends are out going to the beach for fall break, I am still taking my shoes off on the back porch and placing my clothes directly into the washer before I go inside the house. Furthermore, it has shown me so much about the psychology that surrounds pandemic and the isolation involved. I appreciate that JCP has allowed me to learn and grow here.” Nothing could have forced her to grow up as fast as this pandemic.
              </Typography>
            </div>

            {/*<div>*/}
            {/*  <IconButton className={classes.socialIcon}>*/}
            {/*    <FacebookIcon/>*/}
            {/*  </IconButton>*/}
            {/*  <IconButton className={classes.socialIcon}>*/}
            {/*    <InstagramIcon/>*/}
            {/*  </IconButton>*/}
            {/*  <IconButton className={classes.socialIcon}>*/}
            {/*    <TwitterIcon/>*/}
            {/*  </IconButton>*/}
            {/*  <IconButton className={classes.socialIcon}>*/}
            {/*    <PinterestIcon/>*/}
            {/*  </IconButton>*/}
            {/*</div>*/}

          </Grid>
          <Grid item xs={12} md={4}>
            <SidebarArticles data={sidebarArticles}/>
            {/*<SidebarNewsletter className={classes.sidebarNewsletter}/>*/}
          </Grid>
        </Grid>
      </Section>
    </div>
  );
};

export default StoryCiaraWhite;
