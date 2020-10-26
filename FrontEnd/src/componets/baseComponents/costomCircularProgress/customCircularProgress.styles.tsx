import makeStyles from '@material-ui/styles/makeStyles';
import createStyles from '@material-ui/styles/createStyles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    circularSpinnerRoot: {
      display: 'block',
      margin: '0 auto',
      height: '70px !important',
      width: '70px !important',
      color: theme.customPalette.lightPink,
      [theme.breakpoints.down('sm')]: {
        height: '40px !important',
        width: '40px !important',
      },
    },
  })
);

export default useStyles;
