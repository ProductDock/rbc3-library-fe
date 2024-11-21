import { Button, Typography } from '@mui/material'
import editButton from '../../assets/edit.svg'
import styles from './EditButton.module.css'

const EditButton = () => {
  return (
    <div>
      <Button>
        <img src={editButton} alt='back' className={styles.editIcon} />
        <Typography variant='body1' className={styles.text}>
          Edit
        </Typography>
      </Button>
    </div>
  )
}

export default EditButton
