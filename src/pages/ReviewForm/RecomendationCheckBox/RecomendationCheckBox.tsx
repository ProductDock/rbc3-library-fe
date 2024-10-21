import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import styles from '../ReviewForm.module.css'
import CheckBoxOutlineBlankSharpIcon from '@mui/icons-material/CheckBoxOutlineBlankSharp'
import CheckBoxSharpIcon from '@mui/icons-material/CheckBoxSharp'
import { useState } from 'react'
import IndeterminateCheckBoxSharpIcon from '@mui/icons-material/IndeterminateCheckBoxSharp'

const labels = [
  { label: 'Select All', value: 'Select all', checked: false },
  { label: 'Junior', value: 'Junior', checked: false },
  { label: 'Medior', value: 'Medior', checked: false },
  { label: 'Senior', value: 'Senior', checked: false },
]

export default function Checkboxes() {
  const [checkBoxState, setCheckBoxState] = useState(labels)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const isChecked = event.target.checked
    if (index === 0) {
      const newCheckBoxState = checkBoxState.map(el => {
        el.checked = isChecked
        return el
      })
      setCheckBoxState([...newCheckBoxState])
    } else {
      const newCheckBoxState = [...checkBoxState]
      const element = newCheckBoxState[index]
      element.checked = isChecked
      newCheckBoxState[0].checked = newCheckBoxState
        .slice(1)
        .every(el => el.checked)
      setCheckBoxState([...newCheckBoxState])
    }
  }
  return (
    <div className={styles.checkBoxWrapper}>
      {checkBoxState.map((item, index) => (
        <div key={item.value} className={styles.checkBoxElements}>
          <Checkbox
            checked={item.checked}
            indeterminate={
              index == 0 &&
              checkBoxState[index].checked === false &&
              checkBoxState.slice(1).some(el => el.checked)
            }
            indeterminateIcon={
              <IndeterminateCheckBoxSharpIcon
                className={styles.customCheckBox}
              />
            }
            size='small'
            onChange={event => handleChange(event, index)}
            icon={<CheckBoxOutlineBlankSharpIcon className={styles.checkBox} />}
            checkedIcon={<CheckBoxSharpIcon className={styles.checkBox} />}
          />
          <Typography variant='h6' component='span'>
            {item.label}
          </Typography>
        </div>
      ))}
    </div>
  )
}
