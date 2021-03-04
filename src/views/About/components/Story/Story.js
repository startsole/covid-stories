import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {useMediaQuery, Grid, Typography, Button, GridList, GridListTile} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {},
  image: {
    maxWidth: 420,
  },
  photo: {
    objectFit: 'cover',
    borderRadius: theme.spacing(1),
  },
  section: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4),
    },
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
              title="Who I Am"
              subtitle="My name is Alex Campbell, and I have been a teacher for 20 years here in the rural mountain of Northeast Tennessee. I have always had a desire to use projects in my classroom, but I often was not aware of the resources available to me to really do it well. I struggled along, finding my way for many years. I did many things wrong, but I learned from each experience. Eventually I found some fellow educators and online resources that really helped me learn how to be a better project-based teacher."
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
              Just when I thought I had figured it all out, the Covid pandemic hit and turned everything on its head. I was given a totally remote group of 44 learners in 9th grade who were in our world history course. I had to rethink what I knew about not just PBL but teaching in general while trying to understand this new online dynamic and teaching myself how to master new educational technology.
            </Typography>
            <Typography
              variant={'body1'}
              align={'left'}
              color={'textPrimary'}
              className="section-header__subtitle"
              gutterBottom={true}
            >
              I remember thinking how hard it was not having a first day to meet all of my students, interacting with them, having side conversations, learning their unique personalities, etc. I wondered if I could even complete a project with these students under these circumstances. I became resolute that I would find a way to involve my students in an amazing project, despite these new challenges.
            </Typography>
            <Typography
              variant={'body1'}
              align={'left'}
              color={'textPrimary'}
              className="section-header__subtitle"
              gutterBottom={true}
            >
              By looking through my teacher resources, you can see there were many parts to the project. Every student started, but with total transparency, not all students completed the final deliverable. This really frustrated me at first as I saw some students lagging. It was difficult for me to come to terms with this, because I wanted that personal connection of in-person learning so I could keep them on track and help all be 100% successful.
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
          // justify={isMd ? 'flex-end' : 'flex-start'}
          justify='center'
          alignItems="center"
          xs={12}
          data-aos={'fade-up'}
        >
          <Image
            src="/covid-stories/images/illustrations/team-project.svg"
            alt="Project Based Learning"
            className={classes.image}
          />
        </Grid>

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
              title="My Changing Paradigm"
              subtitle="I eventually took solace in knowing that every student was being exposed to more than just virtual worksheets and multiple-choice quizzes. Even the ones who did not complete the project with me still had the opportunity to learn new technology, meet virtually with residents of assisted living facilities, learn from one of the best educators in America through virtual meetings, participate in a remote workshop with an NPR reporter, get a historical perspective on pandemics, develop interview skills, learn about local people and their struggles with Covid, and many more."
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
              I hear people say that education is not all about one culminating experience, but the process. That was difficult for me to digest, as I was so focused on the final product of the profile piece. However, I saw one of the students from the class who participated in many of the activities but was not able to deliver his final product. He told me my class was the one he looked forward to, and I was his favorite teacher. I wondered how this could be when he had never met in person and didn’t even complete what I felt was an amazing project that I planned.
            </Typography>
            <Typography
              variant={'body1'}
              align={'left'}
              color={'textPrimary'}
              className="section-header__subtitle"
              gutterBottom={true}
            >
              It finally dawned on me that students can still learn and enjoy learning while developing many of the skills incorporated into the project even if the student did not complete all of the work. Through our interactions during this class project, the student previously mentioned got to know enough about me as a teacher and person to say that I was his favorite. He took something from the class that made him decide it was his best one of the semester.
            </Typography>
          </div>
        </Grid>


        <div className={classes.section}>
          <GridList
            cellHeight={isMd ? 360 : 260}
            cols={2}
            spacing={isMd ? 24 : 8}
          >

            <GridListTile key={1} cols={isMd ? 1 : 2}>
              <div>
                <Image
                  src={'/covid-stories/images/photos/about/alex-campbell-1.png'}
                  srcSet={'/covid-stories/images/photos/about/alex-campbell-1.png 2x'}
                  className={classes.photo}
                  lazyProps={{width: '100%', height: '100%'}}
                />
              </div>
            </GridListTile>
            <GridListTile key={2} cols={isMd ? 1 : 2}>
              <Image
                src={'/covid-stories/images/photos/about/alex-campbell-2.png'}
                srcSet={'/covid-stories/images/photos/about/alex-campbell-2.png 2x'}
                className={classes.photo}
                lazyProps={{width: '100%', height: '100%'}}
              />
            </GridListTile>
          </GridList>
        </div>




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
              title="Moving Forward"
              subtitle="I hope the resources provided here help make this project easier for teacher to be confident in implementing a project even during difficult times. As teachers are being forced to learn on the fly, maybe these resources collected into one place can save teachers time and energy. The groundwork laid here should help educators feel more confident that good things can happen, even if they are not perfect. I want to remind you that you need to not focus solely on the end product but also the journey of each student and how you can help them develop as learners and people during times that have been often been more difficult for our students than us adults. I feel the technological resources here can also help teachers and they transition over to more online platforms and digital learning through remote or blended educational environments. Remember teacher, you are not in this alone. We are all figuring this out no matter where we are on this journey."
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
              Finally, I realize that the work of my students did not end with the conclusion of the semester. Now I see the work of my students as something larger. The few stories they were able to publish should be seen only as a seed. I am excited to see others come along side and find their own inspiring stories during what has, in many ways, been a very tragic time in the world. Nothing would bring me more joy that to see the embryonic work of my students grow into something so much bigger that helps students all over the country, and even world, develop these essential skills while preserving these experiences for posterity.
            </Typography>
          </div>
        </Grid>

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
