import * as React from 'react';
import useStyles from './table.style';
import { Typography, Button } from '@material-ui/core';

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

  const handleDelete = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      onDelete(_id);
    },
    [onDelete, _id]
  );

  return (
    //TODO it has to be refactored .... change to one base component
    <div className={classes.rowWraper}>
      <div className={classes.leftContainer}>
        <Typography className={classes.leftContainerText}>
          Name of technology:
        </Typography>
        <Typography className={classes.leftContainerTextAnswer}>
          {name}
        </Typography>
        <Typography className={classes.leftContainerText}>
          Name of the programming language:
        </Typography>
        <Typography className={classes.leftContainerTextAnswer}>
          {language}
        </Typography>
        {description ? (
          <>
            <Typography className={classes.leftContainerText}>
              Description:
            </Typography>
            <Typography className={classes.leftContainerTextAnswer}>
              {description}
            </Typography>
          </>
        ) : (
          <Typography className={classes.leftContainerText}>
            User did not provide a description.
          </Typography>
        )}
        {initRelease ? (
          <>
            <Typography className={classes.leftContainerText}>
              The year of publishment:
            </Typography>
            <Typography className={classes.leftContainerTextAnswer}>
              {initRelease}
            </Typography>
          </>
        ) : (
          <Typography className={classes.leftContainerText}>
            Release date of the technology was not given {name}
          </Typography>
        )}
      </div>
      <Button onClick={handleDelete} className={classes.deleteButton}>
        Delete
      </Button>
    </div>
  );
};

export default Row;
