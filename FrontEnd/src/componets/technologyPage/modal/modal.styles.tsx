import makeStyles from '@material-ui/styles/makeStyles';
import createStyles from '@material-ui/styles/createStyles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modalButtonStyle: {
      width: '100%',
      height: 70,
      borderRadius: 3,
      border: `solid 2px ${theme.customPalette.lightPink}`,
      boxShadow:
        '0 16px 27px -10px rgba(0, 0, 0, 0.79), 0 0 24px 0 rgba(255, 180, 141, 0.23)',
      backgroundColor: 'transparent',
      textTransform: 'capitalize',
      marginBottom: 20,
      color: theme.customPalette.lightPink,
      fontSize: 18,
      [theme.breakpoints.up('sm')]: {
        width: 450,
        height: 80,
        marginBottom: 30,
      },
      '&:hover': {
        opacity: 0.8,
        textDecoration: 'none',
        transition: 'all .4s ease',
      },
    },
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
    textFieldsWrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0 10px',
    },
    textFieldStyle: {
      width: '100%',
      marginTop: '20',
    },
    addNewButton: {
      marginTop: 30,
      backgroundColor: theme.customPalette.green,
      borderRadius: 0,
      color: theme.customPalette.white,
      fontWeight: 'bold',
      '&:hover': {
        backgroundColor: theme.customPalette.lightBlue,
      },
    },
  })
);

export default useStyles;
