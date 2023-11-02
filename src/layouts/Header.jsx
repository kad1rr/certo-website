import { AlignRight } from 'react-feather'
import BgLink from '../components/BgLink'
import Link from '../components/Link'

const Header = () => {
  return (
    <header className='z-20 w-full h-16 flex flex-row justify-between bg-secondryBackground items-center px-4 md:px-12 lg:px-24'>
      <img
        src='/logo.svg'
        width='100px'
        className='z-20'
      />
      <AlignRight
        className='lg:hidden z-20'
        onClick={() => {
          const menu = document.querySelector('.menu')
          menu.classList.toggle('hidden')
          menu.classList.toggle('flex')
          document.body.classList.toggle('overflow-hidden')
        }}
      />
      <div className='menu hidden absolute top-0 w-full h-full left-0 p-8 bg-secondryBackground justify-center flex-col lg:flex lg:top-0 lg:relative lg:bg-transparent lg:flex-row gap-8 lg:gap-x-14 items-center lg:p-0 lg:justify-end'>
        <Link
          href='#'
          text='iPhone'
        />
        <Link
          href='#'
          text='Android'
        />
        <Link
          href='#'
          text='Help'
        />
        <Link
          href='#'
          text='Company'
        />
        <BgLink
          href='#'
          text='Sign Up'
        />
      </div>
    </header>
  )
}

export default Header
