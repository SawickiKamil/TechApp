import * as React from 'react';
import useStyles from './modal.styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { emptyVacancy, validationSchema } from './schema';
import ITechnology, { NewTechnology } from '../../../model/technology';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { useModal } from '../../../hooks/useModal';
import { Typography } from '@material-ui/core';
import { theme } from '../../../theme';

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
      <Button className={classes.modalButtonStyle} onClick={handleClickOpen}>
        Add new technology
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: theme.customPalette.tuna,
          },
        }}
      >
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
              <div className={classes.textFieldsWrapper}>
                //Todo refactor this piece of spaghetti
                <Field
                  className={classes.textFieldStyle}
                  variant="outlined"
                  name="name"
                  component={TextField}
                  label="Enter the name of the technology."
                />
                <Field
                  className={classes.textFieldStyle}
                  variant="outlined"
                  component={TextField}
                  name="language"
                  label="Provide a programming language."
                />
                <Field
                  variant="outlined"
                  className={classes.textFieldStyle}
                  component={TextField}
                  name="description"
                  label="Add description."
                />
                <Field
                  variant="outlined"
                  className={classes.textFieldStyle}
                  component={TextField}
                  name="initRelease"
                  type="number"
                  label="Enter the technology release year."
                />
              </div>
              <Button
                className={classes.addNewButton}
                disabled={isSubmitting}
                type="submit"
              >
                Add
              </Button>
            </Form>
          )}
        </Formik>
      </Dialog>
    </>
  );
};

export default CustomModal;
