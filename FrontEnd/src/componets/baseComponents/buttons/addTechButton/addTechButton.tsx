import * as React from 'react';
import useStyles from './addTechButton.styles';
import { Button } from '@material-ui/core';

interface IAddTechButtonProps {
  handleClickOpen: () => void;
}

export const AddTechButton = ({ handleClickOpen }: IAddTechButtonProps) => {
  const classes = useStyles();

  return (
    <Button className={classes.modalButtonStyle} onClick={handleClickOpen}>
      Add new technology
    </Button>
  );
};
