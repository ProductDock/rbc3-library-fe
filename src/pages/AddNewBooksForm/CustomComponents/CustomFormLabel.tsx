import { FormLabel, Typography } from '@mui/material'
import style from '../AddNewBooksForm.module.css'

interface CustomFormLabelProps {
  htmlFor: string
  required?: boolean
  children: React.ReactNode
}

const CustomFormLabel: React.FC<CustomFormLabelProps> = ({
  htmlFor,
  required,
  children,
}) => {
  return (
    <FormLabel
      className={style.formLabelWrapper}
      required={required}
      htmlFor={htmlFor}
    >
      <Typography variant='h6' className={style.formLabelText}>
        {children}
      </Typography>
    </FormLabel>
  )
}

export default CustomFormLabel
