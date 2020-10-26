import * as React from 'react';
import useStyles from './navigationButton.styles';
import { Button } from '@material-ui/core';

interface INavigationButtonProps {
  buttonText: string;
  onClick: () => void;
}

export const NavigationButton = ({
  buttonText,
  onClick,
}: INavigationButtonProps) => {
  const classes = useStyles();

  return (
    <div className={classes.buttonWrapper}>
      <Button onClick={onClick}>{buttonText}</Button>
    </div>
  );
};
