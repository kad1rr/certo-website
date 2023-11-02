import BgLink2 from '../components/BgLink2'
import BgLink3 from '../components/BgLink3'
import BigText from '../components/BigText'
import Box from '../components/Box'

const Main = () => {
  return (
    <div className='flex flex-col mt-[50px] md:mt-[75px] lg:mt-[150px] items-center w-full'>
      <div className='flex flex-col lg:flex-row w-full md:w-[75%]'>
        <div className='flex flex-col gap-y-12 px-4'>
          <p className='w-[200px] lg:w-[451px]'>
            <BigText text='Your mobile privacy is our mission' />
          </p>
          <p className='w-[200px] lg:w-[451px]'>
            Think your phone has been hacked? Our trusted apps make it easy for
            you to scan, detect and remove threats from your iPhone and Android
            devices.
          </p>
          <div className='flex flex-row gap-x-8'>
            <BgLink2
              href='#'
              text='Get Certo for iPhone'
            />
            <BgLink3
              href='#'
              text='Get Certo for Android'
            />
          </div>
        </div>
        <div className='absolute right-0 top-16 lg:bottom-0 w-[300px] h-[350px] lg:w-[600px] lg:h-[700px] bg-primary -z-10 rounded-bl-3xl'></div>
      </div>
      <div className='w-full bg-primaryBackground h-auto mt-[50px] md:mt-[75px] lg:mt-[150px]'>
        <p className='w-[200px] lg:w-auto lg:p-24 md:p-8 p-4'>
          <BigText text='Loved by thousands of iPhone and Android users alike' />
        </p>
        <div className='flex flex-col lg:flex-row gap-2 h-full items-center justify-around px-8'>
          <Box
            starCount={5}
            text='Does exactly what it says. Clear to read and understand. This is now the second iPhone we’ve used it on and would certainly recommend this app.'
            owner='colinandmandy94'
          />
          <Box
            starCount={5}
            text='This app is good if you need to identify certain vulnerabilities on your iPhone. If you have any issues, their customer service was quite helpful and responsive.'
            owner='Jennifer Black'
          />
          <Box
            starCount={5}
            text='This app is good if you need to identify certain vulnerabilities on your iPhone. If you have any issues, their customer service was quite helpful and responsive.'
            owner='Phillip Colligan'
          />
        </div>
        <div className='flex flex-col lg:flex-row justify-around w-full h-auto lg:p-24 md:p-8 p-4 items-center '>
          <BigText text='Featured in:' />
          <img
            src='/figure.png'
            className='w-[100px] h-[100px]'
          />
          <img
            src='/figure (1).png'
            className='w-[100px] h-[100px]'
          />
          <img
            src='/figure (2).png'
            className='w-[100px] h-[100px]'
          />
          <img
            src='/figure (3).png'
            className='w-[100px] h-[100px]'
          />
          <img
            src='/figure (4).png'
            className='w-[100px] h-[100px]'
          />
          <img
            src='/figure (5).png'
            className='w-[100px] h-[100px]'
          />
        </div>
      </div>
      <div className='w-full lg:p-24 md:p-8 p-4 mt-16 flex flex-col lg:flex-row items-start justify-around'>
        <div className='flex flex-col gap-y-8 w-[50%]'>
          <p className=''>
            <BigText text='At Certo, mobile security is not an afterthought, it’s what we do.' />
          </p>
          <p>
            With years of experience in mobile security and spyware detection,
            our products have helped countless people safeguard their devices
            and find peace of mind.
          </p>
          <div className='flex flex-col gap-y-8'>
            <BgLink2
              href='#'
              text='Get Certo for iPhone'
            />
            <BgLink3
              href='#'
              text='Get Certo for Android'
            />
          </div>
        </div>
        <div className='absolute -z-10 w-[350px] h-[350px] lg:relative lg:w-[500px] lg:h-[500px] bg-primaryBackground rounded-3xl'></div>
      </div>
      <div className='w-full p-8 mt-16 flex flex-col gap-y-8 items-start justify-around bg-secondryBackground'>
        <p className='lg:p-24 md:p-8 p-4'>
          <BigText text='Get your freedom back, stop mobile spyware today' />
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8'>
          <Box
            starCount={0}
            text='Our advanced spyware detection engine can identify if a device contains spyware or bugging software.'
            owner='Spyware detection'
          />
          <Box
            starCount={0}
            text='Our advanced spyware detection engine can identify if a device contains spyware or bugging software.'
            owner='Spyware detection'
          />
          <Box
            starCount={0}
            text='Our advanced spyware detection engine can identify if a device contains spyware or bugging software.'
            owner='Spyware detection'
          />
          <Box
            starCount={0}
            text='Our advanced spyware detection engine can identify if a device contains spyware or bugging software.'
            owner='Spyware detection'
          />
          <Box
            starCount={0}
            text='Our advanced spyware detection engine can identify if a device contains spyware or bugging software.'
            owner='Spyware detection'
          />
          <Box
            starCount={0}
            text='Our advanced spyware detection engine can identify if a device contains spyware or bugging software.'
            owner='Spyware detection'
          />
        </div>
      </div>
      <div className='flex flex-col lg:flex-row justify-around gap-8 mt-16'>
        <BgLink2
          href='#'
          text='Read Our Story'
        />
        <BgLink2
          href='#'
          text='Help Center'
        />
        <BgLink3
          href='#'
          text='Get Certo for iPhone'
        />
        <BgLink3
          href='#'
          text='Get Certo for Android'
        />
      </div>
    </div>
  )
}

export default Main
