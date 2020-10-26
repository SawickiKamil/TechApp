import * as React from 'react'
import { createTechnology } from '../api/fetchApi'
import ITechnology, { NewTechnology } from '../model/technology';
import { FormikHelpers } from 'formik'

export function useModal(onTechCreated: (tech: ITechnology) => void) {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = React.useCallback(() => {
        setOpen(true);
    }, [])
    const handleClose = React.useCallback(() => {
        setOpen(false);
    }, [])

    const onSubmit = React.useCallback(async (form: NewTechnology, helpers: FormikHelpers<NewTechnology>) => {
        helpers.setSubmitting(false)
        const result = await createTechnology(form)
        onTechCreated(result)
        console.log(result)
        setOpen(false)
    }, [])

    return {
        open, handleClickOpen, handleClose, onSubmit
    }
}