import { bmiType } from "../types/type.t"

const CalcualtedBMIText = ({ stats, option }: { option: string, stats: bmiType | null | undefined }) => {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="flex flex-col ">
                <p className="text-[20px] font-semibold text-white">Your BMI is...</p>
                <h1 className="text-[32px] sm:text-[64px] font-semibold text-white ">{stats?.bmi.toFixed(1)}</h1>
            </div>
            <p className="text-white font-light place-self-center text-sm sm:text-lg xl:text-base">{stats?.classification}, Your ideal weight is between
                <span className="font-bold"> {option == "Metric" ? `${stats?.idealWeightMin}kgs - ${stats?.idealWeightMax}kgs.` : `${stats?.minStone}st ${stats?.minPound}lbs - ${stats?.maxStone}st ${stats?.maxPound}lbs`}</span></p>
        </div>
    )
}

export default CalcualtedBMIText