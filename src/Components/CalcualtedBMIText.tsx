
const CalcualtedBMIText = () => {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="flex flex-col ">
                <p className="text-[20px] font-semibold text-white">Your BMI is...</p>
                <h1 className="text-[32px] sm:text-[64px] font-semibold text-white ">23.4</h1>
            </div>
            <p className="text-white font-light place-self-center text-sm sm:text-lg xl:text-base">Your BMI suggests you’re a healthy weight. Your ideal weight is between <span className="font-bold">63.3kgs - 85.2kgs.</span></p>
        </div>
    )
}

export default CalcualtedBMIText