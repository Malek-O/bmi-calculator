import logo from './assets/logo.svg'
import Bmi from './Components/Bmi'
import Hero from './Components/Hero'
import { Limitation } from './Components/Limitation'
import Tips from './Components/Tips'

function App() {
  return (
    <div className='relative'>
      <div className='-z-10 absolute w-full 2xl:w-[1200px] xl:w-[900px] h-[868px] rounded-b-[5rem] bg-gradient-to-l from-[#D6E6FE] to-[#d6fcfe00] '></div>
      <section className="relative w-full  xl:max-w-[70rem] 2xl:max-w-[90rem] pt-10 mx-auto xl:pt-14">

        <header className='flex justify-center xl:justify-normal'>
          <img src={logo} alt="logo" />
        </header>

        <main className='flex xl:flex-row flex-col justc my-14 xl:my-28 '>
          <div className='mx-2 sm:mx-0 xl:w-[560px] xl:text-left text-center '>
            <h1 className='text-[48px] sm:text-[64px] font-semibold  leading-[1.2] text-colors-gunmetal'>Body Mass</h1>
            <h1 className='text-[48px] sm:text-[64px] font-semibold  leading-[1.2] text-colors-gunmetal'>Index Calculator</h1>
            <p className='mt-14 text-colors-darkElectricBlue font-normal text-[16px]'>Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
          </div>
          <Bmi />
        </main>
      </section>
      <Hero/>
      <Tips/>
      <Limitation/>
    </div>
  )
}

export default App
