
const RadioGroup = () => {
    return (
        <>
            <div className="inline-flex items-center">
                <label className="relative flex items-center  rounded-full cursor-pointer" htmlFor="black">
                    <input name="color" type="radio"
                        className="before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border border-gray-400 hover:border-blue-700 checked:border-none  transition-all before:absolute focus:outline-none before:top-2/4 before:left-2/4  before:h-9 before:w-9 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full  before:opacity-20 before:transition-opacity  checked:before:bg-colors-blue"
                        id="black" />
                    <span
                        className="absolute text-colors-blue transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[1.1rem] h-[1.1rem]" viewBox="0 0 16 16" fill="currentColor">
                            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                        </svg>
                    </span>
                </label>
                <span className="font-bold text-colors-gunmetal mx-5">Metric</span>
            </div>
            <div className=" inline-flex items-center">
                <label className="relative flex items-center  rounded-full cursor-pointer" htmlFor="blue">
                    <input name="color" type="radio"
                        className="before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border border-gray-400 hover:border-blue-700 checked:border-none  transition-all before:absolute focus:outline-none before:top-2/4 before:left-2/4  before:h-9 before:w-9 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full  before:opacity-20 before:transition-opacity  checked:before:bg-colors-blue"
                        id="blue" />
                    <span
                        className="absolute text-colors-blue transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[1.1rem] h-[1.1rem]" viewBox="0 0 16 16" fill="currentColor">
                            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                        </svg>
                    </span>
                </label>
                <span className="font-bold text-colors-gunmetal mx-5">Imperial</span>
            </div>
        </>
    )
}

export default RadioGroup