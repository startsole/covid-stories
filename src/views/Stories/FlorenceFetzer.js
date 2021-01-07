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
  title: 'Florence Fetzer',
  subtitle:
    'What Has Been and What Is Yet to Come',
  author: {
    photo: {
      src: '/covid-stories/images/photos/people/veronica-adams.jpg',
      srcSet: '/covid-stories/images/photos/people/veronica-adams@2x.jpg 2x',
    },
    name: 'Morgan',
    date: 'December 12, 2020',
  },
  cover: {
    src: '/covid-stories/images/photos/blog/color1.png',
    srcSet: '/covid-stories/images/photos/blog/color1.png 2x',
  }
};

const sidebarArticles = [
  {
    cover: {
      src: '/covid-stories/images/photos/blog/ms-carlene/holding-hands.jpg',
      srcSet: '/covid-stories/images/photos/blog/ms-carlene/holding-hands.jpg 2x',
    },
    title: "Ms. Carlene",
    author: {
      photo: {
        src: '/covid-stories/images/photos/people/jack-smith.jpg',
        srcSet: '/covid-stories/images/photos/people/jack-smith@2x.jpg 2x',
      },
      name: 'Kody',
    },
    date: '12 Dec',
    tags: ['COVID', 'elderly', 'sample', 'dummy', 'etc', 'something'],
    url: '#ms-carlene'
  },
  {
    cover: {
      src: '/covid-stories/images/photos/blog/color3.png',
      srcSet: '/covid-stories/images/photos/blog/color3.jpg 2x',
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
  },
  {
    cover: {
      src: '/covid-stories/images/photos/blog/color4.png',
      srcSet: '/covid-stories/images/photos/blog/color4.png 2x',
    },
    title: 'Ciara White',
    author: {
      photo: {
        src: '/covid-stories/images/photos/people/jack-smith.jpg',
        srcSet: '/covid-stories/images/photos/people/jack-smith@2x.jpg 2x',
      },
      name: 'Elijah',
    },
    date: '04 Aug',
    url: '#ciara-white',
    tags: ['coffee', 'cups', 'morning coffee', 'breakfast'],
  },
];

const StoryFlorenceFetzer = () => {
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
                COVID 19 is an infectious disease caused by the most recently discovered Coronavirus that silently crept onto American shores possibly as early as the end of 2019. Since the initial wave of the virus, nursing homes and assisted care facilities have become the epicenter of mortality with the numbers of deaths in each facility rising by the minute. In some states, the percent of deaths from the virus that come from people in long-term care facilities is over 50%.
              </Typography>
            </div>
            <div className={classes.section}>
                          <Typography component="p" variant="h6" color="textPrimary" gutterBottom={true}>
                            It is often hard to understand how COVID-19 affects these most vulnerable, because of the imposition of strict limitations on visitation and their reduced ability for their voices to be heard in the larger community. If you do not have elderly or high-risk members in your family, you may never see or understand the full seriousness of the situation. In an effort to help the world understand the impact of this awful virus, I chose to interview a woman who had not only contracted COVID-19, but did something that very few her age have been able to do…she survived.
                          </Typography>
            </div>
            <div className={classes.section}>
                          <Typography component="p" variant="h6" color="textPrimary" gutterBottom={true}>
                            COVID-19 symptoms can have an incubation period of up to two weeks. This disease causes respiratory illness and various other symptoms which can often vary by person but include coughing, intense headaches, fever, difficulty breathing, fever, digestive ailments, weakness, and so many more. About 16 percent of those who contract COVID-19 become seriously ill. The elusive nature of this virus has made it extremely difficult for people to know how to properly contain it. As a result, the virus has now spread like wildfire, and much of that early devastation was felt in extended care facilities.
                          </Typography>
            </div>
            <div className={classes.section}>
                          <Typography component="p" variant="h6" color="textPrimary" gutterBottom={true}>
                            Ms. Florence Fetzer met up with history long before anyone heard of the coronavirus.  Fetzer was one of the first females to become an official member of the US Army during WWII, worked with counter-intelligence, had a job in the pentagon, and met several presidents, and later worked as a teacher. If you ask about her work even today, she will say that it is, “classified” while flashing a mischievous smile. Despite her advanced age, she has a sharp mind, at least that is what I hear before my interview. Unfortunately, I would find out that the devastation of this disease goes far beyond the immediate physical effects.
                          </Typography>
            </div>
            <div className={classes.section}>
                          <Typography component="p" variant="h6" color="textPrimary" gutterBottom={true}>
                            Because of Fetzer’s epic past, she had conducted many interviews in the past with sharp detail. However, since Covid-19, her mind seems to have deteriorated. "I feel like I don't know what's going on around me” she lamented. She went on to opine, “I guess for a woman born in 1919, every day is a blessing.” Some of those words cut me in two, as I almost felt guilty for reigniting these thoughts in her. “I feel like I've done something I wasn't supposed to do” she iterated.
                          </Typography>
            </div>
            <div className={classes.section}>
              <Typography component="p" variant="h6" color="textPrimary" gutterBottom={true}>
                Fetzer used to reside at Sycamore Springs Assisted Living Facility in Elizabethton, TN. When she got Covid-19, she was moved to the Veterans Administration hospital in Johnson City, TN. After coming through this disease with very light symptoms, she was left a little too weak to return to Sycamore Springs. She was transferred to an extended care facility where they could work more with her physical rehab to hopefully get her strong enough to return to her previous living arrangement.
              </Typography>
            </div>

            {/*quote*/}
            <Box mt={6} mb={6}>
              <div className={classes.section}>
                <Typography component="p" variant="h4" color="primary" align="center" gutterBottom={true}>
                  "I feel like I don't know what's going on around me... I guess for a woman born in 1919, every day is a blessing."
                </Typography>
              </div>
            </Box>

            <div className={classes.section}>
              <Typography component="p" variant="h6" color="textPrimary" gutterBottom={true}>
                Some may feel that going from the freedom of an assisted living center to the more restrictive nursing home arrangement may have made things more difficult for Fetzer, but that is not the case. “I have a roommate in here. I feel like I've got an ally," said Ms. Fetzer. It seems that not having her own private room, which many who can afford actually prefer, turned into a positive for Fetzer after the isolation of the Covid unit stay at the hospital. Fetzer indicated that her roommate had been a huge help and just having someone to talk to was such an encouragement.
              </Typography>
            </div>
            <div className={classes.section}>
              <Typography component="p" variant="h6" color="textPrimary" gutterBottom={true}>
                Unfortunately, there were several questions that Fetzer could not answer. It seems the disease, although leaving her with little physical damage, had caused her issues with memory and comprehension. We are just now learning that many Covid-19 survivors are experiencing similar post-Covid symptoms. Despite these struggles, she does have her lucid moments. She remembered that people with Covid had to bath at separate times from the rest of the patients in the hospital because of fear of transmission. She was often the last one to bath and would not be taken down for a shower until the wee hours of the morning. She said she remembered dragging her gown tails, oxygen hose, and various tubes and leads through everyone else’s shower water residue just so she could be kept clean.
              </Typography>
            </div>
            <div className={classes.section}>
              <Typography component="p" variant="h6" color="textPrimary" gutterBottom={true}>
                After interviewing Fetzer, I have come to understand just how seriously this pandemic should be taken. There has been so much suffering caused by this outbreak even for the healthiest of people with the loss of lives and loved one. But for the elderly, especially those in extended care facilities, the implications have been monumental. Even for those who escaped the worst physical effects of the disease, there will be other ramifications. We have not even begun to understand the lasting effects of the disease such as the possible decrease in mental acuity. How the side effects of the disease manifest once we are out of the worst of the pandemic are yet to be seen, however, I did get a small peak at the looming crisis through this interview.
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

export default StoryFlorenceFetzer;
