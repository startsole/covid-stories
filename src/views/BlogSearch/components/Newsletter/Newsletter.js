import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  colors,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from '@material-ui/core';
import { Icon } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'url(/images/illustrations/circled-background.svg) no-repeat',
    backgroundSize: 'cover',
    borderRadius: theme.spacing(2),
  },
  textWhite: {
    color: 'white',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  formControl: {
    maxWidth: 400,
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
    '& .MuiInputBase-root': {
      color: 'white',
    },
    '& .MuiInputAdornment-root i': {
      color: 'white !important',
    },
  },
}));

const Newsletter = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Section>
        <SectionHeader
          title={
            <span className={classes.textWhite}>
              Want to Read More?  Subscribe!
            </span>
          }
          subtitle={
            <span className={classes.textWhite}>
              Add your email and we will send you a curated list of COVID stories each month - bringing you a unique perspective on this historic time.
            </span>
          }
          fadeUp
        />
        <div className={classes.inputContainer}>
          <FormControl
            fullWidth
            variant="outlined"
            data-aos="fade-up"
            className={classes.formControl}
          >
            <OutlinedInput
              className={classes.input}
              size="large"
              endAdornment={
                <InputAdornment position="end">
                  <Icon
                    fontIconClass="fas fa-paper-plane"
                    fontIconColor={colors.indigo[900]}
                  />
                </InputAdornment>
              }
              placeholder="Enter your email"
            />
          </FormControl>
        </div>
      </Section>
    </div>
  );
};

Newsletter.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Newsletter;
