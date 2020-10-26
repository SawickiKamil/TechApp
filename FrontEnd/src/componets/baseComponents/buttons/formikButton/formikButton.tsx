import * as React from 'react';
import useStyles from './formikButton.styles';
import { Button } from '@material-ui/core';

interface IFormikButtonProps {
  disabled: boolean;
}

export const FormikAddButton = ({ disabled }: IFormikButtonProps) => {
  const classes = useStyles();

  return (
    <Button className={classes.addNewButton} disabled={disabled} type="submit">
      Add
    </Button>
  );
};
