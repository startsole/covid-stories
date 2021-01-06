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
  title: 'Ms. Carlene',
  subtitle:
    'A View of Covid from the Inside',
  author: {
    photo: {
      src: '/covid-stories/images/photos/people/jack-smith.jpg',
      srcSet: '/covid-stories/images/photos/people/jack-smith@2x.jpg 2x',
    },
    name: 'Koby B',
    date: 'December 12, 2020',
  },
  cover: {
    src: '/covid-stories/images/photos/blog/ms-carlene/holding-hands.jpg',
    srcSet: '/covid-stories/images/photos/blog/ms-carlene/holding-hands.jpg 2x',
  }
};

const sidebarArticles = [
  {
    cover: {
      src: '/covid-stories/images/photos/blog/cover4.jpg',
      srcSet: '/covid-stories/images/photos/blog/cover4.jpg 2x',
    },
    title: "LARQ | World's First Self-cleaning Water Bottle‎",
    author: {
      photo: {
        src: '/covid-stories/images/photos/people/kate-segelson.jpg',
        srcSet: '/covid-stories/images/photos/people/kate-segelson@2x.jpg 2x',
      },
      name: 'Kate Segelson',
    },
    date: '04 Aug',
    tags: ['larq', 'bottle', 'shop', 'drinks', 'eco', 'self washing'],
  },
  {
    cover: {
      src: '/covid-stories/images/photos/blog/cover3.jpg',
      srcSet: '/covid-stories/images/photos/blog/cover3.jpg 2x',
    },
    title: 'NIKE Online Store launches the website‎',
    author: {
      photo: {
        src: '/covid-stories/images/photos/people/jack-smith.jpg',
        srcSet: '/covid-stories/images/photos/people/jack-smith@2x.jpg 2x',
      },
      name: 'Jack Smith',
    },
    date: '04 Aug',
    tags: ['nike', 'sport', 'shop', 'training'],
  },
  {
    cover: {
      src: '/covid-stories/images/photos/blog/cover2.jpg',
      srcSet: '/covid-stories/images/photos/blog/cover2.jpg 2x',
    },
    title: 'Adidas will release your favourite shoes',
    author: {
      photo: {
        src: '/covid-stories/images/photos/people/akachi-luccini.jpg',
        srcSet: '/covid-stories/images/photos/people/akachi-luccini@2x.jpg 2x',
      },
      name: 'Akachi Luccini',
    },
    date: '04 Aug',
    tags: ['adidas', 'sport', 'shop', 'training'],
  },
  {
    cover: {
      src: '/covid-stories/images/photos/blog/cover1.jpg',
      srcSet: '/covid-stories/images/photos/blog/cover1.jpg 2x',
    },
    title: 'Simple approach to Australian cafe',
    author: {
      photo: {
        src: '/covid-stories/images/photos/people/veronica-adams.jpg',
        srcSet: '/covid-stories/images/photos/people/veronica-adams@2x.jpg 2x',
      },
      name: 'Veronica Adams',
    },
    date: '04 Aug',
    tags: ['coffee', 'cups', 'morning coffee', 'breakfast'],
  },
];

