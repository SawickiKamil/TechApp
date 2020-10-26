import * as React from 'react';
import useStyles from './rowElement.styles';
import { Typography } from '@material-ui/core';

interface IRowElementProps {
  text?: string;
  answer?: string | number;
  response?: string;
  isAnswer?: number | string;
}

const RowElement = ({ text, answer, isAnswer, response }: IRowElementProps) => {
  const classes = useStyles();

  return (
    <div className={classes.textWrapper}>
      {isAnswer !== '' && isAnswer !== null ? (
        <>
          <Typography className={classes.text}>{text}</Typography>
          <Typography className={classes.answer}>{answer}</Typography>
        </>
      ) : (
        <Typography className={classes.text}>{response}</Typography>
      )}
    </div>
  );
};

export default RowElement;
