import * as React from 'react';
import useStyles from './baseSection.styles';

import Footer from '../footer';
import Header from './header';
import { NavigationButton } from '../buttons';

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
      <NavigationButton onClick={onClick} buttonText={buttonText} />
      <Footer />
    </div>
  );
};

export default BaseSection;
