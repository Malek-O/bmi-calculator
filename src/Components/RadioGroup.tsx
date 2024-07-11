import CustomRadio from "./CustomRadio"

interface RadioGroupProps {
    selectedOption: string
    setSelectedOption: React.Dispatch<React.SetStateAction<string>>
}
const RadioGroup = ({ setSelectedOption, selectedOption }: RadioGroupProps) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    };
    return (
        <>
            <div className="inline-flex items-center">
                <CustomRadio name="radio" value="Metric" onChange={handleChange} checked={selectedOption === 'Metric'} />
                <span className="font-bold text-colors-gunmetal mx-5">Metric</span>
            </div>
            <div className=" inline-flex items-center">
                <CustomRadio name="radio" value="Imperial" onChange={handleChange} checked={selectedOption === 'Imperial'} />
                <span className="font-bold text-colors-gunmetal mx-5">Imperial</span>
            </div>
        </>
    )
}

export default RadioGroup