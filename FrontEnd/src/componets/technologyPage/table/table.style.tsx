import makeStyles from '@material-ui/styles/makeStyles';
import createStyles from '@material-ui/styles/createStyles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tableWrapper: {
      display: 'flex',
      flexDirection: 'column-reverse',
      width: '100%',
      maxWidth: 900,
    },
  })
);

export default useStyles;
