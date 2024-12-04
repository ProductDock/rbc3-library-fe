import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import styles from '../ReviewForm.module.css'
import CheckBoxOutlineBlankSharpIcon from '@mui/icons-material/CheckBoxOutlineBlankSharp'
import CheckBoxSharpIcon from '@mui/icons-material/CheckBoxSharp'
import { useEffect, useState } from 'react'
import IndeterminateCheckBoxSharpIcon from '@mui/icons-material/IndeterminateCheckBoxSharp'

const labels = [
  { label: 'Select All', value: 'Select all', checked: false },
  { label: 'Junior', value: 'Junior', checked: false },
  { label: 'Medior', value: 'Medior', checked: false },
  { label: 'Senior', value: 'Senior', checked: false },
]

interface RecommendationCheckBoxProps {
  value: string[]
  onChange: (newValue: string[]) => void
}

const RecomendationCheckBox: React.FC<RecommendationCheckBoxProps> = ({
  value,
  onChange,
}) => {
  const [checkBoxState, setCheckBoxState] = useState(labels)

  useEffect(() => {
    const updatedCheckboxState = checkBoxState.map(item => ({
      ...item,
      checked: value.includes(item.value),
    }))
    setCheckBoxState(updatedCheckboxState)
  }, [value])

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const isChecked = event.target.checked
    let newCheckBoxState = [...checkBoxState]

    if (index === 0) {
      const areAllOthersChecked = newCheckBoxState
        .slice(1)
        .every(el => el.checked)

      if (areAllOthersChecked) {
        newCheckBoxState = newCheckBoxState.map(el => ({
          ...el,
          checked: false,
        }))
      } else {
        newCheckBoxState = newCheckBoxState.map(el => ({
          ...el,
          checked: isChecked,
        }))
      }
    } else {
      newCheckBoxState[index].checked = isChecked
      newCheckBoxState[0].checked = newCheckBoxState
        .slice(1)
        .every(el => el.checked)
    }

    setCheckBoxState(newCheckBoxState)

    const selectedRecommendations = newCheckBoxState
      .filter(el => el.checked && el.value !== 'Select all')
      .map(el => el.value)

    onChange(selectedRecommendations)
  }

  return (
    <div className={styles.checkBoxWrapper}>
      {checkBoxState.map((item, index) => (
        <div key={item.value} className={styles.checkBoxElements}>
          <Checkbox
            checked={item.checked}
            indeterminate={
              index === 0 &&
              !checkBoxState[0].checked &&
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

export default RecomendationCheckBox
