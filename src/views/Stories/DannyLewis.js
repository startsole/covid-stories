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
  title: 'Danny Lewis',
  subtitle:
    'A Doctor’s Perspective On Surviving Covid-19',
  author: {
    photo: {
      src: '/covid-stories/images/photos/people/veronica-adams.jpg',
      srcSet: '/covid-stories/images/photos/people/veronica-adams@2x.jpg 2x',
    },
    name: 'Kaitlyn',
    date: 'December 12, 2020',
  },
  cover: {
    src: '/covid-stories/images/photos/blog/daniel-lewis/daniel-lewis-3.png',
    srcSet: '/covid-stories/images/photos/blog/daniel-lewis/daniel-lewis-3.png 2x',
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

const StoryDannyLewis = () => {
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
                Imagine being stuck in a claustrophobic hospital room for six weeks with no communication with the
                outside world...even your family. You are relying on a ventilator for your every breath. Sadly, during
                the Covid-19 Pandemic, this reality happens all too often. It does not matter your age, sex, race, or
                bank account. It doesn't even matter if you are a hospital administrator; it spares no one. Not even a
                popular small town hospital administrator from Greeneville, TN named Daniel Lewis.
              </Typography>
            </div>
            <div className={classes.section}>
              <Typography component="p" variant="h6" color="textPrimary" gutterBottom={true}>
                Dr. Lewis is a family medicine specialist in Greeneville, TN. He is affiliated with Greeneville Community Hospital West and has been in practice for about twenty years. Dr. Lewis contracted Covid-19 from a meeting with other doctors and administrators. As they made plans to help the community with the raging pandemic, he did not imagine that he would be the first patients to be the beneficiary of their work. He was the first case of Covid-19 in Greene County, TN. I interviewed Dr. Lewis on November 23, 2020 to get his story of irony, hope, and perseverance.
              </Typography>
            </div>
            <div className={classes.section}>
              <Typography component="p" variant="h6" color="textPrimary" gutterBottom={true}>
                Coronavirus attacks your lungs and makes it hard to breathe, so I asked Dr. Lewis his first thoughts when he went into the hospital with telltale symptoms. He recalled, “I was aware that I was feeling more short of breath, I was having more trouble taking a deep breath, and I noticed that my pulse, my heart rate was increasing also.” As Covid-19 settles in your lungs, it causes breathing to be short and in some cases patients are placed on a ventilator. Another observation Dr. Lewis mentioned during his hospital stay was that “at one point my lungs just felt like they were just kind of locked up and I couldn’t expand them completely.” It was at this point that Dr. Lewis received scary news, he would need to be placed on a ventilator to survive.
              </Typography>
            </div>
            <div className={classes.section}>
              <Typography component="p" variant="h6" color="textPrimary" gutterBottom={true}>
                Dr. Lewis was on a ventilator for ten days and besides the physical trauma, it gave him mental and emotional scars too. When you are placed on a ventilator, Dr. Lewis revealed “they give you medicine while you're on the machine to sedate you, so you're not necessarily awake fighting the ventilator, and it gave me memories that didn’t even happen.” But that wasn’t the hardest part, Dr. Lewis revealed. He was also away from his family for over six weeks, and it was the hardest part for him.
              </Typography>
            </div>
            <div className={classes.section}>
              <Typography component="p" variant="h6" color="textPrimary" gutterBottom={true}>
                Covid-19 spreads through the air from person to person so the nurses and doctors have to be dressed in Personal Protective Equipment (PPE).  Dr. Lewis stated “hospital gown, shoe covers, gloves, N95 mask with surgical mask then a face shield on top was the PPE they wore every time they came in my room.” With Dr. Lewis being a physician himself, he knew all too well the decisions his health care professionals were making and why they were doing so. Despite his knowledge, there was only one time Dr. Lewis told the hospital staff to do something different for his treatment. He stated, “The only time I put my foot down was when they replaced my NG tube with another tube that went down my stomach to the small intestine and the nurse was trying to put it up my nose and push it down my stomach when it curled up, she was twisting it and it wasn’t fun.” I noticed his tone became more serious as the painful memory came creeping back.
              </Typography>
            </div>
            <div className={classes.section}>
              <Typography component="p" variant="h6" color="textPrimary" gutterBottom={true}>
                Dr. Lewis recalls that after he got off the ventilator (one of the few that did), his struggle was far from over. He was sent to a special rehab hospital for a week. He stated “if they asked me to walk fifty feet, I would want to walk one hundred feet. Dr. Lewis put in every effort into doing his physical therapy so he could get stronger faster so he could return home to his family. I noticed how relieved he sounded from being over the physical therapy, but also I could hear how motivated he was to get home to his wife and 5 children.
              </Typography>
            </div>

            {/*quote*/}
            <Box mt={6} mb={6}>
              <div className={classes.section}>
                <Typography component="p" variant="h4" color="primary" align="center" gutterBottom={true}>
                  "They give you medicine while you're on the machine to sedate you, so you're not necessarily awake fighting the ventilator, and it gave me memories that didn’t even happen."
                </Typography>
              </div>
            </Box>

            <div className={classes.section}>
              <Typography component="p" variant="h6" color="textPrimary" gutterBottom={true}>
                Possibly the cruelest symptom of Covid-19 for its survivors is that it robs them of their friends and family for so long. Covid-19 continues to separate families just as it did with Dr. Lewis. One of his final comments was “no one was allowed to visit me, so being isolated from my family for nearly 6 weeks was the most difficult part for me.” Before he was stricken, he had already been self-quarantining himself from his family by living in a makeshift basement apartment and getting no closer to his wife and children than an “air hug” from the lawn to the front porch. The separation at the hospital and rehab facility was the final insult. I could hear in his voice how hard it was for him to be away from his family for six weeks.
              </Typography>
            </div>
            <div className={classes.section}>
              <Typography component="p" variant="h6" color="textPrimary" gutterBottom={true}>
                There was one piece of technology that really helped Dr. Lewis endure the isolation of the hospital and rehab facility. He was able to use technology to communicate with family and nurses. Dr. Lewis feels that, “Utilizing new technologies like Zoom meetings and iPads, patients can connect to nurses and doctors in their rooms.”
              </Typography>
            </div>
            <div className={classes.section}>
              <Typography component="p" variant="h6" color="textPrimary" gutterBottom={true}>
                After interviewing Dr. Lewis, I see that he cares for his patients very much and always does what is best to care for their needs. He would never have expected that he would need that same kind of care and dedication from others to help him survive. Dr. Lewis now relates to his patients better because of his own experience with the Covid-19. Just as the disease helped him be a better doctor for his patients, he feels it has helped him be a better husband and father for his family. He said not seeing his wife and kids for six weeks was the hardest part. It was the six long weeks when Dr. Lewis was fighting for his life. Despite how terrible his ordeal was, he also realizes how very lucky he is to be alive
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

export default StoryDannyLewis;
