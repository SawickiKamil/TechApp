import * as React from 'react';
import useStyles from './introductionPage.styles';
import { Typography } from '@material-ui/core';
import BaseSection from '../baseComponents/baseSection/baseSection';
import List from './list';
import {
  FRONT_END,
  BACK_END,
  FrontEndDescription,
  BackEndDescription,
} from '../../constans/index';
import { useHistory } from 'react-router-dom';

const title = '// Main Page';
const buttonText = 'Go To The App';

const IntrotudctionPage: React.FC = () => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = React.useCallback(() => {
    history.push('/technologies');
  }, [history]);

  return (
    <BaseSection onClick={handleClick} title={title} buttonText={buttonText}>
      <>
        <Typography className={classes.titleStyle}>
          Technologies I used
        </Typography>
        <List
          technologies={FRONT_END}
          title="Front-End:"
          description={FrontEndDescription}
        />
        <List
          technologies={BACK_END}
          title="Back-End:"
          description={BackEndDescription}
        />
      </>
    </BaseSection>
  );
};

export default IntrotudctionPage;
