import * as React from 'react';
import useStyles from './footer.styles';
import { Typography, Link } from '@material-ui/core';

interface IFooterProps {}

const Footer = (props: IFooterProps) => {
  const classes = useStyles();

  return (
    <footer className={classes.footerWrapper}>
      <Typography className={classes.footerLinkStyle}>
        // todo This tiny app was created By{' '}
        <Link target="_blank" href="https://github.com/SawickiKamil">
          Kamil Sawicki
        </Link>
      </Typography>
    </footer>
  );
};

export default Footer;
