import makeStyles from '@material-ui/styles/makeStyles';
import createStyles from '@material-ui/styles/createStyles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dialogWrapper: {
      backgroundColor: theme.customPalette.lightTuna,
      display: 'flex',
      flexDirection: 'column',
    },
    dialogTitleStyle: {
      padding: 20,
      margin: '0 30px',
      fontWeight: 'bold',
      fontSize: 22,
      textAlign: 'center',
      color: theme.customPalette.white,
      [theme.breakpoints.down('sm')]: {
        padding: 10,
        fontSize: 18,
      },
    },
  })
);

export default useStyles;
