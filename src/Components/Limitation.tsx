import intersex from '../assets/intersex.svg'
import cake from '../assets/cake.svg'
import person from '../assets/person.svg'
import baby from '../assets/baby.svg'
import muscle from '../assets/muscle.svg'
import curveLeft from '../assets/curveLeft.svg'

export const Limitation = () => {
    return (
        <section className="relative mt-28 xl:px-0 px-5 place-items-center 2xl:place-items-start grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-6 2xl:grid-rows-3 2xl:grid-flow-row gap-8 mx-auto w-full  xl:max-w-[70rem] 2xl:max-w-[90rem] my-10">
            <img src={curveLeft} className='hidden 2xl:block absolute w-244 top-56 left-40' alt="curveRight" />
            <div className="2xl:col-span-2 lg:col-span-2">
                <h1 className='text-[2.5rem] leading-[2.725rem] font-semibold text-colors-gunmetal text-center 2xl:text-left'>Limitations of BMI</h1>
                <p className='my-5 text-colors-darkElectricBlue text-center 2xl:text-left'>
                    Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.          </p>
            </div>

            <div className="hidden 2xl:block"><div className="h-24"></div></div>

            <div className="2xl:col-span-2 bg-white rounded-3xl shadow-lg p-5 flex flex-col justify-center md:min-h-[14rem] max-w-[680px] max-w[345px] lg:w-[385px]">
                <div className='flex gap-4 my-4'>
                    <img src={intersex} alt="intersex" />
                    <h3 className='text-colors-gunmetal text-[20px] font-semibold'>Gender</h3>
                </div>
                <p className='text-colors-darkElectricBlue'>The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.</p>
            </div>

            <div className="hidden 2xl:col-span-2 2xl:grid"><div className="h-24"></div></div>

            <div className="2xl:col-span-2  bg-white rounded-3xl shadow-lg p-5 flex flex-col justify-center md:min-h-[14rem] max-w-[680px] max-w[345px] lg:w-[385px]">
                <div className='flex gap-4 my-4'>
                    <img src={cake} alt="intersex" />
                    <h3 className='text-colors-gunmetal text-[20px] font-semibold'>Age</h3>
                </div>
                <p className='text-colors-darkElectricBlue'>In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.</p>
            </div>

            <div className="2xl:col-span-2 bg-white rounded-3xl shadow-lg p-5 flex flex-col justify-center md:min-h-[14rem] max-w-[680px] max-w[345px] lg:w-[385px]">
                <div className='flex gap-4 my-4'>
                    <img src={muscle} alt="intersex" />
                    <h3 className='text-colors-gunmetal text-[20px] font-semibold'>Muscle</h3>
                </div>
                <p className='text-colors-darkElectricBlue'>BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.</p>
            </div>

            <div className="hidden 2xl:block"><div className="h-24"></div></div>

            <div className="2xl:col-span-2 bg-white rounded-3xl shadow-lg p-5 flex flex-col justify-center md:min-h-[14rem] max-w-[680px] max-w[345px] lg:w-[385px]">
                <div className='flex gap-4 my-4'>
                    <img src={baby} alt="intersex" />
                    <h3 className='text-colors-gunmetal text-[20px] font-semibold'>Pregnancy</h3>
                </div>
                <p className='text-colors-darkElectricBlue'>Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.</p>
            </div>

            <div className="2xl:col-span-2  bg-white rounded-3xl shadow-lg p-5 flex flex-col justify-center md:min-h-[14rem] max-w-[680px] max-w[345px] lg:w-[385px]">
                <div className='flex gap-4 my-4'>
                    <img src={person} alt="intersex" />
                    <h3 className='text-colors-gunmetal text-[20px] font-semibold'>Race</h3>
                </div>
                <p className='text-colors-darkElectricBlue'>Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.</p>
            </div>

        </section>
    )
}
