import makeStyles from '@material-ui/styles/makeStyles';
import createStyles from '@material-ui/styles/createStyles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainWrapper: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.customPalette.graphiteBlack,
      minHeight: '100%',
      width: '100%',
    },
    headerWrapper: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100%',
      flex: '0 0 40px',
    },
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
    titleStyle: {
      color: theme.customPalette.darkGreen,
      display: 'flex',
      width: '100%',
      height: 90,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(30,30,30,.95)',
      [theme.breakpoints.down('sm')]: {
        fontSize: '40px !important',
        height: 80,
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 25,
        height: 60,
      },
    },
    sectionWrapper: {
      flex: '1 1 auto',
      padding: '20px 30px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    buttonWrapper: {
      margin: '30px 0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
  })
);

export default useStyles;
