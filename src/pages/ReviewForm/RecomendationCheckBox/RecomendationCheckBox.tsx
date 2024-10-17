import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import styles from '../ReviewForm.module.css'

const labels = [
  { label: 'Select All', value: 'Select all' },
  { label: 'Junior', value: 'Junior' },
  { label: 'Medior', value: 'Medior' },
  { label: 'Senior', value: 'Senior' },
]

export default function Checkboxes() {
  return (
    <div className={styles.checkBoxElements}>
      {labels.map((item, index) => (
        <div key={item.value}>
          <Checkbox defaultChecked={index === 2} className={styles.checkBox} />
          <Typography variant='h6' component='span'>
            {item.label}
          </Typography>
        </div>
      ))}
    </div>
  )
}