const StoryMsCarlene = () => {
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
            {/*<Content data={content} />*/}

            {/*<div className={clsx(classes.root, className)} {...rest}>*/}
            <div className={classes.section}>
              <Typography component="p" variant="h6" color="textPrimary" gutterBottom={true}>
                There are many people who are scared of Covid-19. Millions around the world have it, are recovering from
                it, or are dying from it. Today, we are focusing on one person that lived to tell the tale of how she
                survived the pandemic of this generation. Her name is simply, Ms. Carlene.
              </Typography>
            </div>
            <div className={classes.section}>
              <Image
                src={'/covid-stories/images/photos/blog/ms-carlene/sycamore-springs.jpg'}
                srcSet={'/covid-stories/images/photos/blog/ms-carlene/sycamore-springs.jpg 2x'}
                className={classes.image}
                lazyProps={{width: '100%', height: '100%'}}
              />
            </div>
            <div className={classes.section}>
              <Typography component="p" variant="h6" color="textPrimary" gutterBottom={true}>
                The first thing I noticed as our video call with Ms. Carlene was beginning is how the staff at Sycamore
                Springs Assisted Living Center, the place where Ms. Carlene now calls home, handled things. I could see
                Jordan Bishop, the resident life coordinator, walking to Ms. Carlene's room, and an older man was in his
                doorway asking for lunch. Mr. Bishop jumped straight on it; making sure he got everything and relaying
                straight to someone over the radio to get it to him.
              </Typography>
            </div>
            {/*quote*/}
            <Box mt={6} mb={6}>
              <div className={classes.section}>
                <Typography component="p" variant="h4" color="primary" align="center" gutterBottom={true}>
                  "I can't run on the treadmill now because of this pandemic. I also can't see my daughter, she can only
                  come up to my window and talk."
                </Typography>
              </div>
            </Box>
            <div className={classes.section}>
              <Typography component="p" variant="h6" color="textPrimary" gutterBottom={true}>
                At the beginning of the pandemic, there were often problems with people not being able to keep in touch
                with their family members in these homes. Many extended care facilities across America have had issues
                with communication between their residents and their families. Some families never even knew their
                family members had Covid until they were already dead. Ms. Carlene says that Sycamore Springs did not
                have those issues. They battled the red tape to take care of their residents and make sure that they got
                the help they needed.
              </Typography>
            </div>
            <div className={classes.section}>
              <Typography component="p" variant="h6" color="textPrimary" gutterBottom={true}>
                I learned that Ms. Carlene used to be a teacher at Hunter Elementary School in Elizabethton, TN. She
                even taught my current high school principal, Jon Minton. “He was a great student,” she recalls. Ms.
                Carlene lives in the assisted living facility just 2 blocks from my school, Elizabethton High. Despite
                being over 90 years old, Ms. Carlene used to work out every day until the Covid pandemic swept over the
                assisted living center. “I can't run on the treadmill now because of this pandemic. I also can't see my
                daughter, she can only come up to my window and talk.”
              </Typography>
            </div>
            <div className={classes.section}>
              <GridList
                cellHeight={isMd ? 360 : 260}
                cols={2}
                spacing={isMd ? 24 : 8}
              >
                <GridListTile key={1} cols={isMd ? 1 : 2}>
                  <Image
                    src={'/covid-stories/images/photos/blog/ms-carlene/sycamore-springs-assisted-living.jpeg'}
                    srcSet={'/covid-stories/images/photos/blog/ms-carlene/sycamore-springs-assisted-living.jpeg 2x'}
                    className={classes.image}
                    lazyProps={{width: '100%', height: '100%'}}
                  />
                </GridListTile>
                <GridListTile key={2} cols={isMd ? 1 : 2}>
                  <Image
                    src={'/covid-stories/images/photos/blog/ms-carlene/sycamore-springs-bedroom.jpg'}
                    srcSet={'/covid-stories/images/photos/blog/ms-carlene/sycamore-springs-bedroom.jpg 2x'}
                    className={classes.image}
                    lazyProps={{width: '100%', height: '100%'}}
                  />
                </GridListTile>
              </GridList>
            </div>
            <div className={classes.section}>
              <Typography component="p" variant="h6" color="textPrimary" gutterBottom={true}>
                When Ms. Carlene contracted Covid and went to the hospital, she was in the Covid Unit at Johnson City
                Medical Center in Johnson City, TN for two weeks. She believes she got Covid because of her breathing
                problems. They hooked her up to many machines at the hospital to keep her healthy. The hospital was so
                full that they had to move people down into the basement, which is where she was. She says that despite
                being tucked away below ground, the staff was on top of everything. When she asked for anything, they
                got it for her.
              </Typography>
            </div>
            <div className={classes.section}>
              <Typography component="p" variant="h6" color="textPrimary" gutterBottom={true}>
                When she got back to Sycamore Springs, she felt just about back to normal, but she said her lungs are
                worse now because of Covid-19. They continue to keep the residents of Sycamore Springs safe when they
                talk to each other, by having them wear masks. She said that when it got bad the first time, they wore
                full protective suits. She said if it gets bad again, they would be ready to take full precautions,
                unlike the first wave.
              </Typography>
            </div>
            <div className={classes.section}>
              <Typography component="p" variant="h6" color="textPrimary" gutterBottom={true}>
                Ms. Carlene survived the deadliest pandemic in the last 100 years. She already had lung problems, but
                she fought through those issues and lived to tell me her story. Without these stories people would not
                know what many of the residents in extended care facilities, like Ms. Carlene, went through and the
                struggles they endured. She said that during the early days of the pandemic the residents were scared
                for their lives and never knew if they were going to see their family again. Happily, she did survive,
                and does get to see her daughter again...even if it has been almost a year, and she only gets to whisper
                at her through the window. She may have endured Covid-19, but the disease continues to plague her, and
                millions more, by separating her from the ones she loves. Despite her age, she shook off the disease in
                only a couple of weeks, but no one yet knows how long she will continue to be a victim of the pandemic.
              </Typography>
            </div>


            <div>
              <IconButton className={classes.socialIcon}>
                <FacebookIcon/>
              </IconButton>
              <IconButton className={classes.socialIcon}>
                <InstagramIcon/>
              </IconButton>
              <IconButton className={classes.socialIcon}>
                <TwitterIcon/>
              </IconButton>
              <IconButton className={classes.socialIcon}>
                <PinterestIcon/>
              </IconButton>
            </div>
            {/*</div>*/}


          </Grid>
          <Grid item xs={12} md={4}>
            <SidebarArticles data={sidebarArticles}/>
            <SidebarNewsletter className={classes.sidebarNewsletter}/>
          </Grid>
        </Grid>
      </Section>
      {/*<SectionAlternate className={classes.similarStoriesSection}>*/}
      {/*  <SimilarStories data={similarStories} />*/}
      {/*</SectionAlternate>*/}
      {/*<SectionAlternate className={classes.footerNewsletterSection}>*/}
      {/*  <FooterNewsletter />*/}
      {/*</SectionAlternate>*/}
    </div>
  );
};

export default StoryMsCarlene;
