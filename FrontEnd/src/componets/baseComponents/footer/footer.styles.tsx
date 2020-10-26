import makeStyles from '@material-ui/styles/makeStyles';
import createStyles from '@material-ui/styles/createStyles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footerWrapper: {
      display: 'flex',
      flex: '0 0 40px',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(30,30,30,.95)',
    },
    footerLinkStyle: {
      color: theme.customPalette.todoOrange,
      fontSize: 14,
      [theme.breakpoints.down('sm')]: {
        fontSize: 11,
      },
    },
  })
);

export default useStyles;
