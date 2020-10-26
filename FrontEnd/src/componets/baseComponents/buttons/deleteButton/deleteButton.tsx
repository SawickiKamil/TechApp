import * as React from 'react';
import useStyles from './deleteButton.styles';
import { Button } from '@material-ui/core';

interface IDeleteButtonProps {
  onDelete: (item: string) => void;
  _id: string;
}

export const DeleteButton = ({ onDelete, _id }: IDeleteButtonProps) => {
  const classes = useStyles();

  const handleDelete = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      onDelete(_id);
    },
    [onDelete, _id]
  );

  return (
    <Button onClick={handleDelete} className={classes.deleteButton}>
      Delete
    </Button>
  );
};
