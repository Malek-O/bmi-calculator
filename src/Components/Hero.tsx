import photo from '../assets/photo.png'
import curveRight from '../assets/curveRight.svg'
const Hero = () => {
  return (
      <article className='relative grid grid-cols-1 md:grid-cols-2 mt-48 md:52 lg:mt-64 items-center mx-auto  w-full  xl:max-w-[70rem] 2xl:max-w-[90rem]'>
          <img src={curveRight} className='hidden 2xl:block absolute w-244 -top-32 right-40' alt="curveRight" />
          <div className='my-28 relative bg-[#E7F5FE] place-self-auto w-full md:w-[400px] lg:w-[450px] xl:w-[564px] h-[300px] sm:h-[388px] rounded-2xl'>
              <img src={photo} alt="photo" className='absolute bottom-0 xl:left-14' />
          </div>

          <div className='lg:max-w-[400px]  xl:max-w-[500px] place-self-center w-full px-5 md:max-w-[300px] md:ms-14 lg:ms-0 xl:ms-32 2xl:ms-0'>
              <h2 className='text-[2.5rem] leading-[2.725rem] font-semibold text-colors-gunmetal'>What your BMI result means</h2>
              <p className='my-10 text-colors-darkElectricBlue'>
                  A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.
              </p>
          </div>

      </article>
  )
}

export default Hero