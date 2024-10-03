import Arrow from '../../assets/arrow.png'

const BackToTop = () => {
  const scrollToTop = () => {
    window.scroll(0, 0)
  }

  return (
    <div style={{ marginTop: '50px', width: '110px' }} onClick={scrollToTop}>
      <span
        style={{
          fontWeight: 600,
          fontSize: '16px',
          lineHeight: '28px',
          color: 'white',
          textDecoration: 'underline',
          marginRight: '7px',
        }}
      >
        Back to top
      </span>
      <img src={Arrow} alt='arrow' />
    </div>
  )
}

export default BackToTop
