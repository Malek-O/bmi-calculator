import CustomInput from "./CustomInput"

interface MetricProps {
    height: number
    weight: number
    setHieght: React.Dispatch<React.SetStateAction<number>>
    setWieght: React.Dispatch<React.SetStateAction<number>>
}
const Metric = ({ height, weight, setHieght, setWieght }: MetricProps) => {

    return (
        <div className="flex flex-col sm:grid grid-cols-2 gap-10 mt-10">
            <div className="flex flex-col">
                <label htmlFor="Height">Height</label>
                <CustomInput value={height} onChange={(e) => {
                    if (Number(e.target.value) >= 0 && Number(e.target.value) <= 250) {
                        setHieght(Number(e.target.value));
                    }
                }}
                    unit="cm" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="Weight ">Weight</label>
                <CustomInput unit="kg" value={weight} onChange={(e) => {
                    if (Number(e.target.value) >= 0 && Number(e.target.value) <= 250) {
                        setWieght(Number(e.target.value));
                    }
                }} />
            </div>
        </div>
    )
}

export default Metric