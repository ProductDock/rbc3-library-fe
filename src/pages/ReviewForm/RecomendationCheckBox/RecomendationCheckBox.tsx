import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import styles from '../ReviewForm.module.css'
import CheckBoxOutlineBlankSharpIcon from '@mui/icons-material/CheckBoxOutlineBlankSharp'
import CheckBoxSharpIcon from '@mui/icons-material/CheckBoxSharp'

const labels = [
  { label: 'Select All', value: 'Select all' },
  { label: 'Junior', value: 'Junior' },
  { label: 'Medior', value: 'Medior' },
  { label: 'Senior', value: 'Senior' },
]

export default function Checkboxes() {
  return (
    <div className={styles.checkBoxWrapper}>
      {labels.map((item, index) => (
        <div key={item.value} className={styles.checkBoxElements}>
          <Checkbox
            defaultChecked={index === 2}
            size='small'
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
