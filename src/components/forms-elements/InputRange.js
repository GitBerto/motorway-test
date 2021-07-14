import React from "react";
import { Controller } from "react-hook-form";
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import styles from './form-elements.module.css';


const InputRangeComponent = ({control, name, register, required, rangeMin, rangeMax, min, max, step, errors, placeholder}) => {
    return (
        <>
            <div className={styles.inputRangeWrapper}>
                <Controller
                    control={control}
                    {...register(name, {required, min, max})}
                    render={({ field, ref }) => (
                        <InputRange
                            placeholderText={placeholder}
                            maxValue={rangeMax}
                            minValue={rangeMin || 0}
                            step={step}
                            value={field.value || rangeMin}
                            onChange={(value) => field.onChange(value)} 
                            inputRef={ref}
                        />
                    )}
                />
            </div>
            {errors[name]?.type === 'required' && <div>{errors[name].message}</div>} 
            {errors[name]?.type === 'min' && <div>{`Salary cannot be lower than ${min}`}</div> }
        </>
    );
};

export default InputRangeComponent;