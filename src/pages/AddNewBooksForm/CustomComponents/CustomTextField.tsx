import TextField from '@mui/material/TextField'
import { Author } from '../BookForm/BookForm'

interface CustomTextFieldProps {
  id: string
  className?: string
  placeholder?: string
  value: string | number | Author[]
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  error?: boolean
  helperText?: string
  type?: 'text' | 'number'
  readOnly?: boolean
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  id,
  className,
  placeholder,
  value,
  onChange,
  error,
  helperText,
  type = 'text',
  readOnly,
}) => {
  return (
    <TextField
      id={id}
      className={className}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      slotProps={{
        input: {
          readOnly: readOnly,
          sx: {
            borderRadius: 0,
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--mui-palette-neutral-300)',
            },
            '& .MuiOutlinedInput-input': {
              height: '48px',
              padding: '0px 16px',
            },
          },
        },
      }}
    />
  )
}

export default CustomTextField
