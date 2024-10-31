import { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import style from './SelecCover.module.css'
import { IconButton, Typography } from '@mui/material'
import uploadIcon from '../../../assets/upload.svg'
import editIcon from '../../../assets/edit.svg'

interface PreviewFile {
  name: string
  size: number
  preview: string
}

interface SelectCoverProps {
  imageUpload: (imageUrl: string) => void
  bookImageUrl?: string
  resetTrigger: number
}

function SelectCover({
  imageUpload,
  bookImageUrl,
  resetTrigger,
}: SelectCoverProps) {
  const [previews, setPreviews] = useState<PreviewFile[]>([])

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
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

      if (previewFiles.length > 0) {
        imageUpload(previewFiles[0].preview)
      }
    },
  })

  useEffect(() => {
    setPreviews([])
  }, [bookImageUrl, resetTrigger])

  const fileList = !bookImageUrl ? (
    previews.map((file, index) => (
      <img
        key={index}
        src={file.preview}
        alt={file.name}
        className={style.coverImg}
      />
    ))
  ) : (
    <img src={bookImageUrl} alt={'cover'} className={style.coverImg} />
  )

  const imgIsUploaded = previews.length >= 1 || bookImageUrl

  const emptyPreviews = () => {
    setPreviews([])
    imageUpload('')
  }

  return (
    <section>
      {imgIsUploaded ? (
        <div
          {...getRootProps({ className: 'dropzone' })}
          className={style.imgUploadedWrapper}
        >
          <IconButton
            disabled={bookImageUrl !== undefined}
            className={style.editImgButton}
            onClick={emptyPreviews}
          >
            <img src={editIcon} alt='edit_icon' />
          </IconButton>
          <div className={style.coverImgWrapper}>{fileList}</div>
        </div>
      ) : (
        <div
          {...getRootProps({ className: 'dropzone' })}
          className={style.imgDropWrapper}
        >
          <input {...getInputProps()} />
          <img src={uploadIcon} alt='logo' />
          <Typography variant='body1' className={style.imgDropText}>
            <Typography component='span' className={style.imgDropTextUnderline}>
              Select a cover
            </Typography>
            &nbsp; or drag it into this area
          </Typography>
          <Typography variant='body2' className={style.imgDropTextFilesAllowed}>
            (PDF, PNG and JPG files are allowed)
          </Typography>
        </div>
      )}
    </section>
  )
}

export default SelectCover
