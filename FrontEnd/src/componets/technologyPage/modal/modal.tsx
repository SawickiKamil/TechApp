import * as React from 'react';
import useStyles from './modal.styles';
import Dialog from '@material-ui/core/Dialog';
import { emptyVacancy, validationSchema } from './schema';
import ITechnology, { NewTechnology } from '../../../model/technology';
import { Formik, Form } from 'formik';
import { useModal } from '../../../hooks/useModal';
import { Typography } from '@material-ui/core';
import { theme } from '../../../theme';
import Fields from './fields';
import { AddTechButton, FormikAddButton } from '../../baseComponents/buttons';
import CustomDialog from '../../baseComponents/customDialog';

interface Props {
  onTechCreated: (tech: ITechnology) => void;
}

const CustomModal = ({ onTechCreated }: Props) => {
  const classes = useStyles();

  const { open, handleClickOpen, handleClose, onSubmit } = useModal(
    onTechCreated
  );

  return (
    <>
      <AddTechButton handleClickOpen={handleClickOpen} />
      <CustomDialog open={open} onClose={handleClose}>
        <Typography className={classes.dialogTitleStyle}>
          Provide required answers.
        </Typography>
        <Formik
          initialValues={(emptyVacancy as any) as NewTechnology}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <Form className={classes.dialogWrapper}>
              <Fields />
              <FormikAddButton disabled={isSubmitting} />
            </Form>
          )}
        </Formik>
      </CustomDialog>
    </>
  );
};

export default CustomModal;
