import makeStyles from '@material-ui/styles/makeStyles';
import createStyles from '@material-ui/styles/createStyles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 900,
      width: '100%',
      marginBottom: 30,
      [theme.breakpoints.down('sm')]: {
        marginBottom: 30,
      },
    },
    listWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    listTitleStyle: {
      fontSize: 18,
      color: theme.customPalette.lightOrange,
      [theme.breakpoints.down('sm')]: {
        fontSize: 14,
      },
    },
    listItemWrapper: {
      marginTop: 3,
      display: 'flex',
      padding: '0 15px',
      borderRadius: 4,
      backgroundColor: theme.customPalette.lightTuna,
      marginRight: 3,
      [theme.breakpoints.down('sm')]: {
        padding: '0 10px',
      },
    },
    listItemText: {
      fontSize: 16,
      [theme.breakpoints.down('sm')]: {
        fontSize: 14,
      },
    },
    isFrontEndStyle: {
      color: theme.customPalette.green,
    },
    isNotFrontEndStyle: {
      color: theme.customPalette.lightYellow,
    },
    descriptionStyle: {
      fontSize: 16,
      color: theme.customPalette.lightBlue,
      [theme.breakpoints.down('sm')]: {
        fontSize: 14,
      },
    },
  })
);

export default useStyles;
