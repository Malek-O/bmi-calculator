import healthy from '../assets/Healthy.svg'
import exercise from '../assets/Exercise.svg'
import sleep from '../assets/Sleep.svg'
const Tips = () => {
    return (
        <section className='bg-gradient-to-br from-[#d6fcfe00] to-[#d6e6fe5e] py-10'>
            <div className='px-5 xl:px-0 mx-auto  w-full  xl:max-w-[70rem] 2xl:max-w-[90rem]  grid grid-cols-1 lg:grid-cols-3 gap-10 place-items-start md:place-items-center '>
                <div className='flex flex-col sm:flex-row items-start sm:items-center md:items-start lg:flex-col gap-8'>
                    <img src={healthy} alt='Healthy' className='w-14 h-14' />
                    <div className='flex flex-col gap-8'>
                        <h4 className='text-[24px] text-colors-gunmetal font-semibold'>Healthy eating</h4>
                        <p className='text-colors-darkElectricBlue lg:max-w-[500px] -mt-3'>Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.</p>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row items-start sm:items-center md:items-start lg:flex-col gap-8'>
                    <img src={exercise} alt='Healthy' className='w-14 h-14' />
                    <div className='flex flex-col gap-8'>
                        <h4 className='text-[24px] text-colors-gunmetal font-semibold'>Regular exercise</h4>
                        <p className='text-colors-darkElectricBlue lg:max-w-[500px]  -mt-3'>Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.</p>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row items-start sm:items-center md:items-start lg:flex-col gap-8'>
                    <img src={sleep} alt='Healthy' className='w-14 h-14' />
                    <div className='flex flex-col gap-8'>
                        <h4 className='text-[24px] text-colors-gunmetal font-semibold'>Adequate sleep</h4>
                        <p className='text-colors-darkElectricBlue lg:max-w-[500px]  -mt-3'>Sleep enhances mental clarity, emotional stabidivty, and physical wellness, promoting overall restoration and rejuvenation.</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Tips