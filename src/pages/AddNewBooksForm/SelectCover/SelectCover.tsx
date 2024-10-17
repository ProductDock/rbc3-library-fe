import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import style from './SelecCover.module.css'
import { Typography } from '@mui/material'
import uploadIcon from '../../../assets/upload.svg'

interface PreviewFile {
  name: string
  size: number
  preview: string
}

function SelectCover() {
  const [previews, setPreviews] = useState<PreviewFile[]>([])

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: acceptedFiles => {
      const previewFiles = acceptedFiles.map(file => ({
        name: file.name,
        size: file.size,
        preview: URL.createObjectURL(file),
      }))
      setPreviews(previewFiles)
    },
  })

  const fileList = previews.map(file => (
    <img
      src={file.preview}
      alt={file.name}
      style={{
        height: '200px',
        width: '140px',
        objectFit: 'cover',
      }}
    />
  ))

  const imgIsUploaded = previews.length >= 1

  return (
    <section className='container'>
      <div
        {...getRootProps({ className: 'dropzone' })}
        className={
          imgIsUploaded ? style.imgUploadedWrapper : style.imgDropWrapper
        }
      >
        {imgIsUploaded ? (
          <div className={style.coverImg}>{fileList}</div>
        ) : (
          <>
            <input {...getInputProps()} />
            <img src={uploadIcon} alt='logo' />
            <Typography variant='body1' className={style.imgDropText}>
              <Typography className={style.imgDropTextUnderline}>
                Select a cover
              </Typography>
              &nbsp; or drag it into this area
            </Typography>
            <Typography
              variant='body2'
              className={style.imgDropTextFilesAllowed}
            >
              (PDF, PNG and JPG files are allowed)
            </Typography>
          </>
        )}
      </div>
    </section>
  )
}

export default SelectCover
