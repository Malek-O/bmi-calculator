import CustomInput from "./CustomInput"
interface MetricProps {
    units: {
        feet: number;
        inches: number;
        stone: number;
        pounds: number;
    }
    setUnits: React.Dispatch<React.SetStateAction<{
        feet: number;
        inches: number;
        stone: number;
        pounds: number;
    }>>
}
const Imperial = ({ units, setUnits }: MetricProps) => {


    return (
        <div className="grid grid-cols-2 gap-10 mt-10">
            <div className="flex flex-col">
                <label htmlFor="Height">Height</label>
                <CustomInput value={units.feet} onChange={(e) => {
                    if (Number(e.target.value) >= 0 && Number(e.target.value) <= 99) {
                        setUnits((prev) => ({ ...prev, feet: Number(e.target.value) }));
                    }
                }}
                    unit="ft" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="Height" className="opacity-0">Height</label>
                <CustomInput value={units.inches} onChange={(e) => {
                    if (Number(e.target.value) >= 0 && Number(e.target.value) <= 99) {
                        setUnits((prev) => ({ ...prev, inches: Number(e.target.value) }));
                    }
                }}
                    unit="in" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="Weight">Weight</label>
                <CustomInput value={units.stone} onChange={(e) => {
                    if (Number(e.target.value) >= 0 && Number(e.target.value) <= 99) {
                        setUnits((prev) => ({ ...prev, stone: Number(e.target.value) }));
                    }
                }}
                    unit="st" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="Height" className="opacity-0">Weight</label>
                <CustomInput value={units.pounds} onChange={(e) => {
                    if (Number(e.target.value) >= 0 && Number(e.target.value) <= 99) {
                        setUnits((prev) => ({ ...prev, pounds: Number(e.target.value) }));
                    }
                }}
                    unit="lbs" />
            </div>
        </div>
    )
}

export default Imperial