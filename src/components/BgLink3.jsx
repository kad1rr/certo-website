const BgLink3 = ({ href, text }) => {
  return (
    <a
      href={href}
      className='px-4 py-2 text-primaryText  border border-primaryText rounded-3xl font-bold underline-offset-2 transition-all hover:underline'
    >
      {text}
    </a>
  )
}

export default BgLink3
