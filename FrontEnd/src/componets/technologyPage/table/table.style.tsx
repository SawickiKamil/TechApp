import makeStyles from '@material-ui/styles/makeStyles';
import createStyles from '@material-ui/styles/createStyles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rowWraper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      marginBottom: 10,
      marginTop: 10,
    },
    leftContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginRight: 30,
    },
    leftContainerText: {
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
    leftContainerTextAnswer: {
      color: theme.customPalette.lightOrange,
      marginLeft: 3,
      fontSize: 18,
      marginBottom: 2,
      [theme.breakpoints.down('sm')]: {
        fontSize: 14,
        lineHeight: 1,
      },
    },
    tableWrapper: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      maxWidth: 900,
    },
    deleteButton: {
      width: 200,
      backgroundColor: theme.customPalette.red,
      '&:hover': {
        backgroundColor: theme.customPalette.darkRed,
        transition: 'all .4s ease',
      },
      [theme.breakpoints.down('sm')]: {
        width: 100,
        fontSize: 16,
      },
    },
  })
);

export default useStyles;
