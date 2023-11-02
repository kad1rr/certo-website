import { Star } from 'react-feather'

const Box = ({ starCount, text, owner }) => {
  return (
    <div className='w-auto lg:w-[400px] h-auto lg:h-[305px] bg-white rounded-[48px] p-12 flex flex-col gap-4'>
      <div className='flex flex-row gap-x-2'>
        {Array(starCount).fill("star").map(() => (
            <Star
              key={Math.random()}
              fill='currentColor'
              className='text-primaryBackground'
            />
        ))}
      </div>
      <p>{text}</p>
      <p className='text-primaryText font-extrabold'>{owner}</p>
    </div>
  )
}

export default Box
