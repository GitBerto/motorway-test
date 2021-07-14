import React from 'react';
import {useForm} from "react-hook-form";
import InputRange from '../forms-elements/InputRange';
import Input from '../forms-elements/Input';
import Select from '../forms-elements/Select';
import DatePicker from '../forms-elements/Datepicker';

const UserForm = () => {
    const {control, register, formState: {errors}, handleSubmit} = useForm();
    const onSubmit = data => {
        alert('Form submitted correctly');
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Input 
                    label="First Name"
                    name="firstName"
                    register={register}
                    required='This field is required'
                    validation={{pattern: /^[A-Za-z]+$/i}}
                    errors={errors}
                />
            </div>

            <div>
                <Input 
                    label="Last Name"
                    name="lastName"
                    register={register}
                    required='This field is required'
                    validation={{pattern: /^[A-Za-z]+$/i}}
                    errors={errors}
                />
            </div>

            <div>
                <DatePicker
                    control={control}
                    name='date'
                    register={register}
                    required={'This field is required'}
                    errors={errors}
                    placeholder='Select a date'
                /> 
            </div>
            
            <div>
                <Select 
                    name="favouriteColor"
                    register={register}
                    options={['green', 'white', 'red']}
                    labelOption="Select your favourte color..."
                    required='This field is required'
                    errors={errors}
                
                /> 
            </div>

            <div>
                <InputRange
                    control={control}
                    name="salary"
                    register={register}
                    rangeMin={0}
                    rangeMax={100000}
                    min={10000}
                    max={100000}
                    errors={errors}
                    placeholder='Salary'
                    required='This field is required'
                />
            </div>

            <input type="submit" value="Submit"/>
        </form>
    )
}

export default UserForm;