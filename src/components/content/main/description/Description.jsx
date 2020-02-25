import React from "react";
import s from './Description.module.css'
import DescFormRedux from "./form/DescFormRedux";

class Description extends React.Component {

    title = 'Описание:'

    onSubmit = (formData) => {
        let newEditable = !formData.editable;
        this.props.updateDesc(formData.desc, newEditable);
    };

    render = () => {
        return (
            <div className={s.desc}>
                <DescFormRedux onSubmit={this.onSubmit}
                               initialValues={this.props.descPage}
                />
            </div>

        )
    }

}

export default Description;