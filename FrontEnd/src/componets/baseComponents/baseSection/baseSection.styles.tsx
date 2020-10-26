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
    sectionWrapper: {
      flex: '1 1 auto',
      padding: '20px 30px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
  })
);

export default useStyles;
