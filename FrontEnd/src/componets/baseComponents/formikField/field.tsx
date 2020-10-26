import * as React from 'react';
import useStyles from './field.styles';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';

interface IFieldProps {
  name: string;
  label: string;
  type?: string;
}

const FormikField = ({ name, label, type }: IFieldProps) => {
  const classes = useStyles();

  return (
    <>
      <Field
        className={classes.textFieldStyle}
        variant="outlined"
        name={name}
        component={TextField}
        label={label}
        type={type}
      />
    </>
  );
};

export default FormikField;
