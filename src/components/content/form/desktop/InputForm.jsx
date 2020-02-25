import React from "react";

export const InputForm = ({input, meta, ...props}) => {
    if (props.editable) {
        return (
            <div>
                <div>
                    <p>Введите заголовок</p>
                </div>
                <input {...input} {...props} />
            </div>
        )
    }
    return (
        <div>
            <h1>{input.value}</h1>
        </div>
    )
};