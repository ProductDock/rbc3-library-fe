import { Button, Typography } from '@mui/material'
import backButton from '../../assets/back.svg'
import styles from './BackButton.module.css'
import React from 'react'

type BackButtonProps = {
  onClick?: () => void
  className?: string
}

const BackButton: React.FC<BackButtonProps> = ({ onClick, className }) => {
  return (
    <div className={className}>
      <Button onClick={onClick}>
        <img src={backButton} alt='back' className={styles.backIcon} />
        <Typography>Back</Typography>
      </Button>
    </div>
  )
}

export default BackButton
