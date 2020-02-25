import React from "react";
import s from "../../main/description/Description.module.css";

export const DescTextareaFrom = ({input, meta, ...props}) => {

    if (props.editable) {
        return (
            <div className={s.content}>
                <div>
                    <p1>Введите основной текст</p1>
                </div>
                <textarea id='text' {...input} {...props} className={s.c_textarea}/>
            </div>
        )
    }
    return (
        <div className={s.content}>
            <pre>
                {input.value}
            </pre>
        </div>
    )
};