import * as yup from 'yup';
import { NewTechnology } from '../../../model/technology';

yup.setLocale({
  mixed: {
    required: 'This field is required',
  },
  number: {
    positive: 'Please enter a positive number',
    integer: 'The number must be an integer',
  },
});

export const validationSchema = yup.object().shape<NewTechnology>({
  name: yup.string().required(),
  language: yup.string().required(),
  description: yup.string(),
  initRelease: yup.number().positive().integer(),
});

export const emptyVacancy: Record<keyof NewTechnology, string> = {
  name: '',
  language: '',
  description: '',
  initRelease: '',
};
