const Metric = () => {
    return (
        <div className="flex flex-col sm:grid grid-cols-2 gap-10 mt-10">
            <div className="flex flex-col">
                <label htmlFor="Height">Height</label>
                <div className="relative flex flex-col">
                    <span className="absolute right-5 top-6 text-[20px] font-semibold text-colors-blue">cm</span>
                    <input placeholder="0" type="text" className="px-6 font-semibold text-[20px] hover:outline-colors-blue  focus:outline-colors-blue mt-2 p-3 py-4 xl:max-w-[17rem] rounded-lg border border-gray-400" />
                </div>
            </div>
            <div className="flex flex-col">
                <label htmlFor="Height ">Weight</label>
                <div className="relative flex flex-col">
                    <span className="absolute right-5 top-6 text-[20px] font-semibold text-colors-blue">kg</span>
                    <input placeholder="0" type="text" className="px-6 font-semibold text-[20px] mt-2 p-3 py-4 xl:max-w-[17rem] rounded-lg border border-gray-400" />
                </div>
            </div>
        </div>
    )
}

export default Metric