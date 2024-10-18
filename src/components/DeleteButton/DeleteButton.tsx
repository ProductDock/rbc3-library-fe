import { Button, Typography } from '@mui/material'
import deleteButton from '../../assets/delete.svg'
import styles from './DeleteButton.module.css'

const DeleteButton = () => {
  return (
    <div>
      <Button>
        <img src={deleteButton} alt='back' className={styles.deleteIcon} />
        <Typography className={styles.delete}>Delete</Typography>
      </Button>
    </div>
  )
}

export default DeleteButton
