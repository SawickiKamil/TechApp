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
  })
);

export default useStyles;
