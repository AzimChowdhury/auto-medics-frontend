"use client"

import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form"



const FormInput = ({ name, type, size, value, id, placeholder, validation, label, required, disabled }) => {
    const { control, formState: { errors } } = useFormContext()
    return (
        <>
            {label ? label : null}
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    type === 'password' ?
                        <div>
                            <Input.Password
                                {...field}
                                type={type}
                                size={size}
                                placeholder={placeholder}
                                value={value ? value : field.value}
                                required
                            />
                        </div>
                        :
                        <Input
                            {...field}
                            type={type}
                            size={size}
                            placeholder={placeholder}
                            value={value ? value : field.value}
                            required={required}
                            disabled={disabled}
                        />

                )}
            />
        </>
    );
}
export default FormInput;