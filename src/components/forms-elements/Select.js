import React from "react";

const Select = ({name, register, options, labelOption, required, errors}) => (
    <>
        <select {...register(name, {required})}>
            {labelOption && <option key={labelOption} value=''>{labelOption}</option>}
            {options.map(value => (
                <option key={value} value={value}>
                    {value}
                </option>
            ))}
        </select>
        {errors[name]?.type === 'required' && <div>{errors[name].message}</div>}
    </>
);

export default Select;