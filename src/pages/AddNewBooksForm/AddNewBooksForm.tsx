import {
  Checkbox,
  FormControl,
  FormLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material'
import style from './AddNewBooksForm.module.css'
import SelectCover from './SelectCover/SelectCover'
import { useState } from 'react'
import CheckBoxOutlineBlankSharpIcon from '@mui/icons-material/CheckBoxOutlineBlankSharp'
import CheckBoxSharpIcon from '@mui/icons-material/CheckBoxSharp'

const AddNewBooksForm = () => {
  const ITEM_HEIGHT = 48
  const ITEM_PADDING_TOP = 8
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 200,
      },
    },
  }
  const statuses = ['Available books', 'Reserved books', 'Rented books']
  const [bookStatus, setBookStatus] = useState<string[]>([])
  const handleChange = (event: SelectChangeEvent<typeof bookStatus>) => {
    const {
      target: { value },
    } = event
    setBookStatus(typeof value === 'string' ? value.split(',') : value)
  }

  return (
    <div>
      <div className={style.wrapper}>
        <Typography variant='h3'>
          Add new books<span className={style.dot}>.</span>
        </Typography>
      </div>
      <div className={style.formWrapper}>
        <FormControl sx={{ width: '840px' }}>
          <div className={style.formFlex}>
            <div className={style.formColumnWrapper}>
              <div>
                <FormLabel className={style.formLabelWrapper} required>
                  <Typography variant='h6' className={style.formLabelText}>
                    Title
                  </Typography>
                </FormLabel>
                <TextField
                  className={style.bookTextField}
                  placeholder='Enter the book title'
                  InputProps={{
                    sx: {
                      borderRadius: 0,
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'var(--mui-palette-neutral-300)',
                      },
                      '& .MuiOutlinedInput-input': {
                        height: '48px',
                        padding: '0px 16px 0px 16px',
                      },
                    },
                  }}
                ></TextField>
              </div>
              <div>
                <FormLabel className={style.formLabelWrapper} required>
                  <Typography variant='h6' className={style.formLabelText}>
                    Author
                  </Typography>
                </FormLabel>
                <TextField
                  className={style.bookTextField}
                  placeholder='Who is the author of the book?'
                  InputProps={{
                    sx: {
                      borderRadius: 0,
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'var(--mui-palette-neutral-300)',
                      },
                      '& .MuiOutlinedInput-input': {
                        height: '48px',
                        padding: '0px 16px 0px 16px',
                      },
                    },
                  }}
                ></TextField>
              </div>
              <div>
                <FormLabel className={style.formLabelWrapper}>
                  <Typography variant='h6' className={style.formLabelText}>
                    Categories
                  </Typography>
                </FormLabel>
                <Select
                  labelId='demo-multiple-checkbox-label'
                  id='demo-multiple-checkbox'
                  className={style.bookTextFieldSelect}
                  multiple
                  value={bookStatus}
                  onChange={handleChange}
                  // label='Select the book categories'
                  input={
                    <OutlinedInput
                      sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'var(--mui-palette-neutral-300)',
                        },
                        '& .MuiSvgIcon-root': {
                          color: 'var(--mui-palette-neutral-600)',
                        },
                      }}
                      // inputProps={
                      //   {
                      //       sx: {
                      //         '& .MuiOutlinedInput-input': {
                      //           height: '48px',
                      //           padding: '0px 16px 0px 16px',
                      //         },
                      //       },
                      //   }
                      // }
                    />
                  }
                  // renderValue={selected => selected.join(', ')}
                  renderValue={selected =>
                    selected.length === 0 ? (
                      <Typography
                        variant='body1'
                        sx={{ color: 'var(--mui-palette-neutral-300)' }}
                      >
                        Select the book categories{' '}
                      </Typography>
                    ) : (
                      selected.join(', ')
                    )
                  }
                  MenuProps={MenuProps}
                  displayEmpty
                >
                  {statuses.map(status => (
                    <MenuItem key={status} value={status}>
                      <Checkbox
                        checked={bookStatus.includes(status)}
                        size='small'
                        icon={
                          <CheckBoxOutlineBlankSharpIcon
                            className={style.checkboxColor}
                          />
                        }
                        checkedIcon={
                          <CheckBoxSharpIcon className={style.checkboxColor} />
                        }
                      />
                      <ListItemText
                        primary={<Typography variant='h6'>{status}</Typography>}
                      />
                    </MenuItem>
                  ))}
                </Select>
                {/* <TextField
                className={style.bookTextField}
                placeholder='Who is the author of the book?'
                InputProps={{
                  sx: {
                    borderRadius: 0,
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'var(--mui-palette-neutral-300)',
                    },
                    '& .MuiOutlinedInput-input': {
                      height: '48px',
                      padding: '0px 16px 0px 16px',
                    },
                  },
                }}
              ></TextField> */}
              </div>
              <div>
                <FormLabel className={style.formLabelWrapper}>
                  <Typography variant='h6' className={style.formLabelText}>
                    Amount
                  </Typography>
                </FormLabel>
                <TextField
                  className={style.bookTextField}
                  type='number'
                  defaultValue={1}
                  sx={{}}
                  InputProps={{
                    sx: {
                      borderRadius: 0,
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'var(--mui-palette-neutral-300)',
                      },
                      '& .MuiOutlinedInput-input': {
                        height: '48px',
                        padding: '0px 16px 0px 16px',
                      },
                    },
                  }}
                ></TextField>
              </div>
            </div>
            <div className={style.imageDrop}>
              <SelectCover />
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <FormLabel className={style.formLabelWrapper} required>
              <Typography variant='h6' className={style.formLabelText}>
                Description
              </Typography>
            </FormLabel>
            <TextField
              className={style.bookDescriptionTextField}
              multiline
              rows={6}
              placeholder='Enter a description'
              InputProps={{
                sx: {
                  borderRadius: 0,
                  width: '100%',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'var(--mui-palette-neutral-300)',
                  },
                  '& .MuiOutlinedInput-input': {
                    //   height: '48px',
                    paddingLeft: '2px',
                    paddingBottom: '7px',
                  },
                },
              }}
            />
          </div>
        </FormControl>
      </div>
    </div>
  )
}
export default AddNewBooksForm
