import makeStyles from '@material-ui/styles/makeStyles';
import createStyles from '@material-ui/styles/createStyles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      flex: '0 0 90px',
      [theme.breakpoints.down('xs')]: {
        flex: '0 0 60px',
      },
    },

    titleStyle: {
      color: theme.customPalette.darkGreen,
      backgroundColor: 'rgba(30,30,30)',
      [theme.breakpoints.down('sm')]: {
        fontSize: '40px !important',
      },
    },
  })
);

export default useStyles;
