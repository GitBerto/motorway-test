import React from "react";
import { Controller } from "react-hook-form";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = ({control, name, register, required, errors, placeholder}) => {
    return (
    <>
        <Controller
            control={control}
            {...register(name, {required})}
            render={({field}) => (
                <DatePicker
                    placeholderText = {placeholder}
                    onChange = {(date) => field.onChange(date)}
                    selected = {field.value}
                />
            )}
        />
        {errors[name]?.type === 'required' && <div>{errors[name].message}</div>} 
    </>
)};

export default DatePickerComponent;