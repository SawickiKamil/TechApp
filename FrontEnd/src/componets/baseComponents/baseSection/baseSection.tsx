import * as React from 'react';
import useStyles from './baseSection.styles';
import { Typography, Link, Button } from '@material-ui/core';

interface IBaseSectionProps {
  title: string;
  buttonText: string;
  onClick: () => void;
}

const BaseSection: React.FC<IBaseSectionProps> = ({
  title,
  children,
  onClick,
  buttonText,
}) => {
  const classes = useStyles();

  return (
    <main className={classes.mainWrapper}>
      <header className={classes.headerWrapper}>
        <Typography variant="h1" className={classes.titleStyle}>
          {title}
        </Typography>
      </header>
      //TODO
      <section className={classes.sectionWrapper}>{children}</section>
      <div className={classes.buttonWrapper}>
        <Button onClick={onClick}>{buttonText}</Button>
      </div>
      <footer className={classes.footerWrapper}>
        <Typography className={classes.footerLinkStyle}>
          // todo This tiny app was created By{' '}
          <Link target="_blank" href="https://github.com/SawickiKamil">
            Kamil Sawicki
          </Link>
        </Typography>
      </footer>
    </main>
  );
};

export default BaseSection;
