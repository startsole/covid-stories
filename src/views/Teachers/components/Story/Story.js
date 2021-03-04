import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {useMediaQuery, Grid, Typography, Button} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(() => ({
  root: {},
  image: {
    maxWidth: 420,
  },
}));

const Story = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid
        container
        justify="space-between"
        spacing={isMd ? 4 : 2}
        direction={isMd ? 'row' : 'column-reverse'}
      >
        <Grid
          item
          container
          alignItems="center"
          justify="flex-start"
          xs={12}
          // md={6}
          data-aos={'fade-up'}
        >
          <div>
            <SectionHeader
              title="For Teachers"
              subtitle="I am committed to project-based learning not because it is trendy, I heard a presentation at a conference, or I read a book about it once. I dedicate myself to teaching through projects, because I feel it is the best way to learn for my students. Like many commitments during Covid-19, my pledge to this style of teaching was challenged. Remote learning tested the limits of my knowledge, the patience of my students, and the electronic capacities of the outdated infrastructures through which we taught. Through it all, I had to live up to my beliefs."
              align="left"
              disableGutter
              subtitleProps={{
                color: 'textPrimary',
                variant: 'body1',
              }}
            />
            <Typography
              variant={'body1'}
              align={'left'}
              color={'textPrimary'}
              className="section-header__subtitle"
              gutterBottom={true}
            >
              I decided to continue my efforts to use meaningful projects to engage my students by incorporating the community to provide real value to history. I embarked with a few intrepid totally remote learners on a journey, and not even I fully appreciated the difficulty. Everything I knew about teaching through projects was more difficult than I could ever have expected.
            </Typography>
            <Typography
              variant={'body1'}
              align={'left'}
              color={'textPrimary'}
              className="section-header__subtitle"
              gutterBottom={true}
            >
              The parts of this style of teaching that I am normally efficient at like communicating expectations, exciting my students about the project, and organizing community members to help were made more difficult than I ever could have imagined. The elements that students often were very successful at were also extremely trying. They would organize a virtual meeting to conduct their interviews with the aid of technology, only to have technology fail them. They would decide on a person to interview, research their lives, and create questions, but when it was time to interview, the person’s life had become so complicated by events surrounding the pandemic that they no longer were willing to complete the interview.
            </Typography>
            <Typography
              variant={'body1'}
              align={'left'}
              color={'textPrimary'}
              className="section-header__subtitle"
              gutterBottom={true}
            >
              Through it all, I learned so much, but what I will always take with me is the gratifying feeling after the project was completed. Usually, the harder you have to work for something, the more satisfying it is when you accomplish the goal. This project was no different. I looked back on the exasperating and frustrating times of the project, and it just made me appreciate the accomplishments more. Not every student was able to achieve complete success, but those who did showed incredible resilience, organization, and technological acumen.
            </Typography>
            <Typography
              variant={'body1'}
              align={'left'}
              color={'textPrimary'}
              className="section-header__subtitle"
              gutterBottom={true}
            >
              What is more, these students were able to preserve a piece of history for posterity. They captured  stories of those who had been impacted by Covid-19, not decades from now, but as they were still living with under the shadow of the virus. During the most difficult of educational times, when many threw up their hands in defeat, these students were able to add real value to the historical body of knowledge.
            </Typography>
            <Typography
              variant={'body1'}
              align={'left'}
              color={'textPrimary'}
              className="section-header__subtitle"
              gutterBottom={true}
            >
              The stories that my students completed are just the beginning. Everyone has been impacted by this disease, and their stories add to the historical understanding of these times. I hope others will come with me on this journey to catalogue these life events by helping their own students with a similar project. There would be nothing more satisfying than to see my students’ successes, despite the struggles, act as a seed that grows into something even greater. I can’t promise the road will be easy, but I can promise that many of those bumps along the way will fade as you consider the monumental work that your students are able to accomplish.
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          data-aos={'fade-up'}
          >
          <Button variant="contained" color="primary" size="large" target={"_blank"} href={"https://drive.google.com/drive/folders/1ddIkHdkORbvb11LR2rpyXmKTo6tg83bh?usp=sharing"}>
            Download Lesson Materials
          </Button>
        </Grid>
        {/*<Grid*/}
        {/*  item*/}
        {/*  container*/}
        {/*  justify={isMd ? 'flex-end' : 'flex-start'}*/}
        {/*  alignItems="center"*/}
        {/*  xs={12}*/}
        {/*  md={6}*/}
        {/*  data-aos={'fade-up'}*/}
        {/*>*/}
        {/*  <Image*/}
        {/*    src="/images/illustrations/team-project.svg"*/}
        {/*    alt="Project Based Learning"*/}
        {/*    className={classes.image}*/}
        {/*  />*/}
        {/*</Grid>*/}
      </Grid>
    </div>
  );
};

Story.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Story;
