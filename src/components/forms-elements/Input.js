import React from "react";

const Input = ({label, name, register, required, validation, errors}) => (
    <>
        <input {...register(name, {required, ...validation})} placeholder={label}/>
        {errors[name]?.type === 'required' && <div>{errors[name].message}</div>}
        {errors[name]?.type === 'pattern' && <div>Wrong fromat</div>} 
    </>
);

export default Input;