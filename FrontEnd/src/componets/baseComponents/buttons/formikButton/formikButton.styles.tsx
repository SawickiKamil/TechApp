import makeStyles from '@material-ui/styles/makeStyles';
import createStyles from '@material-ui/styles/createStyles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
