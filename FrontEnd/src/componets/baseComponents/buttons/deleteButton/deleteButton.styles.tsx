import makeStyles from '@material-ui/styles/makeStyles';
import createStyles from '@material-ui/styles/createStyles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
