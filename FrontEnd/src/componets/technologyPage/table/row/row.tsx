import * as React from 'react';
import useStyles from './row.styles';
import { Button } from '@material-ui/core';
import RowElement from './rowElement';
import { DeleteButton } from '../../../baseComponents/buttons';

interface IRowProps {
  _id: string;
  name: string;
  language: string;
  description?: string;
  initRelease?: number;
  onDelete: (item: string) => void;
}

const Row = ({
  _id,
  name,
  language,
  description,
  initRelease,
  onDelete,
}: IRowProps) => {
  const classes = useStyles();

  return (
    <div className={classes.rowWraper}>
      <div className={classes.leftContainer}>
        <RowElement text="Name of technology:" answer={name} />
        <RowElement
          text="Name of the programming language:"
          answer={language}
        />
        <RowElement
          text="Description:"
          answer={description}
          isAnswer={description}
          response="User did not provide a description."
        />
        <RowElement
          text="The year of publishment:"
          answer={initRelease}
          isAnswer={initRelease}
          response={`Release date of the technology was not given for ${name}`}
        />
      </div>
      <DeleteButton onDelete={onDelete} _id={_id} />
    </div>
  );
};

export default Row;
