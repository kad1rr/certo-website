import BigTextWhite from '../components/BigTextWhite'
import BgLink2 from '../components/BgLink2'

const Footer = () => {
  return (
    <div className='w-full bg-primaryText h-auto p-16 mt-16 flex flex-col lg:flex-row items-center justify-between'>
      <BigTextWhite text='Scan. Detect. Remove.' />
      <BgLink2
        href='https://github.com/kad1rr/certo-website'
        text='View on Github'
      />
      <BgLink2
        href='#'
        text='Get Certo'
      />
    </div>
  )
}

export default Footer
