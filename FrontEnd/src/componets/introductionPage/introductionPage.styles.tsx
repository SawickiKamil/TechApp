import makeStyles from '@material-ui/styles/makeStyles';
import createStyles from '@material-ui/styles/createStyles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    titleStyle: {
      display: 'table',
      color: theme.customPalette.lightPink,
      fontSize: 30,
      margin: '50px auto',
      [theme.breakpoints.down('md')]: {
        fontSize: 25,
        margin: '20px auto',
      },
    },
  })
);

export default useStyles;
