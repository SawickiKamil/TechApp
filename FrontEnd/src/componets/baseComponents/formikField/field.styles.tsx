import makeStyles from '@material-ui/styles/makeStyles';
import createStyles from '@material-ui/styles/createStyles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textFieldStyle: {
      width: '100%',
      marginTop: '20',
    },
  })
);

export default useStyles;
