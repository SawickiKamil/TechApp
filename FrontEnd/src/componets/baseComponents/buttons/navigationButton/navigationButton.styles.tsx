import makeStyles from '@material-ui/styles/makeStyles';
import createStyles from '@material-ui/styles/createStyles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonWrapper: {
      margin: '30px 0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
  })
);

export default useStyles;
