import style from './BackButton.module.css'
import backArrow from '../../assets/backArrow.svg'
import { Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }
  return (
    <Button className={style.backButton} onClick={goBack}>
      <img src={backArrow} alt='back_arrow' />
      <Typography variant='body1' className={style.backButtonText}>
        Back
      </Typography>
    </Button>
  )
}
export default BackButton
