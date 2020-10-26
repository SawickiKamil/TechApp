import * as React from 'react';
import useStyles from './technology.styles';
import BaseSection from '../baseComponents/baseSection/baseSection';
import Modal from './modal';
import Table from './table';
import CustomCircularProgress from '../baseComponents/costomCircularProgress';
import { useTechnology } from '../../hooks/useTechnology';

const title = '// Butler';
const buttonText = 'Go To The Home Page';

const Technology = () => {
  const classes = useStyles();

  const {
    technologies,
    loadingPage,
    handleDelete,
    handleClick,
    handleOnTechCreated,
  } = useTechnology();

  return (
    <BaseSection title={title} buttonText={buttonText} onClick={handleClick}>
      <div className={classes.root}>
        {loadingPage ? (
          <CustomCircularProgress />
        ) : (
          <>
            <Modal onTechCreated={handleOnTechCreated} />
            <Table onDelete={handleDelete} technologies={technologies} />
          </>
        )}
      </div>
    </BaseSection>
  );
};

export default Technology;
