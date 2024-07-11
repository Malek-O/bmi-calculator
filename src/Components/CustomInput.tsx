import React from 'react'

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    unit: string
}

const CustomInput = ({ unit, ...props }: CustomInputProps) => {
    return (
        <>
            <div className="relative flex flex-col">
                <span className="absolute right-5 top-6 text-[20px] font-semibold text-colors-blue">{unit}</span>
                <input {...props} placeholder="0" type="text" className="outline-colors-blue focus:border-none px-6 font-semibold text-[20px]  mt-2 p-3 py-4 xl:max-w-[17rem] rounded-lg border border-gray-400" />
            </div>
        </>
    )
}

export default CustomInput