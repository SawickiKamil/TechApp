import * as React from 'react';
import useStyles from './baseSection.styles';
import { Button } from '@material-ui/core';
import Footer from '../footer';
import Header from './header';

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
    <div className={classes.mainWrapper}>
      <Header title={title} />
      <section className={classes.sectionWrapper}>{children}</section>
      <div className={classes.buttonWrapper}>
        <Button onClick={onClick}>{buttonText}</Button>
      </div>
      <Footer />
    </div>
  );
};

export default BaseSection;
