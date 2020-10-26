import * as React from 'react';
import useStyles from './fiels.styles';
import FormikField from '../../../baseComponents/formikField';

const Fields: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.textFieldsWrapper}>
      <FormikField name="name" label="Enter the name of the technology." />
      <FormikField name="language" label="Provide a programming language." />
      <FormikField name="description" label="Add description." />
      <FormikField
        name="initRelease"
        label="Enter the technology release year."
        type="number"
      />
    </div>
  );
};

export default Fields;
