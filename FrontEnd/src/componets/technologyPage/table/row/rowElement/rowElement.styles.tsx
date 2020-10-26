import makeStyles from '@material-ui/styles/makeStyles';
import createStyles from '@material-ui/styles/createStyles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textWrapper: {
      display: 'flex',
      alignItems: 'center',
    },
    text: {
      display: 'flex',
      alignItems: 'center',
      color: theme.customPalette.lightBlue,
      fontSize: 18,
      marginBottom: 2,
      [theme.breakpoints.down('sm')]: {
        fontSize: 14,
        lineHeight: 1,
      },
    },
    answer: {
      color: theme.customPalette.lightOrange,
      marginLeft: 3,
      fontSize: 18,
      marginBottom: 2,
      [theme.breakpoints.down('sm')]: {
        fontSize: 14,
        lineHeight: 1,
      },
    },
  })
);

export default useStyles;
