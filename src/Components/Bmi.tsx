import CalcualtedBMIText from "./CalcualtedBMIText"
import Metric from "./Metric"
import RadioGroup from "./RadioGroup"

const Bmi = () => {
    return (
        <aside className='mx-5 p-8 shadow-xl rounded-xl mt-10 xl:mt-0 xl:ms-32 bg-white'>
            <h3 className='font-semibold text-[24px]'>Enter your details below</h3>
            <div className='mt-8'>
                <div className="grid grid-cols-2 gap-10">
                    <RadioGroup />
                </div>
                <Metric />

                <div className="xl:max-w-[600px] mt-7 p-10 md:rounded-e-[6rem] md:rounded-s-2xl rounded-3xl  bg-gradient-to-r from-[#345FF6] to-[#587DFF]">
                    {/* <div>
                        <h1 className="text-[20px] my-2 text-white font-semibold">Welcome!</h1>
                        <p className="text-white">Enter your height and weight and you’ll see your BMI result here</p>
                    </div> */}
                    <CalcualtedBMIText />
                </div>
            </div>
        </aside>
    )
}

export default Bmi