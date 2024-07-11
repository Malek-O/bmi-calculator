import { useEffect, useState } from "react"
import Metric from "./Metric"
import RadioGroup from "./RadioGroup"
import Imperial from "./Imperial"
import { bmiType } from "../types/type.t"
import { caclBmiMetric, caclBmiImperical } from "../utils/calcBmi"
import CalcualtedBMIText from "./CalcualtedBMIText"

const Bmi = () => {

    const [selectedOption, setSelectedOption] = useState('Metric');
    const [bmi, setBmi] = useState<bmiType | null>();

    const [height, setHieght] = useState(0);
    const [weight, setWieght] = useState(0);
    const [units, setUnits] = useState({
        feet: 0,
        inches: 0,
        stone: 0,
        pounds: 0
    });

    useEffect(() => {
        setBmi(null);
        setHieght(0)
        setWieght(0)
        setUnits({ feet: 0, inches: 0, stone: 0, pounds: 0 })
    }, [selectedOption])

    useEffect(() => {
        if (height > 0 && weight > 0) {
            setBmi(caclBmiMetric(height, weight))
        }
        if (units.feet > 0 && units.inches > 0 && units.pounds > 0 && units.stone > 0) {
            setBmi(caclBmiImperical(units.feet, units.inches, units.stone, units.pounds))
        }
    }, [height, weight, units])
console.log(bmi);

    return (
        <aside className='mx-5 p-8 shadow-xl rounded-xl mt-10 xl:mt-0 2xl:ms-56 xl:ms28 bg-white'>
            <h3 className='font-semibold text-[24px]'>Enter your details below</h3>
            <div className='mt-8'>
                <div className="grid grid-cols-2 gap-10">
                    <RadioGroup setSelectedOption={setSelectedOption} selectedOption={selectedOption} />
                </div>
                {selectedOption == "Metric" ? <Metric height={height} weight={weight} setHieght={setHieght} setWieght={setWieght} />
                    : <Imperial setUnits={setUnits} units={units} />}
                <div className="xl:max-w-[600px] mt-7 p-10 md:rounded-e-[6rem] md:rounded-s-2xl rounded-3xl  bg-gradient-to-r from-[#345FF6] to-[#587DFF]">
                    {bmi ? <CalcualtedBMIText stats={bmi} option={selectedOption} /> :
                        <div>
                            <h1 className="text-lg md:text-[20px] my-2 text-white font-semibold">Welcome!</h1>
                            <p className="text-white text-lg">Enter your height and weight and you’ll see your BMI result here</p>
                        </div>
                    }
                </div>
            </div>
        </aside>
    )
}

export default Bmi